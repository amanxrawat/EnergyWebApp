import mongoose from 'mongoose';

const deviceSchema = new mongoose.Schema({
  name: String,
  room: String,
  status: Boolean,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

// module.exports = mongoose.model('Device', deviceSchema);
const Device = mongoose.model("Device", deviceSchema);
export default Device;
