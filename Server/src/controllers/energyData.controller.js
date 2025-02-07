// controllers/energyData.controller.js
import mongoose from 'mongoose';
import EnergyData from '../models/EnergyData.js';

export const getCurrentEnergy = async (req, res) => {
  try {
    const energyData = await EnergyData.findOne({ 
      userId: req.userId 
    }).sort({ timestamp: -1 });
    
    res.json(energyData || { energyUsage: 0 });
  } catch (error) {
    res.status(500).json({ message: "Error fetching energy data" });
  }
};

export const addEnergyData = async (req, res) => {
  try {
    const { date, usage, buildingType, squareFootage } = req.body;
    console.log("succesfful ha ");
    // Validate the data
    if (!date || !usage || !buildingType || !squareFootage) {  
    console.log("succesfful ha 2");

      return res.status(400).json({ message: "All fields are required" });
    }

    const newEnergyData = new EnergyData({
      userId: req.userId,
      date: new Date(date),
      usage: Number(usage),
      buildingType,
      squareFootage: Number(squareFootage)
    });

    await newEnergyData.save();
    res.status(201).json(newEnergyData);
  } catch (error) {
    console.error('Error saving energy data:', error);
    res.status(500).json({ message: "Error saving energy data", error: error.message });
  }
};

export const getEnergySummary = async (req, res) => {
    try {
      // Mock data for testing
      const mockData = {
        daily: [
          { date: '2025-02-01', usage: 45 },
          { date: '2025-02-02', usage: 42 },
          { date: '2025-02-03', usage: 38 },
          { date: '2025-02-04', usage: 40 },
          { date: '2025-02-05', usage: 35 },
          { date: '2025-02-06', usage: 37 },
          { date: '2025-02-07', usage: 41 }
        ],
        monthly: [
          { _id: { year: 2025, month: 1 }, usage: 1200 },
          { _id: { year: 2025, month: 2 }, usage: 1000 }
        ]
      };
      
      res.json(mockData);
    } catch (error) {
      res.status(500).json({ message: "Error fetching energy summary" });
    }


};
  
