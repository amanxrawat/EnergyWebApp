// backend/routes/smartMeter.routes.js
import express from 'express';
import { getSmartMeterData, getRoomConsumption } from '../controllers/smartMeter.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/readings', verifyToken, getSmartMeterData);
router.get('/room/:roomId/consumption', verifyToken, getRoomConsumption);

export default router;
