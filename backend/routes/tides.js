const router = require('express').Router();
const axios = require('axios');

let Tide = require('../models/tide.model'); // remove the model 

router.route('/:stationId').get((req, res) => {
  axios.get('https://admiraltyapi.azure-api.net/uktidalapi/api/V1/Stations/' + req.params.stationId + '/TidalEvents?duration=1', 
        {headers: {'Ocp-Apim-Subscription-Key': 'e177b65b644243f8868cd930727a86a9'}})
    .then(tide => res.send(tide.data))
    .catch(err => res.status(400).json("Error: " + err));
})




module.exports = router;