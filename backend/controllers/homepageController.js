import { Idea } from "../models/Database.js";
import sequelize from "sequelize";

export class HomepageController {

  static async getPage(req) {
    switch (req.params.order) {
      case "controversial":
        return Idea.scope('withVotesCount').findAll({
          where: {
            createdAt: {
              [sequelize.Op.gte]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
            }
          },
          order: [
            [sequelize.literal('ABS(score)'), 'ASC'],
            ['TotalVotes', 'DESC']
          ],
          limit: 10,
          offset: 10 * (req.params.number - 1)
        });
      case "mainstream":
        return Idea.scope('withVotesCount').findAll({
          where: {
            createdAt: {
              [sequelize.Op.gte]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
            }
          },
          order: [['score', 'DESC']],
          limit: 10,
          offset: 10 * (req.params.number - 1)
        });
      case "unpopular":
        return Idea.scope('withVotesCount').findAll({
          where: {
            createdAt: {
              [sequelize.Op.gte]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
            }
          },
          order: [['score', 'ASC']],
          limit: 10,
          offset: 10 * (req.params.number - 1)
        });
      case "newest":
        return Idea.scope('withVotesCount').findAll({
          where: {
            createdAt: {
              [sequelize.Op.gte]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
            }
          },
          order: [['createdAt', 'DESC']],
          limit: 10,
          offset: 10 * (req.params.number - 1)
        });
      default:
        throw new Error("Invalid order parameter");
    }
  }
}