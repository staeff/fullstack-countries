import React, { useState, useEffect } from 'react'
import Country from './components/Country'
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
  console.log('render', countries.length, 'countries')

  const countriesToShow = newFilter ?
  countries.filter(country => country.name.toLowerCase().includes(newFilter.toLowerCase())) :
  countries

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    console.log(countries)
  }

  let length = countriesToShow.length

  return (
    <div>
      <h1>Countries</h1>
      find countries <input type="text" value={newFilter} onChange={handleFilterChange} />
      <div>
        {length > 1 && length < 11 && countriesToShow.map(country =>
          <Country key={country.name} country={country} />
        )}
      </ul>
    </div>
  );
}

export default App;
