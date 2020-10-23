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

  let weatherForecastHourly1Name = document.querySelector(".weather-forecast__card--hour-1--name");
  let weatherForecastHourly1Temperatures = document.querySelector(".weather-forecast__card--hour-1--temps");

  let weatherForecastHourly4Name = document.querySelector(".weather-forecast__card--hour-4--name");
  let weatherForecastHourly4Temperatures = document.querySelector(".weather-forecast__card--hour-4--temps");

  let weatherForecastHourly7Name = document.querySelector(".weather-forecast__card--hour-7--name");
  let weatherForecastHourly7Temperatures = document.querySelector(".weather-forecast__card--hour-7--temps");

  let weatherForecastHourly10Name = document.querySelector(".weather-forecast__card--hour-10--name");
  let weatherForecastHourly10Temperatures = document.querySelector(".weather-forecast__card--hour-10--temps");

  let weatherForecastHourly13Name = document.querySelector(".weather-forecast__card--hour-13--name");
  let weatherForecastHourly13Temperatures = document.querySelector(".weather-forecast__card--hour-13--temps");

  let weatherForecastHourly16Name = document.querySelector(".weather-forecast__card--hour-16--name");
  let weatherForecastHourly16Temperatures = document.querySelector(".weather-forecast__card--hour-16--temps");

  let weatherForecastHourly19Name = document.querySelector(".weather-forecast__card--hour-19--name");
  let weatherForecastHourly19Temperatures = document.querySelector(".weather-forecast__card--hour-19--temps");


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

          const weatherForecastHourly1Nm = convertUnixTimeStampToHourAndMinute(data.hourly[1].dt);
          const weatherForecastHourly1Temps = data.hourly[1].temp;

          const weatherForecastHourly4Nm = convertUnixTimeStampToHourAndMinute(data.hourly[4].dt);
          const weatherForecastHourly4Temps = data.hourly[4].temp;
          
          const weatherForecastHourly7Nm = convertUnixTimeStampToHourAndMinute(data.hourly[7].dt);
          const weatherForecastHourly7Temps = data.hourly[7].temp;

          const weatherForecastHourly10Nm = convertUnixTimeStampToHourAndMinute(data.hourly[10].dt);
          const weatherForecastHourly10Temps = data.hourly[10].temp;

          const weatherForecastHourly13Nm = convertUnixTimeStampToHourAndMinute(data.hourly[13].dt);
          const weatherForecastHourly13Temps = data.hourly[13].temp;

          const weatherForecastHourly16Nm = convertUnixTimeStampToHourAndMinute(data.hourly[16].dt);
          const weatherForecastHourly16Temps = data.hourly[16].temp;

          const weatherForecastHourly19Nm = convertUnixTimeStampToHourAndMinute(data.hourly[19].dt);
          const weatherForecastHourly19Temps = data.hourly[19].temp;

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

          weatherForecastHourly1Name.textContent = weatherForecastHourly1Nm;
          weatherForecastHourly1Temperatures.textContent = weatherForecastHourly1Temps;

          weatherForecastHourly4Name.textContent = weatherForecastHourly4Nm;
          weatherForecastHourly4Temperatures.textContent = weatherForecastHourly4Temps;

          weatherForecastHourly7Name.textContent = weatherForecastHourly7Nm;
          weatherForecastHourly7Temperatures.textContent = weatherForecastHourly7Temps;

          weatherForecastHourly10Name.textContent = weatherForecastHourly10Nm;
          weatherForecastHourly10Temperatures.textContent = weatherForecastHourly10Temps;

          weatherForecastHourly13Name.textContent = weatherForecastHourly13Nm;
          weatherForecastHourly13Temperatures.textContent = weatherForecastHourly13Temps;

          weatherForecastHourly16Name.textContent = weatherForecastHourly16Nm;
          weatherForecastHourly16Temperatures.textContent = weatherForecastHourly16Temps;

          weatherForecastHourly19Name.textContent = weatherForecastHourly19Nm;
          weatherForecastHourly19Temperatures.textContent = weatherForecastHourly19Temps;

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