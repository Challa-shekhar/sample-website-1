const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const ip = require('node-local-ip-address')();
const os = require('os');
const app = express()

const apiKey = '5d40ebe321e9c8082477f8dca92b6bb5';
var interfaces = os.networkInterfaces();



var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}
console.log(addresses[0]);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  console.log('Hi, I am get call', ip);
  res.render('index', {weather: null, error: null, ip: ip});
})

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

  request(url, function (err, response, body) {
   
    console.log(addresses[0]);

    if(err){
      res.render('index', {weather: null, error: 'Error, please try again', ip:addresses[0]});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again', ip:addresses[0]});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}! \n server ip: ${addresses}`;
        res.render('index', {weather: weatherText, error: null, ip:addresses[0]});
      }
    }
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
  console.log('these changes are done by Navneetha')
  console.log('these changes are done by Navneetha')
  

})
