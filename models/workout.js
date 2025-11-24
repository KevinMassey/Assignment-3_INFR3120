
//This file is for mongoDB, it defines what values are stored (in this case excercise, reps and weight.)
const mongoose = require('mongoose');

//This definese the schema as well as mandatory field (Excercise) because you cannot have an entry without it. (No excercise, no reps / weight.)
const workoutSchema = new mongoose.Schema({
  exercise: { type: String, required: true },
  reps: { type: Number },
  weight: { type: Number },
});

//Creates a mongoose model called "Workout" based on the schema above.
module.exports = mongoose.model('Workout', workoutSchema);
