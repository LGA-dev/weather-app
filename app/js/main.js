window.addEventListener('load', ()=> {
  let long;
  let lat;

  // Current location (A) variables
  let currentForecast__CurrentLocation = document.querySelector(".current-location__name");
  let currentForecast__CurrentDate = document.querySelector(".current-location__date");


  // Current weather (B) variables
  let currentForecast__CurrentTemp  = document.querySelector(".current-temp__value");
  let currentForecast__CurrentTempDescription = document.querySelector(".current-temp__description");


  // Daily forecast (C) variables
  let dailyForecast__MaxTemp = document.querySelector(".daily-stats__max-temp");
  let dailyForecast__MinTemp = document.querySelector(".daily-stats__min-temp");
  let dailyForecast__RainChance = document.querySelector(".daily-stats__rain-chance");
  let dailyForecast__WindSpeed = document.querySelector(".daily-stats__wind-speed");
  let dailyForecast__SunriseTime = document.querySelector(".daily-stats__sunrise");
  let dailyForecast__SunsetTime = document.querySelector(".daily-stats__sunset");


  // Hourly forecast (D) variables
  // ** Next 1 hour **
  let hourlyForecast__Hour1_Name = document.querySelector(".hourly-forecast__next-1-hour--name");
  let hourlyForecast__Hour1_Temperature = document.querySelector(".hourly-forecast__next-1-hour--temps");
  // ** Next 4 hours **
  let hourlyForecast__Hour4_Name = document.querySelector(".hourly-forecast__next-4-hour--name");
  let hourlyForecast__Hour4_Temperature = document.querySelector(".hourly-forecast__next-4-hour--temps");
  // ** Next 7 hours **
  let hourlyForecast__Hour7_Name = document.querySelector(".hourly-forecast__next-7-hour--name");
  let hourlyForecast__Hour7_Temperature = document.querySelector(".hourly-forecast__next-7-hour--temps");
  // ** Next 10 hours **
  let hourlyForecast__Hour10_Name = document.querySelector(".hourly-forecast__next-10-hour--name");
  let hourlyForecast__Hour10_Temperature = document.querySelector(".hourly-forecast__next-10-hour--temps");
  // ** Next 13 hours **
  let hourlyForecast__Hour13_Name = document.querySelector(".hourly-forecast__next-13-hour--name");
  let hourlyForecast__Hour13_Temperature = document.querySelector(".hourly-forecast__next-13-hour--temps");
  // ** Next 16 hours **
  let hourlyForecast__Hour16_Name = document.querySelector(".hourly-forecast__next-16-hour--name");
  let hourlyForecast__Hour16_Temperature = document.querySelector(".hourly-forecast__next-16-hour--temps");
  // ** Next 19 hours **
  let hourlyForecast__Hour19_Name = document.querySelector(".hourly-forecast__next-19-hour--name");
  let hourlyForecast__Hour19_Temperature = document.querySelector(".hourly-forecast__next-19-hour--temps");


  // Three days forecast (E) variables
  // ** Day 1/3 **
  let threeDaysForecast__FirstDay_Name = document.querySelector(".next-3-days-forecast__next-1-day--name");
  let threeDaysForecast__FirstDay_Temperatures = document.querySelector(".next-3-days-forecast__next-1-day--temps");
  // ** Day 2/3 **
  let threeDaysForecast__SecondDay_Name = document.querySelector(".next-3-days-forecast__next-2-day--name");
  let threeDaysForecast__SecondDay_Temperatures = document.querySelector(".next-3-days-forecast__next-2-day--temps");
  // ** Day 3/3 **
  let threeDaysForecast__ThirdDay_Name = document.querySelector(".next-3-days-forecast__next-3-day--name");
  let threeDaysForecast__ThirdDay_Temperatures = document.querySelector(".next-3-days-forecast__next-3-day--temps");


  // Five days forecast (F) variables
  // ** Day 1/5 **
  let fiveDaysForecast__FirstDay_Name = document.querySelector(".next-5-days-forecast__next-1-day--name");
  let fiveDaysForecast__FirstDay_MaxTemperature = document.querySelector(".next-5-days-forecast__next-1-day--max-temp");
  let fiveDaysForecast__FirstDay_MinTemperature = document.querySelector(".next-5-days-forecast__next-1-day--min-temp");
  let fiveDaysForecast__FirstDay_WindSpeed = document.querySelector(".next-5-days-forecast__next-1-day--wind-speed");
  let fiveDaysForecast__FirstDay_RainChance = document.querySelector(".next-5-days-forecast__next-1-day--rain-chance");
  // ** Day 2/5 **
  let fiveDaysForecast__SecondDay_Name = document.querySelector(".next-5-days-forecast__next-2-day--name");
  let fiveDaysForecast__SecondDay_MaxTemperature = document.querySelector(".next-5-days-forecast__next-2-day--max-temp");
  let fiveDaysForecast__SecondDay_MinTemperature = document.querySelector(".next-5-days-forecast__next-2-day--min-temp");
  let fiveDaysForecast__SecondDay_WindSpeed = document.querySelector(".next-5-days-forecast__next-2-day--wind-speed");
  let fiveDaysForecast__SecondDay_RainChance = document.querySelector(".next-5-days-forecast__next-2-day--rain-chance");
  // ** Day 3/5 **
  let fiveDaysForecast__ThirdDay_Name = document.querySelector(".next-5-days-forecast__next-3-day--name");
  let fiveDaysForecast__ThirdDay_MaxTemperature = document.querySelector(".next-5-days-forecast__next-3-day--max-temp");
  let fiveDaysForecast__ThirdDay_MinTemperature = document.querySelector(".next-5-days-forecast__next-3-day--min-temp");
  let fiveDaysForecast__ThirdDay_WindSpeed = document.querySelector(".next-5-days-forecast__next-3-day--wind-speed");
  let fiveDaysForecast__ThirdDay_RainChance = document.querySelector(".next-5-days-forecast__next-3-day--rain-chance");
  // ** Day 4/5 **
  let fiveDaysForecast__FourthDay_Name = document.querySelector(".next-5-days-forecast__next-4-day--name");
  let fiveDaysForecast__FourthDay_MaxTemperature = document.querySelector(".next-5-days-forecast__next-4-day--max-temp");
  let fiveDaysForecast__FourthDay_MinTemperature = document.querySelector(".next-5-days-forecast__next-4-day--min-temp");
  let fiveDaysForecast__FourthDay_WindSpeed = document.querySelector(".next-5-days-forecast__next-4-day--wind-speed");
  let fiveDaysForecast__FourthDay_RainChance = document.querySelector(".next-5-days-forecast__next-4-day--rain-chance");
  // ** Day 5/5 **
  let fiveDaysForecast__FifthDay_Name = document.querySelector(".next-5-days-forecast__next-5-day--name");
  let fiveDaysForecast__FifthDay_MaxTemperature = document.querySelector(".next-5-days-forecast__next-5-day--max-temp");
  let fiveDaysForecast__FifthDay_MinTemperature = document.querySelector(".next-5-days-forecast__next-5-day--min-temp");
  let fiveDaysForecast__FifthDay_WindSpeed = document.querySelector(".next-5-days-forecast__next-5-day--wind-speed");
  let fiveDaysForecast__FifthDay_RainChance = document.querySelector(".next-5-days-forecast__next-5-day--rain-chance");


  // ## Get location ##
  if(navigator.geolocation){
    // ## Get the current position of the device ##
    navigator.geolocation.getCurrentPosition(position => {
      // ## Set location latitude and longitude coordinates ##
      long = position.coords.longitude;
      lat  = position.coords.latitude;

      // ## GET Request ##
      const api = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=a7945e759b4784693427e59a9911052a`;
      fetch(api)

        // ## Return api as JSON ##
        .then(response => {
          return response.json();
        })

        // ## Store data from api ##
        .then(data => {
          // Current forecast (A) values
          const currentForecast__CurrentLocation_value = data.timezone;
          const currentForecast__CurrentDate_value = new Date().toLocaleDateString();
          
          
          // Current weather (B) values
          const currentForecast__CurrentTemp_value = data.current.temp;
          const currentForecast__CurrentTempDescription_value = data.current.weather[0].description;
          
          
          // Daily forecast (C) values
          const dailyForecast__MaxTemp_value = data.daily[0].temp.max;
          const dailyForecast__MinTemp_value = data.daily[0].temp.min;
          const dailyForecast__RainChance_value = data.daily[0].pop;
          const dailyForecast__WindSpeed_value = data.current.wind_speed;
          const dailyForecast__SunriseTime_value = convertUnixTimeStampToHourAndMinute(data.current.sunrise);
          const dailyForecast__SunsetTime_value = convertUnixTimeStampToHourAndMinute(data.current.sunset);
          
          
          // Hourly forecast (D) values
          // ** Next (1) hour **
          const hourlyForecast__Hour1_Name_value = convertUnixTimeStampToHourAndMinute(data.hourly[1].dt);
          const hourlyForecast__Hour1_Temp_value = data.hourly[1].temp;
          // ** Next (4) hour **
          const hourlyForecast__Hour4_Name_value = convertUnixTimeStampToHourAndMinute(data.hourly[4].dt);
          const hourlyForecast__Hour4_Temp_value = data.hourly[4].temp;
          // ** Next (7) hour **
          const hourlyForecast__Hour7_Name_value = convertUnixTimeStampToHourAndMinute(data.hourly[7].dt);
          const hourlyForecast__Hour7_Temp_value = data.hourly[7].temp;
          // ** Next (10) hour **
          const hourlyForecast__Hour10_Name_value = convertUnixTimeStampToHourAndMinute(data.hourly[10].dt);
          const hourlyForecast__Hour10_Temp_value = data.hourly[10].temp;
          // ** Next (13) hour **
          const hourlyForecast__Hour13_Name_value = convertUnixTimeStampToHourAndMinute(data.hourly[13].dt);
          const hourlyForecast__Hour13_Temp_value = data.hourly[13].temp;
          // ** Next (16) hour **
          const hourlyForecast__Hour16_Name_value = convertUnixTimeStampToHourAndMinute(data.hourly[16].dt);
          const hourlyForecast__Hour16_Temp_value = data.hourly[16].temp;
          // ** Next (19) hour **
          const hourlyForecast__Hour19_Name_value = convertUnixTimeStampToHourAndMinute(data.hourly[19].dt);
          const hourlyForecast__Hour19_Temp_value = data.hourly[19].temp;
          
          
          // Three days forecast values
          // ** Day 1/3 **
          const threeDaysForecast__FirstDay_Name_value = convertUnixTimeStampToDay(data.daily[1].dt);
          const threeDaysForecast__FirstDay_MinTemp_value = data.daily[1].temp.min;
          const threeDaysForecast__FirstDay_MaxTemp_value = data.daily[1].temp.max;
          // ** Day 2/3 **
          const threeDaysForecast__SecondDay_Name_value = convertUnixTimeStampToDay(data.daily[2].dt);
          const threeDaysForecast__SecondDay_MinTemp_value = data.daily[2].temp.min;
          const threeDaysForecast__SecondDay_MaxTemp_value = data.daily[2].temp.max;
          // ** Day 3/3 **
          const threeDaysForecast__ThirdDay_Name_value = convertUnixTimeStampToDay(data.daily[3].dt);
          const threeDaysForecast__ThirdDay_MinTemp_value = data.daily[3].temp.min;
          const threeDaysForecast__ThirdDay_MaxTemp_value = data.daily[3].temp.max;
          
          
          // Five days forecast values
          // ** Day 1/5 **
          const fiveDaysForecast__FirstDay_Name_value = convertUnixTimeStampToDayMonth(data.daily[1].dt);
          const fiveDaysForecast__FirstDay_MaxTemp_value = data.daily[1].temp.max;
          const fiveDaysForecast__FirstDay_MinTemp_value = data.daily[1].temp.min;
          const fiveDaysForecast__FirstDay_WindSpeed_value = data.daily[1].wind_speed;
          const fiveDaysForecast__FirstDay_RainChance_value = data.daily[1].pop;
          // ** Day 2/5 **
          const fiveDaysForecast__SecondDay_Name_value = convertUnixTimeStampToDayMonth(data.daily[2].dt);
          const fiveDaysForecast__SecondDay_MaxTemp_value = data.daily[2].temp.max;
          const fiveDaysForecast__SecondDay_MinTemp_value = data.daily[2].temp.min;
          const fiveDaysForecast__SecondDay_WindSpeed_value = data.daily[2].wind_speed;
          const fiveDaysForecast__SecondDay_RainChance_value = data.daily[2].pop;
          // ** Day 3/5 **
          const fiveDaysForecast__ThirdDay_Name_value = convertUnixTimeStampToDayMonth(data.daily[3].dt);
          const fiveDaysForecast__ThirdDay_MaxTemp_value = data.daily[3].temp.max;
          const fiveDaysForecast__ThirdDay_MinTemp_value = data.daily[3].temp.min;
          const fiveDaysForecast__ThirdDay_WindSpeed_value = data.daily[3].wind_speed;
          const fiveDaysForecast__ThirdDay_RainChance_value = data.daily[3].pop;
          // ** Day 4/5 **
          const fiveDaysForecast__FourthDay_Name_value = convertUnixTimeStampToDayMonth(data.daily[4].dt);
          const fiveDaysForecast__FourthDay_MaxTemp_value = data.daily[4].temp.max;
          const fiveDaysForecast__FourthDay_MinTemp_value = data.daily[4].temp.min;
          const fiveDaysForecast__FourthDay_WindSpeed_value = data.daily[4].wind_speed;
          const fiveDaysForecast__FourthDay_RainChance_value = data.daily[4].pop;
          // ** Day 5/5 **
          const fiveDaysForecast__FifthDay_Name_value = convertUnixTimeStampToDayMonth(data.daily[5].dt);
          const fiveDaysForecast__FifthDay_MaxTemp_value = data.daily[5].temp.max;
          const fiveDaysForecast__FifthDay_MinTemp_value = data.daily[5].temp.min;
          const fiveDaysForecast__FifthDay_WindSpeed_value = data.daily[5].wind_speed;
          const fiveDaysForecast__FifthDay_RainChance_value = data.daily[5].pop;


          // ## Display data ##

          // Current location
          currentForecast__CurrentLocation.textContent = currentForecast__CurrentLocation_value;
          currentForecast__CurrentDate.textContent = currentForecast__CurrentDate_value;

          // Current forecast
          currentForecast__CurrentTemp.textContent = parseInt(currentForecast__CurrentTemp_value) + '°';
          currentForecast__CurrentTempDescription.textContent = currentForecast__CurrentTempDescription_value;

          // Daily forecast
          dailyForecast__MaxTemp.textContent = parseInt(dailyForecast__MaxTemp_value) + '°';
          dailyForecast__MinTemp.textContent = parseInt(dailyForecast__MinTemp_value) + '°';
          dailyForecast__WindSpeed.textContent = parseInt(dailyForecast__WindSpeed_value);
          dailyForecast__RainChance.textContent = dailyForecast__RainChance_value + "%";
          dailyForecast__SunriseTime.textContent = dailyForecast__SunriseTime_value;
          dailyForecast__SunsetTime.textContent = dailyForecast__SunsetTime_value;

          // Hourly forecast
          // ** Display next (1) hour **
          hourlyForecast__Hour1_Name.textContent = hourlyForecast__Hour1_Name_value;
          hourlyForecast__Hour1_Temperature.textContent = parseInt(hourlyForecast__Hour1_Temp_value) + '°';
          // ** Display next (4) hour **
          hourlyForecast__Hour4_Name.textContent = hourlyForecast__Hour4_Name_value;
          hourlyForecast__Hour4_Temperature.textContent = parseInt(hourlyForecast__Hour4_Temp_value) + '°';
          // ** Display next (7) hour **
          hourlyForecast__Hour7_Name.textContent = hourlyForecast__Hour7_Name_value;
          hourlyForecast__Hour7_Temperature.textContent = parseInt(hourlyForecast__Hour7_Temp_value) + '°';
          // ** Display next (10) hour **
          hourlyForecast__Hour10_Name.textContent = hourlyForecast__Hour10_Name_value;
          hourlyForecast__Hour10_Temperature.textContent = parseInt(hourlyForecast__Hour10_Temp_value) + '°';
          // ** Display next (13) hour **
          hourlyForecast__Hour13_Name.textContent = hourlyForecast__Hour13_Name_value;
          hourlyForecast__Hour13_Temperature.textContent = parseInt(hourlyForecast__Hour13_Temp_value) + '°';
          // ** Display next (16) hour **
          hourlyForecast__Hour16_Name.textContent = hourlyForecast__Hour16_Name_value;
          hourlyForecast__Hour16_Temperature.textContent = parseInt(hourlyForecast__Hour16_Temp_value) + '°';
          // ** Display next (19) hour **
          hourlyForecast__Hour19_Name.textContent = hourlyForecast__Hour19_Name_value;
          hourlyForecast__Hour19_Temperature.textContent = parseInt(hourlyForecast__Hour19_Temp_value) + '°';


          // Three days forecast
          // ** Display next (1) day **
          threeDaysForecast__FirstDay_Name.textContent = threeDaysForecast__FirstDay_Name_value;
          threeDaysForecast__FirstDay_Temperatures.textContent = parseInt(threeDaysForecast__FirstDay_MinTemp_value) + '°' + " - " + parseInt(threeDaysForecast__FirstDay_MaxTemp_value) + '°';
          // ** Display next (2) day **
          threeDaysForecast__SecondDay_Name.textContent = threeDaysForecast__SecondDay_Name_value;
          threeDaysForecast__SecondDay_Temperatures.textContent = parseInt(threeDaysForecast__SecondDay_MinTemp_value) + '°' + " - " + parseInt( threeDaysForecast__SecondDay_MaxTemp_value) + '°';
          // ** Display next (3) day **
          threeDaysForecast__ThirdDay_Name.textContent = threeDaysForecast__ThirdDay_Name_value;
          threeDaysForecast__ThirdDay_Temperatures.textContent = parseInt(threeDaysForecast__ThirdDay_MinTemp_value) + '°' + " - " + parseInt(threeDaysForecast__ThirdDay_MaxTemp_value) + '°';

          // Five days forecast
          // ** Display next (1) day **
          fiveDaysForecast__FirstDay_Name.textContent = fiveDaysForecast__FirstDay_Name_value;
          fiveDaysForecast__FirstDay_MaxTemperature.textContent = parseInt(fiveDaysForecast__FirstDay_MaxTemp_value) + '°';
          fiveDaysForecast__FirstDay_MinTemperature.textContent = parseInt(fiveDaysForecast__FirstDay_MinTemp_value) + '°';
          fiveDaysForecast__FirstDay_WindSpeed.textContent = parseInt(fiveDaysForecast__FirstDay_WindSpeed_value);
          fiveDaysForecast__FirstDay_RainChance.textContent = (fiveDaysForecast__FirstDay_RainChance_value*100) + '%';
          // ** Display next (2) day **
          fiveDaysForecast__SecondDay_Name.textContent = fiveDaysForecast__SecondDay_Name_value;
          fiveDaysForecast__SecondDay_MaxTemperature.textContent = parseInt(fiveDaysForecast__SecondDay_MaxTemp_value) + '°';
          fiveDaysForecast__SecondDay_MinTemperature.textContent = parseInt(fiveDaysForecast__SecondDay_MinTemp_value) + '°';
          fiveDaysForecast__SecondDay_WindSpeed.textContent = parseInt(fiveDaysForecast__SecondDay_WindSpeed_value);
          fiveDaysForecast__SecondDay_RainChance.textContent = (fiveDaysForecast__SecondDay_RainChance_value*100) + '%';
          // ** Display next (3) day **
          fiveDaysForecast__ThirdDay_Name.textContent = fiveDaysForecast__ThirdDay_Name_value;
          fiveDaysForecast__ThirdDay_MaxTemperature.textContent = parseInt(fiveDaysForecast__ThirdDay_MaxTemp_value) + '°';
          fiveDaysForecast__ThirdDay_MinTemperature.textContent = parseInt(fiveDaysForecast__ThirdDay_MinTemp_value) + '°';
          fiveDaysForecast__ThirdDay_WindSpeed.textContent = parseInt(fiveDaysForecast__ThirdDay_WindSpeed_value);
          fiveDaysForecast__ThirdDay_RainChance.textContent = (fiveDaysForecast__ThirdDay_RainChance_value*100) + '%';
          // ** Display next (4) day **
          fiveDaysForecast__FourthDay_Name.textContent = fiveDaysForecast__FourthDay_Name_value;
          fiveDaysForecast__FourthDay_MaxTemperature.textContent = parseInt(fiveDaysForecast__FourthDay_MaxTemp_value) + '°';
          fiveDaysForecast__FourthDay_MinTemperature.textContent = parseInt(fiveDaysForecast__FourthDay_MinTemp_value) + '°';
          fiveDaysForecast__FourthDay_WindSpeed.textContent = parseInt(fiveDaysForecast__FourthDay_WindSpeed_value);
          fiveDaysForecast__FourthDay_RainChance.textContent = (fiveDaysForecast__FourthDay_RainChance_value*100) + '%';
          // ** Display next (5) day **
          fiveDaysForecast__FifthDay_Name.textContent = fiveDaysForecast__FifthDay_Name_value;
          fiveDaysForecast__FifthDay_MaxTemperature.textContent = parseInt(fiveDaysForecast__FifthDay_MaxTemp_value) + '°';
          fiveDaysForecast__FifthDay_MinTemperature.textContent = parseInt(fiveDaysForecast__FifthDay_MinTemp_value) + '°';
          fiveDaysForecast__FifthDay_WindSpeed.textContent = parseInt(fiveDaysForecast__FifthDay_WindSpeed_value);
          fiveDaysForecast__FifthDay_RainChance.textContent = (fiveDaysForecast__FifthDay_RainChance_value*100) + '%';

          // Console logs for test
          console.log(data);
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
  // Return the name of the day instead of a number
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
  // console.log(formattedTime);
  return formattedTime;
}

// This function converts unix timestamps to a number date format (Day/Month)
function convertUnixTimeStampToDayMonth(timestamp) {
  let unix_timestamp = timestamp;
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  let date = new Date(unix_timestamp * 1000);
  // Day of the month part from the timestamp
  let day = date.getDate();
  // Month part from the timestamp
  let month = date.getMonth();

  // Display time in day name
  let formattedTime = (day + 1) + "/" + (month + 1);
  // console.log(formattedTime);
  return formattedTime;
}