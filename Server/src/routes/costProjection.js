// backend/routes/costProjection.js
import express from 'express';

const router = express.Router();

router.post('/cost-projection', (req, res) => {
  const { currentConsumption, reductionGoal } = req.body;
  const projections = [];
  
  for (let year = 1; year <= 5; year++) {
    projections.push({
      year: `Year ${year}`,
      savings: currentConsumption * (reductionGoal/100) * year
    });
  }

  res.json({
    years: projections.map(p => p.year),
    savings: projections.map(p => p.savings)
  });
});


export default router;
