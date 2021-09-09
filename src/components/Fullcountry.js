import React from 'react'

const Fullcountry = ({ country }) => {

  console.log(country.flag)

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
    </>
  )
}

export default Fullcountry
