const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tideSchema = new Schema({
  quayId:{
    type: String
  },
  date: {
    type: Date,
    required: true, 
    unique: true },
  levels: {
    type: String
  }
}, {
  timestamps: true,
});

const Tide = mongoose.model('Tide', tideSchema);


module.exports = Tide;

