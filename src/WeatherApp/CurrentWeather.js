import React from 'react'

function CurrentWeather({weatherInfo}) {
    return (
        <div className="CurrentWeather">
            <p className="location">{weatherInfo.name},<span className="country">{weatherInfo.sys.country}</span></p>
            <p className="temperature">{Math.round(weatherInfo.main.temp - 273.15)}°C</p>
            <img src={`http://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`} alt={weatherInfo.weather[0].icon} className="image" />
            <p className="weather">{weatherInfo.weather[0].main}</p>
            <p className="max-temp">Max: {Math.round(weatherInfo.main.temp_max - 273.15)}°C  <span className="min-temp">Min: {Math.round(weatherInfo.main.temp_min - 273.15)}°C</span></p>
            <p className="pressure">pressure: {weatherInfo.main.pressure}psi</p>
            <p className="hummidity">hummidity: {weatherInfo.main.humidity}%</p>
        </div>
    )
}

export default CurrentWeather
