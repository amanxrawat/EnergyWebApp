import EnergyData from '../models/EnergyData.js';

export const getBenchmarkData = async (req, res) => {
  try {
    const { buildingType, squareFootage } = req.body;
    // Calculate industry average for similar buildings
    const industryAverage = 75; // Example value, should be calculated from database
    const userConsumption = 68; // Get from user's energy data
    
    const comparison = {
      userConsumption,
      industryAverage,
      difference: ((userConsumption - industryAverage) / industryAverage * 100).toFixed(1)
    };
    
    res.json(comparison);
  } catch (error) {
    res.status(500).json({ message: "Error calculating benchmark" });
  }
};
