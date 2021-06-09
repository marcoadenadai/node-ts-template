import express from 'express';
import {port} from '@config/config';
import {routes} from './routes';

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});