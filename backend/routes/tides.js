const router = require('express').Router();

let Tide = require('../models/tide.model');

router.route('/').get((req, res) => {
  Tide.find()
    .then(tides => res.json(tides))
    .catch(err => res.status(400).json('Error: ' + err));
})

// Add functionality to update database from SEPA

module.exports = router;