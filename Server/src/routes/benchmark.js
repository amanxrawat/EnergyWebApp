// backend/routes/benchmark.js (Benchmarking API)
import express from 'express';
import energyData from '../models/EnergyData.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.post('/benchmark', async (req, res) => {
  try {
    const { totalEnergy, squareFootage } = req.body;
    
    // Calculate EUI (Energy Use Intensity)
    const eui = (totalEnergy / squareFootage).toFixed(2);

    // Get benchmark data from database
    const benchmarkData = await energyData.aggregate([
      { $match: { type: 'similar-building' } },
      { $group: { _id: null, avgEUI: { $avg: "$eui" } } }
    ]);

    const comparison = {
      currentEUI: eui,
      averageEUI: benchmarkData[0]?.avgEUI || 0,
      comparisonPercentage: ((eui - benchmarkData[0]?.avgEUI) / benchmarkData[0]?.avgEUI * 100).toFixed(1)
    };

    res.json(comparison);
  } catch (error) {
    res.status(500).json({ error: 'Benchmarking failed' });
  }
});

export default router;