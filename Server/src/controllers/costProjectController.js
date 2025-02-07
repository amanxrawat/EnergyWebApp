export const calculateProjection = async (req, res) => {
    try {
      const { currentUsage, ratePerUnit } = req.body;
      const years = 5;
      const projectedSavings = [];
      
      for (let i = 1; i <= years; i++) {
        projectedSavings.push({
          year: i,
          savings: currentUsage * 0.15 * i * ratePerUnit // Assuming 15% reduction per year
        });
      }
      
      res.json(projectedSavings);
    } catch (error) {
      res.status(500).json({ message: "Error calculating projection" });
    }
  };
  