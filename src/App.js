import React, { useState, useEffect } from 'react'
import Country from './components/Country'
import axios from 'axios'

function App() {
  const [ countries, setCountries ] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'countries')

  return (
    <div>
      <h1>Countries</h1>

      <ul>
        {countries.map(country =>
          <Country key={country.name} country={country} />
        )}
      </ul>
    </div>
  );
}

export default App;
