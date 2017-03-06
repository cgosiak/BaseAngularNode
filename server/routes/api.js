const express = require('express');
const URLUtility = require('../helpers/URLUtility');
const config = require('../config/server_config.json');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('{ "MESSAGE" : "API Works" }');
});

router.get('*', (req, res) => {
  res.send('{ "ERROR" : "Invalid API Call" }');
});

module.exports = router;
