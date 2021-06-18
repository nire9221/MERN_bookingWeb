const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
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
    ref: 'user'
  }],
  created: {
    type: Date,
    required:true,
    default: Date.now
  }
});

module.exports = mongoose.model('schedule', scheduleSchema);



/*

const schedule = schedule()
schedule.format("dddd MMM Mo YYYY ")



const today = Date.now();

console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(today));

*/