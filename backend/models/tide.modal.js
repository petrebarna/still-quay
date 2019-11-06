const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tideSchema = new Schema({
  date: {
    type: date,
    required: true, 
    unique: true },
  level: {
    type: double
  }
}, {
  timestamps: true,
});

const Tide = mongoose.model('Tide', tideSchema);

module.exports = Tide;

