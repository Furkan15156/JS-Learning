const express = require('express');
const app = express();
const https = require('https');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {
  console.log(req.body.cityName);

  const city = req.body.cityName
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=a0c38b70193919db12835935c6b8a6b1"

  https.get(url, (response) => {
    console.log(response.statusCode);

    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const feels = weatherData.main.feels_like;
      const description = weatherData.weather[0].description;
      const img = weatherData.weather[0].icon;
      const imgURL = '"http://openweathermap.org/img/wn/' + img + '@2x.png"'

      res.write("<h1>Weather temperature is " + temp + " degree.</h1>");
      res.write("<h2>Weathers feels like temperature is " + feels + " degree.</h2>");
      res.write("<img src="+ imgURL + ">" );
      res.write("<p>Now weather " + description + ".</p>")
      res.send();
    })
  })
})


app.listen(3000, () => {
  console.log("Server is on...");
});
