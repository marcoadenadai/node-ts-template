import { Router } from 'express';

export const routes = Router();

routes.get('/', function (req, res) {
    res.send('Welcome, you are not authorized.');
})