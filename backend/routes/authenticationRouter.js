import express from "express";
import { AuthController } from "../controllers/AuthController.js";

export const authenticationRouter = express.Router();

/**
 * @swagger
 * /auth:
 *   post:
 *     summary: Authenticate user
 *     description: Authenticate user
 *     tags: [Authentication]
 *     produces:
 *       - application/json
 *     requestBody:
 *       description: user credentials to authenticate
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usr:
 *                 type: string
 *                 example: Kyle
 *               pwd:
 *                 type: string
 *                 example: p4ssw0rd
 *     responses:
 *       200:
 *         description: User authenticated
 *       401:
 *         description: Invalid credentials
 */
authenticationRouter.post("/auth", async (req, res) => {
  let isAuthenticated = await AuthController.checkCredentials(req, res);
  if (isAuthenticated) {
    res.json(AuthController.issueToken(req.body.usr));
  } else {
    res.status(401);
    res.json({ error: "Invalid credentials. Try again." });
  }
});

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user
 *     tags: [Authentication]
 *     produces:
 *       - application/json
 *     requestBody:
 *       description: user credentials to register
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usr:
 *                 type: string
 *                 example: Kyle
 *               pwd:
 *                 type: string
 *                 example: p4ssw0rd
 *     responses:
 *       200:
 *         description: User registered
 *       500:
 *         description: Could not save user
 */
authenticationRouter.post("/signup", (req, res, next) => {
  AuthController.saveUser(req, res)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      next({ status: 500, message: "Could not save user" });
    });
});

/**
 * @swagger
 * /logout:
 *   get:
 *     summary: Logs out the user
 *     description: Logs out the user
 *     tags: [Authentication]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: User logged out
 */
authenticationRouter.get("/logout", (req, res) => {
  AuthController.invalidateToken(req, res);
  res.json({ message: "User logged out" });
});
