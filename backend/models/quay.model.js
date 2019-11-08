const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const quaySchema = new Schema({
  quayname: {
    type: String, 
    required: true, 
    trim: true
  },
  info: {
    type: String
  },
  location: {
    type: String, 
    required: true
  },
  wallType: {
    type: String
  },
  heightAboveBed: {
    type: Number
  },
  embedmentDepth: {
    type: Number
  },
  stationId: {
    type: String
  }
}, {
  timestamps: true,
});

const Quay = mongoose.model('Quay', quaySchema);


module.exports = Quay;