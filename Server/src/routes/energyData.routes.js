// routes/energyData.routes.js
import express from 'express';
import { 
  getCurrentEnergy, 
  addEnergyData, 
  getEnergySummary 
} from '../controllers/energyData.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/current', verifyToken, getCurrentEnergy);
router.get('/summary', verifyToken, getEnergySummary);
router.post('/add', verifyToken, addEnergyData);

export default router;
