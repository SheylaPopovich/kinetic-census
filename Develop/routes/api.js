const router = require("express").Router();
const Transaction = require("../models/workout");




app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.json(err);
    });
});