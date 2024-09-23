import express from "express";
import { IdeaController } from "../controllers/IdeaController.js";
import { ensureUsersVoteOnlyOtherUsersIdeasNotAlreadyVoted } from "../middleware/authorization.js";

export const voteRouter = new express.Router();

/**
 * @swagger
 * /vote/{id}:
 *   post:
 *     summary: Vota un'idea
 *     description: Permette a un utente di votare un'idea, a condizione che l'utente non abbia già votato quell'idea e che l'idea sia stata creata da un altro utente.
 *     tags: [Vote]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID univoco dell'idea da votare
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: ID dell'utente che sta votando
 *             required:
 *               - userId
 *     responses:
 *       200:
 *         description: Voto registrato con successo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 vote:
 *                   type: object
 *                   properties:
 *                     ideaId:
 *                       type: string
 *                     userId:
 *                       type: string
 *       400:
 *         description: Richiesta non valida
 *       401:
 *         description: Non autorizzato
 *       500:
 *         description: Errore interno del server
 */
voteRouter.post("/vote/:id", ensureUsersVoteOnlyOtherUsersIdeasNotAlreadyVoted, (req, res, next) => {
  IdeaController.vote(req).then(vote => {
    res.json(vote)
  }).catch(err => {
    next(err);
  });
}
);
