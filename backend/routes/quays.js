const router = require('express').Router();

let Quay = require('../models/quay.model');

router.route('/').get((req, res) => {
  Quay.find()
    .then(quays => res.json(quays))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const quayname = req.body.quayname;
  const info = req.body.info;
  const location = req.body.location;

  const newQuay = new Quay({quayname, info, location});

  newQuay.save()
    .then(() => res.json('Quay added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;