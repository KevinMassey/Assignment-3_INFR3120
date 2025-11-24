
//This file is for mongoDB, it defines what values are stored (in this case excercise, reps and weight.)
const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  exercise: { type: String, required: true },
  reps: { type: Number },
  weight: { type: Number },
});

module.exports = mongoose.model('Workout', workoutSchema);
