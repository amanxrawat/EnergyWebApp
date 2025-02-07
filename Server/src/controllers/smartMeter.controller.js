// backend/controllers/smartMeter.controller.js
import Device from '../models/Device.js';

export const getSmartMeterData = async (req, res) => {
  try {
    // Simulate smart meter readings
    const currentTime = new Date();
    const readings = [];
    
    for (let i = 0; i < 24; i++) {
      readings.push({
        timestamp: new Date(currentTime - i * 3600000),
        value: Math.random() * 10 + 5 // Random value between 5-15 kWh
      });
    }
    
    res.json(readings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching smart meter data" });
  }
};

export const getRoomConsumption = async (req, res) => {
  try {
    const { roomId } = req.params;
    // Simulate room-specific consumption
    const consumption = Math.random() * 5 + 1; // Random value between 1-6 kWh
    
    res.json({ consumption });
  } catch (error) {
    res.status(500).json({ message: "Error fetching room consumption" });
  }
};
