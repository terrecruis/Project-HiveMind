import { Idea, Vote, Comment } from "../models/Database.js";

export class IdeaController {
  
  static async getIdeasForCurrentUser(req){
    return Idea.findAll({
      where: {
        UserUserName: req.username
      }
    })
  }

  static async getIdeas(){
    return Idea.scope('withVotesCount').findAll();
  }
  
  static async saveIdea(req){
    let idea = Idea.build(req.body);
    idea.UserUserName = req.username;
    return idea.save();
  }

  static async findById(req){
    return Idea.findByPk(req.params.id);
  }

  static async getDetailedIdea(req){
    return Idea.scope('full').findByPk(req.params.id);
  }

  static async update(id, updated){
    let idea = await Idea.findByPk(id);
    idea.set(updated); //update using fields which were passed in request
    return idea.save();
  }

  static async delete(req){
    return new Promise( (resolve, reject) => {
      this.findById(req).then( item => {
        item.destroy().then( () => {resolve(item)})
      })
    })
  }

  static async vote(req){
    let vote = Vote.build(req.body);
    vote.UserUserName = req.username;
    vote.value = req.body.value;
    vote.IdeaId = req.params.id;
    return vote.save();
  }

  static async saveComment(req){
    let comment = Comment.build(req.body);
    comment.UserUserName = req.username;
    comment.IdeaId = req.params.id;
    return comment.save();
  }

}