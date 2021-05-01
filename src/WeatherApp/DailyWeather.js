import React from 'react';

function DailyWeather({dailyWeather, dailyDay}) {
    
    return (
       <div className="daily-weather">
       
          {
              dailyWeather.map(daily => {
                  return <div className="daily-box" key={Math.random()*1+8}>

                  <p>{/** Make Day of week */}</p>

                  <p className="temp">Max-Temp: {Math.round(daily.feels_like.day -273.15)} Min-Temp: {Math.round(daily.feels_like.eve -273.15)}</p>

                  <img src={`http://openweathermap.org/img/w/${daily.weather[0].icon}.png`} alt={daily.weather[0].icon} className="daily-image" />

                  <p className="weather-info">{daily.weather[0].main}</p>

                  <p className="humidity">Humidity: {daily.humidity}</p>
                  
                  </div>
              })
          }
       </div> 
    )
}

export default DailyWeather;
