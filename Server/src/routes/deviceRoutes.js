// import express from 'express';
// const router = express.Router();
// import Device from '../models/Device.js';
// import auth from '../middleware/auth';
// import { verifyToken } from '../middleware/verifyToken.js';
// router.get('/devices', auth, async (req, res) => {
//   try {
//     const devices = await Device.find({ userId: req.user.id });
//     res.json(devices);
//   } catch (error) {
//     res.status(500).send('Server Error');
//   }
// });

// router.post('/devices/toggle/:id', verifyToken, async (req, res) => {
//   try {
//     const device = await Device.findById(req.params.id);
//     if (!device) return res.status(404).json({ msg: 'Device not found' });
    
//     device.status = !device.status;
//     await device.save();
    
//     res.json(device);
//   } catch (error) {
//     res.status(500).send('Server Error');
//   }
// });

// export default router;


import express from 'express';
import Device from '../models/Device.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/devices', verifyToken, async (req, res) => {
  try {
    const devices = await Device.find({ userId: req.userId }); // Note: changed from req.user.id to req.userId
    res.json(devices);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

router.post('/devices/toggle/:id', verifyToken, async (req, res) => {
  try {
    const device = await Device.findById(req.params.id);
    if (!device) return res.status(404).json({ message: 'Device not found' });
    
    device.status = !device.status;
    await device.save();
    
    res.json(device);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
