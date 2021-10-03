import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter';
import CountryList from './components/CountryList';

const App = () => {
  const [ countryData, setCountryData ] = useState([])
  const [ newFilter, setNewFilter ] = useState('')

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const countriesToShow = () => {
    return countryData.filter(country => 
      country.name.toLowerCase().includes(newFilter)
    )
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        setCountryData(response.data)
      })
  }, [])

  return (
    <div>
      <Filter 
        filter={newFilter}
        filterChange={handleFilterChange}
      />
      <CountryList 
        countries={countriesToShow()}
      />

    </div>
  )
  
}

export default App;
