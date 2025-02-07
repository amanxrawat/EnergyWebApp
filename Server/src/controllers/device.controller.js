// controllers/device.controller.js
import Device from '../models/Device.js';

export const getAllDevices = async (req, res) => {
  try {
    const devices = await Device.find({ userId: req.userId });
    res.json(devices);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching devices' });
  }
};

export const toggleDevice = async (req, res) => {
  try {
    const device = await Device.findById(req.params.id);
    if (!device) return res.status(404).json({ message: 'Device not found' });
    
    device.status = !device.status;
    await device.save();
    
    res.json(device);
  } catch (error) {
    res.status(500).json({ message: 'Error toggling device' });
  }
};
