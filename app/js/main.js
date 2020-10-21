window.addEventListener('load', ()=> {
  let long;
  let lat;

  let currentLocation = document.querySelector(".current-location__name");
  let currentDate = document.querySelector(".current-location__date");
  let currentTempValue = document.querySelector(".current-temp__value");
  let currentTempDescription = document.querySelector(".current-temp__description");
  let dailyMaxTemp = document.querySelector(".daily-stats__max-temp--value");
  let dailyMinTemp = document.querySelector(".daily-stats__min-temp--value");
  let currentWindSpeed = document.querySelector(".current-stats__wind-speed--value");
  let dailyRainChance = document.querySelector(".daily-stats__rain-chance--value");
  let dailySunriseTime = document.querySelector(".daily-stats__sunrise--value");
  let dailySunsetTime = document.querySelector(".daily-stats__sunset--value");
  let weatherForecastDay1Name = document.querySelector(".weather-forecast__card--day-1--name");
  let weatherForecastDay1Temperatures = document.querySelector(".weather-forecast__card--day-1--temps");
  let weatherForecastDay2Name = document.querySelector(".weather-forecast__card--day-2--name");
  let weatherForecastDay2Temperatures = document.querySelector(".weather-forecast__card--day-2--temps");
  let weatherForecastDay3Name = document.querySelector(".weather-forecast__card--day-3--name");
  let weatherForecastDay3Temperatures = document.querySelector(".weather-forecast__card--day-3--temps");


  if(navigator.geolocation){
    // Get the current position of the device
    navigator.geolocation.getCurrentPosition(position => {
      // Set location latitude and longitude coordinates
      long = position.coords.longitude;
      lat  = position.coords.latitude;

      // GET Request
      const api = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=a7945e759b4784693427e59a9911052a`;
      fetch(api)

        // Return api as JSON
        .then(response => {
          return response.json();
        })

        // Store data from JSON
        .then(data => {
          const cityLocation = data.timezone;
          const today = new Date().toLocaleDateString();
          const currentTemp = data.current.temp;
          const currentDesc = data.current.weather[0].description;
          const dailyMax = data.daily[0].temp.max;
          const dailyMin = data.daily[0].temp.min;
          const currentWindSpd = data.current.wind_speed;
          const dailyRainCh = data.daily[0].pop;
          const dailySunriseTm = convertUnixTimeStampToHourAndMinute(data.current.sunrise);
          const dailySunsetTm = convertUnixTimeStampToHourAndMinute(data.current.sunset);
          const weatherForecastDay1Nm = convertUnixTimeStampToDay(data.daily[1].dt);
          const weatherForecastDay1MinTemps = data.daily[1].temp.min;
          const weatherForecastDay1MaxTemps = data.daily[1].temp.max;
          const weatherForecastDay2Nm = convertUnixTimeStampToDay(data.daily[2].dt);
          const weatherForecastDay2MinTemps = data.daily[2].temp.min;
          const weatherForecastDay2MaxTemps = data.daily[2].temp.max;
          const weatherForecastDay3Nm = convertUnixTimeStampToDay(data.daily[3].dt);
          const weatherForecastDay3MinTemps = data.daily[3].temp.min;
          const weatherForecastDay3MaxTemps = data.daily[3].temp.max;

          // const rain = data.rain['1h'];
          // console.log(rain)

          // Display stored data to app
          currentLocation.textContent = cityLocation;
          currentDate.textContent = today;
          currentTempValue.textContent = currentTemp;
          currentTempDescription.textContent = currentDesc;
          dailyMaxTemp.textContent = dailyMax;
          dailyMinTemp.textContent = dailyMin;
          currentWindSpeed.textContent = currentWindSpd;
          dailyRainChance.textContent = (dailyRainCh*100);
          dailySunriseTime.textContent = dailySunriseTm;
          dailySunsetTime.textContent = dailySunsetTm;
          weatherForecastDay1Name.textContent = weatherForecastDay1Nm;
          weatherForecastDay1Temperatures.textContent = weatherForecastDay1MinTemps + "-" + weatherForecastDay1MaxTemps;
          weatherForecastDay2Name.textContent = weatherForecastDay2Nm;
          weatherForecastDay2Temperatures.textContent = weatherForecastDay2MinTemps + "-" + weatherForecastDay2MaxTemps;
          weatherForecastDay3Name.textContent = weatherForecastDay3Nm;
          weatherForecastDay3Temperatures.textContent = weatherForecastDay3MinTemps + "-" + weatherForecastDay3MaxTemps;

          // Console logs for test
          console.log(data);
          // console.log(cityLocation);
          // console.log(today);
          // console.log(currentTemp);
          // console.log(currentDesc);
          // console.log(dailyRainCh);
          // console.log(dailySunriseTm);
          // console.log(dailySunsetTm);
        })
    })
  }
});


// This function converts unix timestamps to a date format (Hour/Minute)
function convertUnixTimeStampToHourAndMinute(timestamp) {
  let unix_timestamp = timestamp;
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  let date = new Date(unix_timestamp * 1000);
  // Hours part from the timestamp
  let hours = date.getHours();
  // Minutes part from the timestamp
  let minutes = "0" + date.getMinutes();

  // Display time in 20:30 format
  let formattedTime = hours + ':' + minutes.substr(-2);
  // console.log(formattedTime);
  return formattedTime;
}

// This function converts unix timestamps to a date format (Day)
function convertUnixTimeStampToDay(timestamp) {
  let unix_timestamp = timestamp;
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  let date = new Date(unix_timestamp * 1000);
  // Day part from the timestamp
  let day = date.getDay();
  // Return the name of the weekday instead of a number
  let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  // Display time in day name
  let formattedTime = weekday[day];
  console.log(formattedTime);
  return formattedTime;
}