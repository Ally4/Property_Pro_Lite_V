/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import express from 'express';
import signup from '../controllers/signup';

const router = express.Router();

router.post('/signup', signup);

export default router;