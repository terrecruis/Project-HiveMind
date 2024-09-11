import express from "express";
import { HomepageController } from "../controllers/HomepageController.js";

export const homepageRouter = new express.Router();

/**
 * @swagger
 * /page/{order}/{number}:
 *   get:
 *     summary: Ottiene le idee per la homepage
 *     description: Recupera un elenco di idee per la homepage, ordinato e paginato in base ai parametri forniti.
 *     tags: [Homepage]
 *     parameters:
 *       - in: path
 *         name: order
 *         schema:
 *           type: string
 *         required: true
 *         description: L'ordine di visualizzazione delle idee (es. più recenti, più votati)
 *       - in: path
 *         name: number
 *         schema:
 *           type: integer
 *         required: true
 *         description: Il numero di pagina delle idee da recuperare
 *     responses:
 *       200:
 *         description: Elenco di idee recuperato con successo
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID univoco dell'idea
 *                   title:
 *                     type: string
 *                     description: Titolo dell'idea
 *                   description:
 *                     type: string
 *                     description: Descrizione dell'idea
 *                   votes:
 *                     type: integer
 *                     description: Numero totale di voti dell'idea
 *       400:
 *         description: Richiesta non valida
 *       500:
 *         description: Errore interno del server
 */
homepageRouter.get("/page/:order/:number", (req, res, next) => {
  HomepageController.getPage(req).then(ideas => {
    res.json(ideas)
  }).catch(err => {
    next(err);
  });
});

