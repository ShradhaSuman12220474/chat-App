import express from 'express';
import userRouter from './users.js';
import messagesRouter from './messages.js';
const router = express.Router();

router.use('/users',userRouter);
router.use('/messages', messagesRouter);

export default router;