const router = require('express').Router();

let Tide = require('../models/tide.model');

router.route('/').get((req, res) => {
  Tide.find()
    .then(tides => res.json(tides))
    .catch(err => res.status(400).json("Error: " + err));
})

router.route('/add').get((req, res) => {
  const date = req.body.date;
  const level = req.body.level;

  const newTide = new Tide({date, level});

  newTide.save()
    .then(() => res.json("Tide recorded"))
    .catch(err => res.status(400).json("Error: " + err));
});


module.exports = router;