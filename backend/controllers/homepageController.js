import sequelize from 'sequelize';
import { idea } from '../models/database.js';

export class HomepageController {

    static async getHomepageIdea(req) {
        const { order, number } = req.params;

        switch (order) {
          case "controversial":
            return this.getControversialIdeas(number);
          case "mainstream":
            return this.getMainstreamIdeas(number);
          case "unpopular":
            return this.getUnpopularIdeas(number);
          case "newest":
            return this.getNewestIdeas(number);
          default:
            throw new Error("Invalid order parameter");
        }
      }

      // get the most controversial ideas of the week
      static async getControversialIdeas(pageNumber) {
        return idea.scope('withVotesCount').findAll({
          where: {
            createdAt: {
              [sequelize.Op.gte]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000) // ultime 7 giorni
            }
          },
          order: [
            [sequelize.literal('ABS(score)'), 'ASC'], // score assoluto, ordine crescente
            ['TotalVotes', 'DESC'] // totale voti, ordine decrescente
          ],
          limit: 10,
          offset: 10 * (pageNumber - 1)
        });
      }
    
      // get the most mainstream ideas of the week
      static async getMainstreamIdeas(pageNumber) {
        return idea.scope('withVotesCount').findAll({
          where: {
            createdAt: {
              [sequelize.Op.gte]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
            }
          },
          order: [['score', 'DESC']], // score ordine decrescente
          limit: 10,
          offset: 10 * (pageNumber - 1)
        });
      }
    
      // get the most unpopular ideas of the week
      static async getUnpopularIdeas(pageNumber) {
        return idea.scope('withVotesCount').findAll({
          where: {
            createdAt: {
              [sequelize.Op.gte]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
            }
          },
          order: [['score', 'ASC']], // score ordine crescente
          limit: 10,
          offset: 10 * (pageNumber - 1)
        });
      }
    
      // get the newest ideas of the week
      static async getNewestIdeas(pageNumber) {
        return idea.scope('withVotesCount').findAll({
          where: {
            createdAt: {
              [sequelize.Op.gte]: new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
            }
          },
          order: [['createdAt', 'DESC']], // ordine di creazione decrescente
          limit: 10,
          offset: 10 * (pageNumber - 1)
        });
      }  
      
}