import React from 'react'

const Country = ({ country, selectCountry }) => {
    return (
      <p>{country.name} <button onClick={selectCountry}>show</button></p>
    )
  }

export default Country
