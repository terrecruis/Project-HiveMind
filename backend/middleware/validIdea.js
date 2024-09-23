/**
 * This middleware ensures that the user is currently authenticated. If not,
 * redirects to login with an error message.
 */

let maxIdeaLength = 400;

export function ensureIdeaDoesntExeedMaxLength(req, res, next){
  if(req.body.description.length > maxIdeaLength || req.body.title.length > maxIdeaLength){
    next({status: 400, message: "Idea is too long"});
  } else {
    next();
  }
}