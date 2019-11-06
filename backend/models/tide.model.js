const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tideSchema = new Schema({
  date: {
    type: Date,
    required: true, 
    unique: true },
  level: {
    type: Double
  }
}, {
  timestamps: true,
});

const Tide = mongoose.model('Tide', tideSchema);

module.exports = Tide;

