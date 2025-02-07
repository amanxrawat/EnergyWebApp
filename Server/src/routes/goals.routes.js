// routes/goals.routes.js
import express from 'express';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/', verifyToken, (req, res) => {
  // Temporary mock data
  res.json([
    { description: 'Reduce monthly consumption', progress: 65 },
    { description: 'Switch to LED lighting', progress: 80 }
  ]);
});

export default router; 