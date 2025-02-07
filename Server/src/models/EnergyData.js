// // models/EnergyData.js
// import mongoose from 'mongoose';

// const energyDataSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   timestamp: {
//     type: Date,
//     default: Date.now
//   },
//   energyUsage: {
//     type: Number,
//     required: true
//   },
//   buildingType: {
//     type: String,
//     required: true
//   },
//   squareFootage: {
//     type: Number,
//     required: true
//   }
// });

// const EnergyData = mongoose.model('EnergyData', energyDataSchema);
// export default EnergyData;


// models/EnergyData.js
import mongoose from 'mongoose';
const energyDataSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  usage: {
    type: Number,
    required: true
  },
  buildingType: {
    type: String,
    required: true
  },
  squareFootage: {
    type: Number,
    required: true
  }
});

const energyData = mongoose.model("EnergyData", energyDataSchema);
export default energyData;