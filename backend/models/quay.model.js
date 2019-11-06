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
  }
}, {
  timestamps: true,
});

const Quay = mongoose.model('Quay', quaySchema);


module.exports = Quay;