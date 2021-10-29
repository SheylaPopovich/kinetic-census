const Workout = require("../models/workout");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// router.post("/api/workouts",  (req, res) => {
//   try {
//     db.Workout.create({ type: "workout" });
//     res.json(response);
//   }
// });

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  const workoutId = params.id;
  let savedExercises = [];
  Workout.find({ _id: workoutId })
    .then((dbWorkout) => {
      savedExercises = dbWorkout[0].exercises;
      res.json(dbWorkout[0].exercises);
      let allExercises = [...savedExercises, body];
      console.log(allExercises);
      updateWorkout(allExercises);
    })
    .catch((err) => {
      res.json(err);
    });

  function updateWorkout(exercises) {
    Workout.findByIdAndUpdate(
      workoutId,
      { exercises: exercises },
      function (err, doc) {
        if (err) {
          console.log(err);
        }
      }
    );
  }
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .limit(7)
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;



