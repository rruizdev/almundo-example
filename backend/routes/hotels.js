const express = require('express');
const router = express.Router();
const service = require('../services/hotels');

/* GET hotels listing. */
router.get('/', function(req, res, next) {
  res.send(service.get());
});

module.exports = router;
