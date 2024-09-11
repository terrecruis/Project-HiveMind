import express from "express";
import { IdeaController } from "../controllers/IdeaController.js";
import { ensureIdeaDoesntExeedMaxLength } from "../middleware/validIdea.js";

export const ideaRouter = new express.Router();


/**
 * @swagger
 * /ideas:
 *   post:
 *     summary: Crea una nuova idea
 *     description: Permette la creazione di una nuova idea, assicurandosi che non superi la lunghezza massima consentita.
 *     tags: [Idea]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Titolo dell'idea
 *               description:
 *                 type: string
 *                 description: Descrizione dell'idea
 *             required:
 *               - title
 *               - description
 *     responses:
 *       200:
 *         description: Idea creata con successo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 idea:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     title:
 *                       type: string
 *                     description:
 *                       type: string
 *       400:
 *         description: Richiesta non valida a causa di dati di input non validi o idea che supera la lunghezza massima consentita
 *       500:
 *         description: Errore interno del server
 */
ideaRouter.post("/ideas", ensureIdeaDoesntExeedMaxLength, (req, res, next) => {
  IdeaController.saveIdea(req).then( result => {
    res.json(result);
  }).catch(err => {
    next(err);
  });
});


/**
 * @swagger
 * /ideas/{id}:
 *   get:
 *     summary: Ottiene i dettagli di un'idea specifica
 *     description: Recupera i dettagli di un'idea specifica tramite il suo ID univoco.
 *     tags: [Idea]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID univoco dell'idea da recuperare
 *     responses:
 *       200:
 *         description: Dettagli dell'idea recuperati con successo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 votes:
 *                   type: integer
 *       404:
 *         description: Idea non trovata
 *       500:
 *         description: Errore interno del server
 */
ideaRouter.get("/ideas/:id", (req, res, next) => {
  IdeaController.getDetailedIdea(req).then( (item) => {
    if(item)
      res.json(item);
    else 
      next({status: 404, message: "Idea not found"});
  }).catch( err => {
    next(err);
  });
});
