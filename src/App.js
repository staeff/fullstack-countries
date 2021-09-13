import React, { useState, useEffect } from 'react'
import Country from './components/Country'
import Fullcountry from './components/Fullcountry'
import axios from 'axios'

function App() {
  const [ countries, setCountries ] = useState([])
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const countriesToShow = newFilter ?
  countries.filter(country => country.name.toLowerCase().includes(newFilter.toLowerCase())) :
  countries

  const selectSingleCountry = (name) => {
    setNewFilter(name)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  let length = countriesToShow.length

  return (
    <div>
      <h1>Countries</h1>
      find countries <input type="text" value={newFilter} onChange={handleFilterChange} />
      <div>
        {length > 1 && length < 11 && countriesToShow.map(country =>
          <Country key={country.name}
                   country={country}
                   selectCountry={() => selectSingleCountry(country.name)}/>
        )}
        {length === 1 && countriesToShow.map(country =>
          <Fullcountry key={country.name} country={country} />
        )}
        {length > 10 &&
          <p>Too many matches, specify another filter</p>
        }
        {length === 0 &&
          <p>No matching countries</p>
        }
      </div>
    </div>
  );
}

export default App;
