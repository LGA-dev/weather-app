// window.alert("Hi test");

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
  let dailyForecast__HumidityPercentage = document.querySelector(".daily-stats__humidity-percentage");
  let dailyForecast__SunriseTime = document.querySelector(".daily-stats__sunrise-time");
  let dailyForecast__SunsetTime = document.querySelector(".daily-stats__sunset-time");


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
  let fiveDaysForecast__FirstDay_Date = document.querySelector(".next-5-days-forecast__next-1-day--date");
  let fiveDaysForecast__FirstDay_MaxTemperature = document.querySelector(".next-5-days-forecast__next-1-day--max-temp");
  let fiveDaysForecast__FirstDay_MinTemperature = document.querySelector(".next-5-days-forecast__next-1-day--min-temp");
  let fiveDaysForecast__FirstDay_HumidityPercentage = document.querySelector(".next-5-days-forecast__next-1-day--humidity-percentage");
  let fiveDaysForecast__FirstDay_RainChance = document.querySelector(".next-5-days-forecast__next-1-day--rain-chance");
  // ** Day 2/5 **
  let fiveDaysForecast__SecondDay_Name = document.querySelector(".next-5-days-forecast__next-2-day--name");
  let fiveDaysForecast__SecondDay_Date = document.querySelector(".next-5-days-forecast__next-2-day--date");
  let fiveDaysForecast__SecondDay_MaxTemperature = document.querySelector(".next-5-days-forecast__next-2-day--max-temp");
  let fiveDaysForecast__SecondDay_MinTemperature = document.querySelector(".next-5-days-forecast__next-2-day--min-temp");
  let fiveDaysForecast__SecondDay_HumidityPercentage = document.querySelector(".next-5-days-forecast__next-2-day--humidity-percentage");
  let fiveDaysForecast__SecondDay_RainChance = document.querySelector(".next-5-days-forecast__next-2-day--rain-chance");
  // ** Day 3/5 **
  let fiveDaysForecast__ThirdDay_Name = document.querySelector(".next-5-days-forecast__next-3-day--name");
  let fiveDaysForecast__ThirdDay_Date = document.querySelector(".next-5-days-forecast__next-3-day--date");
  let fiveDaysForecast__ThirdDay_MaxTemperature = document.querySelector(".next-5-days-forecast__next-3-day--max-temp");
  let fiveDaysForecast__ThirdDay_MinTemperature = document.querySelector(".next-5-days-forecast__next-3-day--min-temp");
  let fiveDaysForecast__ThirdDay_HumidityPercentage = document.querySelector(".next-5-days-forecast__next-3-day--humidity-percentage");
  let fiveDaysForecast__ThirdDay_RainChance = document.querySelector(".next-5-days-forecast__next-3-day--rain-chance");
  // ** Day 4/5 **
  let fiveDaysForecast__FourthDay_Name = document.querySelector(".next-5-days-forecast__next-4-day--name");
  let fiveDaysForecast__FourthDay_Date = document.querySelector(".next-5-days-forecast__next-4-day--date");
  let fiveDaysForecast__FourthDay_MaxTemperature = document.querySelector(".next-5-days-forecast__next-4-day--max-temp");
  let fiveDaysForecast__FourthDay_MinTemperature = document.querySelector(".next-5-days-forecast__next-4-day--min-temp");
  let fiveDaysForecast__FourthDay_HumidityPercentage = document.querySelector(".next-5-days-forecast__next-4-day--humidity-percentage");
  let fiveDaysForecast__FourthDay_RainChance = document.querySelector(".next-5-days-forecast__next-4-day--rain-chance");
  // ** Day 5/5 **
  let fiveDaysForecast__FifthDay_Name = document.querySelector(".next-5-days-forecast__next-5-day--name");
  let fiveDaysForecast__FifthDay_Date = document.querySelector(".next-5-days-forecast__next-5-day--date");
  let fiveDaysForecast__FifthDay_MaxTemperature = document.querySelector(".next-5-days-forecast__next-5-day--max-temp");
  let fiveDaysForecast__FifthDay_MinTemperature = document.querySelector(".next-5-days-forecast__next-5-day--min-temp");
  let fiveDaysForecast__FifthDay_HumidityPercentage = document.querySelector(".next-5-days-forecast__next-5-day--humidity-percentage");
  let fiveDaysForecast__FifthDay_RainChance = document.querySelector(".next-5-days-forecast__next-5-day--rain-chance");

  // ## Get location ##
  if(navigator.geolocation){
    // ## Get the current position of the device ##
    navigator.geolocation.getCurrentPosition(position => {
      // ## Set location latitude and longitude coordinates ##
      long = position.coords.longitude;
      lat  = position.coords.latitude;

      // ## GET Requests ##

      // ## Location Api ##
      const owm_location_api = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=a7945e759b4784693427e59a9911052a`;
      // const owm_location_api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=a7945e759b4784693427e59a9911052a`;
      fetch(owm_location_api)
        // ## Extract the JSON body content from the response ##
        .then(response => {
          return response.json();
        })

        // ## Store and display data from JSON ##
        .then(data => {
          // ## Store data ##
          // A) Current location and date
          const currentForecast__CurrentLocation_value = data.name;
          const currentForecast__CurrentDate_value = convertUnixTimeStampToDayMonth(data.dt);
          const currentForecast__CurrentDay_value = convertUnixTimeStampToDay(data.dt);

          // ## Display data ##
          // A) Current location and date
          currentForecast__CurrentLocation.textContent = currentForecast__CurrentLocation_value;
          currentForecast__CurrentDate.textContent = currentForecast__CurrentDay_value + " " + currentForecast__CurrentDate_value;
        });



      // ## Weather Api ##
      const owm_weather_api = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=a7945e759b4784693427e59a9911052a`;
      // const owm_weather_api = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=a7945e759b4784693427e59a9911052a`;
      fetch(owm_weather_api)
        // ## Extract the JSON body content from the response ##
        .then(response => {
          return response.json();
        })

        // ## Store data from JSON ##
        .then(data => {
          // ## Store data ##
          // B) Current temperature values
          const currentForecast__CurrentTemp_value = data.current.temp;
          const currentForecast__CurrentTempDescription_value = data.current.weather[0].description;
          
          
          // C) Daily stats values
          const dailyForecast__MaxTemp_value = data.daily[0].temp.max;
          const dailyForecast__MinTemp_value = data.daily[0].temp.min;
          const dailyForecast__RainChance_value = data.daily[0].pop;
          const dailyForecast__HumidityPercentage_value = data.current.humidity;
          const dailyForecast__SunriseTime_value = convertUnixTimeStampToHourAndMinute(data.current.sunrise);
          const dailyForecast__SunsetTime_value = convertUnixTimeStampToHourAndMinute(data.current.sunset);
          
          
          // D) Hourly forecast values
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
          
          
          // E) Next three days forecast values
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
          
          
          // F) Next five days forecast values
          // ** Day 1/5 **
          const fiveDaysForecast__FirstDay_Name_value = convertUnixTimeStampToDay(data.daily[1].dt);
          const fiveDaysForecast__FirstDay_Date_value = convertUnixTimeStampToDayMonth(data.daily[1].dt);
          const fiveDaysForecast__FirstDay_MaxTemp_value = data.daily[1].temp.max;
          const fiveDaysForecast__FirstDay_MinTemp_value = data.daily[1].temp.min;
          const fiveDaysForecast__FirstDay_HumidityPercentage_value = data.daily[1].humidity;
          const fiveDaysForecast__FirstDay_RainChance_value = data.daily[1].pop;
          // ** Day 2/5 **
          const fiveDaysForecast__SecondDay_Name_value = convertUnixTimeStampToDay(data.daily[2].dt);
          const fiveDaysForecast__SecondDay_Date_value = convertUnixTimeStampToDayMonth(data.daily[2].dt);
          const fiveDaysForecast__SecondDay_MaxTemp_value = data.daily[2].temp.max;
          const fiveDaysForecast__SecondDay_MinTemp_value = data.daily[2].temp.min;
          const fiveDaysForecast__SecondDay_HumidityPercentage_value = data.daily[2].humidity;
          const fiveDaysForecast__SecondDay_RainChance_value = data.daily[2].pop;
          // ** Day 3/5 **
          const fiveDaysForecast__ThirdDay_Name_value = convertUnixTimeStampToDay(data.daily[3].dt);
          const fiveDaysForecast__ThirdDay_Date_value = convertUnixTimeStampToDayMonth(data.daily[3].dt);
          const fiveDaysForecast__ThirdDay_MaxTemp_value = data.daily[3].temp.max;
          const fiveDaysForecast__ThirdDay_MinTemp_value = data.daily[3].temp.min;
          const fiveDaysForecast__ThirdDay_HumidityPercentage_value = data.daily[3].humidity;
          const fiveDaysForecast__ThirdDay_RainChance_value = data.daily[3].pop;
          // ** Day 4/5 **
          const fiveDaysForecast__FourthDay_Name_value = convertUnixTimeStampToDay(data.daily[4].dt);
          const fiveDaysForecast__FourthDay_Date_value = convertUnixTimeStampToDayMonth(data.daily[4].dt);
          const fiveDaysForecast__FourthDay_MaxTemp_value = data.daily[4].temp.max;
          const fiveDaysForecast__FourthDay_MinTemp_value = data.daily[4].temp.min;
          const fiveDaysForecast__FourthDay_HumidityPercentage_value = data.daily[4].humidity;
          const fiveDaysForecast__FourthDay_RainChance_value = data.daily[4].pop;
          // ** Day 5/5 **
          const fiveDaysForecast__FifthDay_Name_value = convertUnixTimeStampToDay(data.daily[5].dt);
          const fiveDaysForecast__FifthDay_Date_value = convertUnixTimeStampToDayMonth(data.daily[5].dt);
          const fiveDaysForecast__FifthDay_MaxTemp_value = data.daily[5].temp.max;
          const fiveDaysForecast__FifthDay_MinTemp_value = data.daily[5].temp.min;
          const fiveDaysForecast__FifthDay_HumidityPercentage_value = data.daily[5].humidity;
          const fiveDaysForecast__FifthDay_RainChance_value = data.daily[5].pop;

          // ## Display data ##

          // B) Current temperature
          currentForecast__CurrentTemp.textContent = parseInt(currentForecast__CurrentTemp_value) + '°';
          currentForecast__CurrentTempDescription.textContent = currentForecast__CurrentTempDescription_value.toUpperCase();


          // C) Daily stats
          dailyForecast__MaxTemp.textContent = parseInt(dailyForecast__MaxTemp_value) + '°';
          dailyForecast__MinTemp.textContent = parseInt(dailyForecast__MinTemp_value) + '°';
          dailyForecast__HumidityPercentage.textContent = parseInt(dailyForecast__HumidityPercentage_value) + "%";
          dailyForecast__RainChance.textContent = parseInt(dailyForecast__RainChance_value*100) + "%";
          dailyForecast__SunriseTime.textContent = dailyForecast__SunriseTime_value;
          dailyForecast__SunsetTime.textContent = dailyForecast__SunsetTime_value;


          // D) Hourly forecast
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


          // E) Next three days forecast
          // ** Display next (1) day **
          threeDaysForecast__FirstDay_Name.textContent = threeDaysForecast__FirstDay_Name_value;
          threeDaysForecast__FirstDay_Temperatures.textContent = parseInt(threeDaysForecast__FirstDay_MinTemp_value) + '°' + " - " + parseInt(threeDaysForecast__FirstDay_MaxTemp_value) + '°';
          // ** Display next (2) day **
          threeDaysForecast__SecondDay_Name.textContent = threeDaysForecast__SecondDay_Name_value;
          threeDaysForecast__SecondDay_Temperatures.textContent = parseInt(threeDaysForecast__SecondDay_MinTemp_value) + '°' + " - " + parseInt( threeDaysForecast__SecondDay_MaxTemp_value) + '°';
          // ** Display next (3) day **
          threeDaysForecast__ThirdDay_Name.textContent = threeDaysForecast__ThirdDay_Name_value;
          threeDaysForecast__ThirdDay_Temperatures.textContent = parseInt(threeDaysForecast__ThirdDay_MinTemp_value) + '°' + " - " + parseInt(threeDaysForecast__ThirdDay_MaxTemp_value) + '°';


          // F) Next five days forecast
          // ** Display next (1) day **
          fiveDaysForecast__FirstDay_Name.textContent = fiveDaysForecast__FirstDay_Name_value;
          fiveDaysForecast__FirstDay_Date.textContent = fiveDaysForecast__FirstDay_Date_value;
          fiveDaysForecast__FirstDay_MaxTemperature.textContent = parseInt(fiveDaysForecast__FirstDay_MaxTemp_value) + '°';
          fiveDaysForecast__FirstDay_MinTemperature.textContent = parseInt(fiveDaysForecast__FirstDay_MinTemp_value) + '°';
          fiveDaysForecast__FirstDay_HumidityPercentage.textContent = parseInt(fiveDaysForecast__FirstDay_HumidityPercentage_value) + '%';
          fiveDaysForecast__FirstDay_RainChance.textContent = parseInt(fiveDaysForecast__FirstDay_RainChance_value*100) + '%';
          // ** Display next (2) day **
          fiveDaysForecast__SecondDay_Name.textContent = fiveDaysForecast__SecondDay_Name_value;
          fiveDaysForecast__SecondDay_Date.textContent = fiveDaysForecast__SecondDay_Date_value;
          fiveDaysForecast__SecondDay_MaxTemperature.textContent = parseInt(fiveDaysForecast__SecondDay_MaxTemp_value) + '°';
          fiveDaysForecast__SecondDay_MinTemperature.textContent = parseInt(fiveDaysForecast__SecondDay_MinTemp_value) + '°';
          fiveDaysForecast__SecondDay_HumidityPercentage.textContent = parseInt(fiveDaysForecast__SecondDay_HumidityPercentage_value) + '%';
          fiveDaysForecast__SecondDay_RainChance.textContent = parseInt(fiveDaysForecast__SecondDay_RainChance_value*100) + '%';
          // ** Display next (3) day **
          fiveDaysForecast__ThirdDay_Name.textContent = fiveDaysForecast__ThirdDay_Name_value;
          fiveDaysForecast__ThirdDay_Date.textContent = fiveDaysForecast__ThirdDay_Date_value;
          fiveDaysForecast__ThirdDay_MaxTemperature.textContent = parseInt(fiveDaysForecast__ThirdDay_MaxTemp_value) + '°';
          fiveDaysForecast__ThirdDay_MinTemperature.textContent = parseInt(fiveDaysForecast__ThirdDay_MinTemp_value) + '°';
          fiveDaysForecast__ThirdDay_HumidityPercentage.textContent = parseInt(fiveDaysForecast__ThirdDay_HumidityPercentage_value) + '%';
          fiveDaysForecast__ThirdDay_RainChance.textContent = parseInt(fiveDaysForecast__ThirdDay_RainChance_value*100) + '%';
          // ** Display next (4) day **
          fiveDaysForecast__FourthDay_Name.textContent = fiveDaysForecast__FourthDay_Name_value;
          fiveDaysForecast__FourthDay_Date.textContent = fiveDaysForecast__FourthDay_Date_value;
          fiveDaysForecast__FourthDay_MaxTemperature.textContent = parseInt(fiveDaysForecast__FourthDay_MaxTemp_value) + '°';
          fiveDaysForecast__FourthDay_MinTemperature.textContent = parseInt(fiveDaysForecast__FourthDay_MinTemp_value) + '°';
          fiveDaysForecast__FourthDay_HumidityPercentage.textContent = parseInt(fiveDaysForecast__FourthDay_HumidityPercentage_value) + '%';
          fiveDaysForecast__FourthDay_RainChance.textContent = parseInt(fiveDaysForecast__FourthDay_RainChance_value*100) + '%';
          // ** Display next (5) day **
          fiveDaysForecast__FifthDay_Name.textContent = fiveDaysForecast__FifthDay_Name_value;
          fiveDaysForecast__FifthDay_Date.textContent = fiveDaysForecast__FifthDay_Date_value;
          fiveDaysForecast__FifthDay_MaxTemperature.textContent = parseInt(fiveDaysForecast__FifthDay_MaxTemp_value) + '°';
          fiveDaysForecast__FifthDay_MinTemperature.textContent = parseInt(fiveDaysForecast__FifthDay_MinTemp_value) + '°';
          fiveDaysForecast__FifthDay_HumidityPercentage.textContent = parseInt(fiveDaysForecast__FifthDay_HumidityPercentage_value) + '%';
          fiveDaysForecast__FifthDay_RainChance.textContent = parseInt(fiveDaysForecast__FifthDay_RainChance_value*100) + '%';


          // ## Icons ##
          // Current weather icon
          let currentIcon = data.current.weather[0].icon;
          document.getElementById("current-temp__icon").src = `http://openweathermap.org/img/wn/${currentIcon}@2x.png`;

          // Hourly weather icon
          let hourlyIcon1 = data.hourly[1].weather[0].icon;
          document.getElementById("hourly-forecast__icon-1").src = `http://openweathermap.org/img/wn/${hourlyIcon1}.png`;

          let hourlyIcon4 = data.hourly[4].weather[0].icon;
          document.getElementById("hourly-forecast__icon-4").src = `http://openweathermap.org/img/wn/${hourlyIcon4}.png`;

          let hourlyIcon7 = data.hourly[7].weather[0].icon;
          document.getElementById("hourly-forecast__icon-7").src = `http://openweathermap.org/img/wn/${hourlyIcon7}.png`;

          let hourlyIcon10 = data.hourly[10].weather[0].icon;
          document.getElementById("hourly-forecast__icon-10").src = `http://openweathermap.org/img/wn/${hourlyIcon10}.png`;

          let hourlyIcon13 = data.hourly[13].weather[0].icon;
          document.getElementById("hourly-forecast__icon-13").src = `http://openweathermap.org/img/wn/${hourlyIcon13}.png`;

          let hourlyIcon16 = data.hourly[16].weather[0].icon;
          document.getElementById("hourly-forecast__icon-16").src = `http://openweathermap.org/img/wn/${hourlyIcon16}.png`;

          let hourlyIcon19 = data.hourly[19].weather[0].icon;
          document.getElementById("hourly-forecast__icon-19").src = `http://openweathermap.org/img/wn/${hourlyIcon19}.png`;

          // Next three days weather icon
          let next3DailyIcon1 = data.daily[1].weather[0].icon;
          document.getElementById("next-3-days-forecast__icon-1").src = `http://openweathermap.org/img/wn/${next3DailyIcon1}@2x.png`;

          let next3DailyIcon2 = data.daily[2].weather[0].icon;
          document.getElementById("next-3-days-forecast__icon-2").src = `http://openweathermap.org/img/wn/${next3DailyIcon2}@2x.png`;

          let next3DailyIcon3 = data.daily[3].weather[0].icon;
          document.getElementById("next-3-days-forecast__icon-3").src = `http://openweathermap.org/img/wn/${next3DailyIcon3}@2x.png`;

          // Next five days weather icon
          let next5DailyIcon1 = data.daily[1].weather[0].icon;
          document.getElementById("next-5-days-forecast__icon-1").src = `http://openweathermap.org/img/wn/${next5DailyIcon1}.png`;

          let next5DailyIcon2 = data.daily[2].weather[0].icon;
          document.getElementById("next-5-days-forecast__icon-2").src = `http://openweathermap.org/img/wn/${next5DailyIcon2}.png`;

          let next5DailyIcon3 = data.daily[3].weather[0].icon;
          document.getElementById("next-5-days-forecast__icon-3").src = `http://openweathermap.org/img/wn/${next5DailyIcon3}.png`;

          let next5DailyIcon4 = data.daily[4].weather[0].icon;
          document.getElementById("next-5-days-forecast__icon-4").src = `http://openweathermap.org/img/wn/${next5DailyIcon4}.png`;

          let next5DailyIcon5 = data.daily[5].weather[0].icon;
          document.getElementById("next-5-days-forecast__icon-5").src = `http://openweathermap.org/img/wn/${next5DailyIcon5}.png`;

          // Test
          console.log(data);
          console.log(currentIcon);
          console.log(hourlyIcon1);
          console.log(next3DailyIcon1);
          console.log(next5DailyIcon1);
        });
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
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "Sat";

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
  let formattedTime = day + "/" + (month + 1);
  // console.log(formattedTime);
  return formattedTime;
}