// // models/Audit.js
// import mongoose from 'mongoose';
// const auditSchema = new mongoose.Schema({
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User',   required: true },
//     buildingType: String,
//     squareFootage: Number,
//     operatingHours: { start: String, end: String },
//     hvacSystem: { type: String, age: Number },
//     lighting: { ledPercentage: Number },
//     recommendations: [String],
//     createdAt: { type: Date, default: Date.now }
//   });

//   export default mongoose.model('Audit', auditSchema);


import mongoose from 'mongoose';

const auditSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  buildingType: {
    type: String,
    required: true,
    enum: ['commercial', 'residential', 'industrial']
  },
  squareFootage: {
    type: Number,
    required: [true, 'Square footage is required'],
    min: [100, 'Minimum 100 sq.ft required'],
    max: [1000000, 'Maximum 1,000,000 sq.ft allowed'],
    validate: {
      validator: Number.isInteger,
      message: 'Must be whole number'
    }
  },
  operatingHours: {
    start: {
      type: String,
      required: true,
      match: /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/
    },
    end: {
      type: String,
      required: true,
      match: /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/
    }
  },
  hvacSystem: {
    type: {
      type: String,
      required: true,
      enum: ['vav', 'cav', 'vrf']
    },
    age: {
      type: Number,
      min: 0,
      max: 50
    }
  },
  recommendations: [{
    category: String,
    description: String,
    estimatedSavings: Number,
    implementationCost: Number
  }],
  auditDate: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const Audit = mongoose.model('Audit', auditSchema);
export default Audit;
