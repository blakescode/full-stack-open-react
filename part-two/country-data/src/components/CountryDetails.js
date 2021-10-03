import React from 'react'

const CountryDetails = ({ country }) => {
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
    </div>
  )
}

export default CountryDetails