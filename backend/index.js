import express from 'express';
import db from './config/database.js';
import dotenv from 'dotenv';

const app = express()
dotenv.config()
await db.authenticate
app.listen(5000, () => console.log('Connected'))