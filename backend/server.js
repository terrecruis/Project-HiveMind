import express from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import morgan from 'morgan';

import { homepageRouter } from './routes/homepageRouter.js';
import { authRouter } from './routes/authRouter.js';
import { enforceAuthentication } from './middleware/auth.js';
import { ideaRouter } from './routes/ideaRouter.js';
import { voteRouter } from './routes/voteRouter.js';
import { commentRouter } from './routes/commentRouter.js';

const app = express();
const PORT = 3000;

app.use(morgan('dev')); // for logging
app.use(cors()); // for cross-origin requests

app.use(express.json()); // for parsing application/json

// Init swagger-jsdoc 
const swaggerSpec = swaggerJSDoc({
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'HAVEMIND PROJECT API',
            version: '1.0.0',
        },
    },
    apis: ['./routes/*.js'],
});
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));


// Error handler
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(err.status || 500).json({
        code: err.status || 500,
        description: err.message || "An error occurred"
    });
});

// Define routes
app.use(homepageRouter);
app.use(authRouter);
app.use(enforceAuthentication);
app.use(ideaRouter);
app.use(voteRouter);
app.use(commentRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
