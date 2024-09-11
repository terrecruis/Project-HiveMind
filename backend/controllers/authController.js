import { user, idea, comment, vote } from "../models/database.js";
import { Op } from "sequelize";
import JWT from "jsonwebtoken";

const invalidTokens = new Set();

export class AuthController {

    /**
    * Handles post requests on /auth. Checks that the given credentials are valid
    * @param {http.IncomingMessage} request 
    * @param {http.ServerResponse} response 
    */
    static async checkCredentials(req, res){
        let User = new user({ //user data specified in the request
          userName: req.body.usr, 
          password: req.body.pwd
        });
    
        let found = await user.findOne({
          where: {
            userName: User.userName,
            password: User.password //password was hashed when creating user
          }
        });
    
        return found !== null;
      }

      // generate a token for the user
      static issueToken(usr){
        let token = JWT.sign({userName: usr}, process.env.JWT_SECRET, {expiresIn: '1h'});
      }
 
      static async saveUser(req, res){
        let User = new user({ //user data specified in the request
          userName: req.body.usr, 
          password: req.body.pwd
        });
        return user.save(); 
      }

      static isTokenValid(token, callback){
        if (invalidTokens.has(req.token)) {
          callback(new Error('Invalid token'), null);
        } else {
          JWT.verify(token, process.env.JWT_SECRET, callback);
        }
    }

    static invalidateToken(req, res){
        const token = req.body.token;

        if(!token){
            res.status(400).send('Token is required');
        }
        invalidTokens.add(token);
        return res.status(200).send('Token invalidated');
    }

    // Check if the user can vote for an idea 
    static async canUserVote(user, ideaID) {
        const Idea = await idea.findByPk(ideaID);
        const Vote = await vote.findOne({
            where: {
                userId: user.id,
                ideaId: ideaID
            }
        });
        return Idea !== null && Vote === null && Idea.userId !== user.id;
    }

}