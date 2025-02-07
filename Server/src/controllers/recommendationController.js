// // controllers/recommendationController.js
// export const generateRecommendations = async (req, res) => {
//     try {
//       // AI Model Integration
//       const recommendations = await aiModel.analyze(req.user.id);
//       res.json(recommendations);
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to generate recommendations' });
//     }
//   };


export const getRecommendations = async (req, res) => {
  try {
    const { energyUsage, buildingType } = req.body;
    
    // Basic recommendations based on usage patterns
    const recommendations = [
      {
        title: 'LED Lighting Upgrade',
        savings: '15%',
        cost: 'Medium',
        priority: 'High'
      },
      {
        title: 'HVAC Optimization',
        savings: '20%',
        cost: 'High',
        priority: 'Medium'
      }
    ];
    
    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ message: "Error generating recommendations" });
  }
};
