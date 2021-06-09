import dotenv from 'dotenv';
dotenv.config({path: __dirname + '/.env'});

export const port = process.env.PORT;
export const dbName = process.env.DB_NAME;