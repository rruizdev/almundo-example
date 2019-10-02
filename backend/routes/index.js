var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // to-do: Redirect to Swagger when signatures appears.
  //res.redirect('/api-docs');
});

module.exports = router;
