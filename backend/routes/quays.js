const router = require('express').Router();

let Quay = require('../models/quay.model');

router.route('/').get((req, res) => {
  Quay.find()
    .then(quays => res.json(quays))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route('/add').post((req, res) => {
  const quayname = req.body.quayname;
  const info = req.body.info;
  const location = req.body.location;
  const heightAboveBed = req.body.heightAboveBed;
  const embedmentDepth = req.body.embedmentDepth;
  const wallType = req.body.wallType;
  const stationId = req.body.stationId;


  const newQuay = new Quay({quayname, info, location, heightAboveBed, embedmentDepth, wallType, stationId});

  newQuay.save()
    .then(() => res.json("Quay added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route('/:id').get((req, res) => {
  Quay.findById(req.params.id)
    .then(quay => res.json(quay))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route('/:id').delete((req, res) => {
  Quay.findByIdAndDelete(req.params.id)
    .then(() => res.json("Quay entry deleted"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route('/update/:id').post((req, res) => {
  Quay.findByIdAndUpdate(req.params.id)
    .then(quay => {
      quay.quayname = req.body.quayname;
      quay.info = req.body.info;
      quay.location = req.body.location;
      quay.embedmentDepth = req.body.embedmentDepth;
      quay.heightAboveBed = req.body.heightAboveBed;
      quay.wallType = req.body.wallType;
      quay.stationId = req.body.stationId;

      quay.save()
        .then(() => res.json("Quay updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});


module.exports = router;