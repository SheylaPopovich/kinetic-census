// var path = require("path");
// const router = require("express").Router();



//   router.get("/exercise", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/exercise.html"));
//   });
//   router.get("/stats", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/stats.html"));
//   });


//   module.exports= router;

const router = require('express').Router();
const path = require('path');

router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/stats.html'));
});

router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

module.exports = router;