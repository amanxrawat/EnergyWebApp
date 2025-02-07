// // routes/recommendation.routes.js
// import express from 'express';
// import { getRecommendations } from '../controllers/recommendationController.js';
// import { verifyToken } from '../middleware/verifyToken.js';

// const router = express.Router();

// router.get('/recommendations', verifyToken, getRecommendations);

// export default router;
// routes/recommendations.routes.js
import express from 'express';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/', verifyToken, (req, res) => {
  // Temporary mock data
  res.json([
    {
      title: 'LED Lighting Upgrade',
      savings: '15%',
      priority: 'High'
    },
    {
      title: 'HVAC Optimization',
      savings: '20%',
      priority: 'Medium'
    }
  ]);
});

export default router;