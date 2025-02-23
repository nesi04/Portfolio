import express from 'express';
import { getMessage, sendMessage } from '../Controller/ContactController.js';

const router = express.Router();
router.get('/',getMessage);
router.post('/',sendMessage);

export default router;
