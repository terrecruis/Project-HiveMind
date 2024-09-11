import express from "express";
import { IdeaController } from "../controllers/IdeaController.js";

export const commentRouter = new express.Router();


/**
 * @swagger
 * /comment/{id}:
 *   post:
 *     summary: Aggiunge un commento a un'idea
 *     description: Permette a un utente di aggiungere un commento a un'idea specifica.
 *     tags: [Comment]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID univoco dell'idea a cui aggiungere il commento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: ID dell'utente che sta aggiungendo il commento
 *               text:
 *                 type: string
 *                 description: Testo del commento
 *             required:
 *               - userId
 *               - text
 *     responses:
 *       200:
 *         description: Commento aggiunto con successo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 comment:
 *                   type: object
 *                   properties:
 *                     ideaId:
 *                       type: string
 *                     userId:
 *                       type: string
 *                     text:
 *                       type: string
 *       400:
 *         description: Richiesta non valida
 *       401:
 *         description: Non autorizzato
 *       500:
 *         description: Errore interno del server
 */
commentRouter.post("/comment/:id", (req, res, next) => {
  IdeaController.saveComment(req).then( result => {
    res.json(result);
  }).catch(err => {
    next(err);
  });
});
