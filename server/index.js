var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var config = require('yaml-config');

var settings = config.readConfig('./config.yaml');

var connection = mysql.createConnection({
  host: settings.db.host,
  user: settings.db.user,
  password: settings.db.password,
  database: settings.db.database
});

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

router.route('/countries').get(function(req, res) {
  connection.query('SELECT * FROM countries', function(error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

router.route('/deliverymoments').get(function(req, res) {
  connection.query(
    'SELECT weekday, countries.country FROM deliverymoments JOIN countries on (countries.id = deliverymoments.country_id)',
    function(error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
});

app.use('/api/v1', router);

app.listen(port);
console.log('Server is running on ' + port);
