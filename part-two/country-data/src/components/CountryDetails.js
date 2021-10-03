import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountryDetails = ({ country }) => {
  const weather_api_key = process.env.REACT_APP_WEATHER_KEY
  const weather_url = 'http://api.weatherstack.com/current?access_key=' + weather_api_key + '&query=' + country.capital
  const [ currentWeather, setCurrentWeather ] = useState()

  useEffect(() => {
    axios
      .get(weather_url)
      .then(response => {
        setCurrentWeather(response.data.current)
      })
  }, [weather_url])

  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>region {country.region}</p>
      <h2>Languages Spoken:</h2>
      <ul>
        {country.languages.map(language => {
          return (
            <li key={language.name}>{language.name}</li>
          )
        })}
      </ul>
      <img src={country.flags.png} alt={country.name}/>
      {currentWeather &&
        <div>
          <h2>Weather in {country.capital}</h2>
          <p>temperature: {currentWeather.temperature}</p>
          <img src={currentWeather.weather_icons[0]} alt='Weather icon'/>
          <p>wind: {currentWeather.wind_speed} mph direction {currentWeather.dir}</p>
        </div>
      }
    </div>
  )
}

export default CountryDetails