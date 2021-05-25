const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
  program: {
    type: String,
    required: true
  },
  punch: {
    type: String,
    required: true
  },
  month: {
    type: String,
    required: true
  },
  day: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  user: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('schedule', ScheduleSchema);