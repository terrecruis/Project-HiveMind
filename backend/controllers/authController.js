import { User, Idea, Vote } from "../models/Database.js";
import Jwt from "jsonwebtoken";
import { Op } from "sequelize";

// Blacklist temporanea in memoria per i token invalidati
const blacklistedTokens = new Set();

export class AuthController {
  /**
   * Handles post requests on /auth. Checks that the given credentials are valid
   * @param {http.IncomingMessage} request 
   * @param {http.ServerResponse} response 
   */
  static async checkCredentials(req, res){
    let user = new User({ //user data specified in the request
      userName: req.body.usr, 
      password: req.body.pwd
    });

    let found = await User.findOne({
      where: {
        userName: user.userName,
        password: user.password //password was hashed when creating user
      }
    });

    return found !== null;
  }

  /**
   * Attempts to create a new User
   */
  static async saveUser(req, res){
    //save new user
    let user = new User({
      userName: req.body.usr, 
      password: req.body.pwd
    });
    return user.save(); //returns a Promise
  }

  static issueToken(username){
    return Jwt.sign({user:username}, process.env.TOKEN_SECRET, {expiresIn: `${24*60*60}s`});
  }

  static isTokenValid(token, callback){
    // Check if the token is in the blacklist
    if (blacklistedTokens.has(token)) {
      callback(new Error("Token is invalidated"), null);
    } else {
      Jwt.verify(token, process.env.TOKEN_SECRET, callback);
    }
  }

  static async canUserVoteIdea(user, ideaId) {
    const idea = await Idea.findByPk(ideaId);
    const vote = await Vote.findOne({
      where: {
        [Op.and]: [
          { UserUserName: user },
          { IdeaId: ideaId },
        ]
      }
    });
    return idea !== null && vote === null && idea.UserUserName !== user;
  }

  /**
   * Invalidates a token by adding it to the blacklist
   * @param {http.IncomingMessage} req 
   * @param {http.ServerResponse} res 
   */
  static invalidateToken(req, res) {
    const token = req.body.token;

    if (!token) {
      return res.status(400).json({ error: "Token is required" });
    }

    // Add the token to the blacklist
    blacklistedTokens.add(token);

    return res.status(200).json({ message: "Token invalidated successfully" });
  }
}
