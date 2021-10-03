import React from 'react'

const Filter = ({ filter, filterChange }) => {
  return (
    <div>
      find countries by name: <input 
        value={filter}
        onChange={filterChange}
      />
    </div>
  )
}

export default Filter