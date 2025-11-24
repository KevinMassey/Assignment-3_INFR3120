const express = require('express');
const router = express.Router();
const Workout = require('../models/workout');

// This is our Lnading page. (Splash Page)
router.get('/', (req, res) => {
  res.render('index');
});

// For the Read Section
router.get('/workouts', async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.render('workouts', { workouts });
  } catch (err) {
    res.send("Error: " + err.message);
  }
});

//This is where we can Add a new workout.
router.post('/workouts/add', async (req, res) => {
  const { exercise, reps, weight } = req.body;
  try {
    const workout = new Workout({ exercise, reps, weight });
    await workout.save();
    res.redirect('/workouts');
  } catch (err) {
    res.send("Error: " + err.message);
  }
});

//This is how you get the data for "Update" a section.
router.get('/workouts/:id/edit', async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    res.render('edit', { workout });
  } catch (err) {
    res.send("Error: " + err.message);
  }
});

//This is the section for submitting an edit.
router.post('/workouts/:id/edit', async (req, res) => {
  const { exercise, reps, weight } = req.body;
  try {
    await Workout.findByIdAndUpdate(req.params.id, { exercise, reps, weight });
    res.redirect('/workouts');
  } catch (err) {
    res.send("Error: " + err.message);
  }
});

//This is the section for deleting a section.
router.post('/workouts/:id/delete', async (req, res) => {
  try {
    await Workout.findByIdAndDelete(req.params.id);
    res.redirect('/workouts');
  } catch (err) {
    res.send("Error: " + err.message);
  }
});

module.exports = router;
