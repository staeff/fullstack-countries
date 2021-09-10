import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Fullcountry = ({ country }) => {
  const [ weather, setWeather ] = useState({})
  const api_key = process.env.REACT_APP_WEATHER_API_KEY

  useEffect(() => {
    axios
    .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
    .then(response => {
      setWeather(response.data.current)
    })
  }, [api_key, country.capital])



  return (
    <>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h2>languages</h2>
      <ul>{ country.languages.map(language =>
          <li key={language.name}>{language.name}</li>
        )}
      </ul>
      <img src={country.flag} alt={`Flag ${country.name}`} width="120px"/>
      <h2>Weather in {country.capital}</h2>
      <p><strong>temperature:</strong> {weather.temperature} ˚C</p>
      <img src={weather.weather_icons} alt={`Weather icon ${weather.weather_description}`} />
      <p><strong>wind:</strong> {weather.wind_speed} mph direction {weather.wind_dir}</p>
    </>
  )
}

export default Fullcountry
