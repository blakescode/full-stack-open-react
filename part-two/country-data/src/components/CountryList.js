import React from 'react'
import CountryDetails from './CountryDetails'
import CountryNames from './CountryNames'

const CountryList = ({ countries }) => {
  let tooManyMatches = countries.length > 10
  let moreThanOne = countries.length < 10 && countries.length > 1
  let justRight = countries.length === 1
  if (tooManyMatches) {
    return (
      <p>Too many matches, add a more specific search</p>
    )
  } else if (moreThanOne) {
    return (
      <CountryNames countries={countries} />
    )
  } else if (justRight) {
    return (
      <CountryDetails country={countries[0]} />
    )
  } else {
    return (
      <p>No countries matching your search</p>
    )
  }
}

export default CountryList