import React, { useState } from 'react'
import CountryDetails from './CountryDetails'

const CountryNames = ({ countries }) => {
  const [ countryDetails, setCountryDetails] = useState([])

  const toggleCountryDetails = (country) => {
    if (countryDetails.includes(country.name)) {
      setCountryDetails(countryDetails.filter(details => details !== country.name))
    } else {
      let detailsCopy = [...countryDetails]
      setCountryDetails(detailsCopy.concat(country.name))
    }
  }

  return (
    <ul>
      {countries.map(country => {
        return (
          <li key={country.name}>
            {country.name}
            <button onClick={() => toggleCountryDetails(country)}>show/hide details</button>
            {countryDetails.includes(country.name) && 
              <CountryDetails country={country} />
            }
          </li>
        )
      })}
    </ul>
  )
}

export default CountryNames