import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (nameOrNumberExists()) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
  
      setPersons(persons.concat(personObject))
    }

    resetInputs()
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const resetInputs = () => {
    setNewName('')
    setNewNumber('')
  }

  const nameOrNumberExists = () => {
    let foundPerson = persons.find(person => 
      person.name === newName
      || person.number === newNumber
    )
    return foundPerson !== undefined
  }

  const peopleToShow = () => {
    return persons.filter(person => person.name.toLowerCase().includes(newFilter))
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter 
        filter={newFilter}
        filterChange={handleFilterChange}
      />

      <h2>Add a new person</h2>

      <PersonForm 
        onSubmit={addPerson}
        name={newName}
        nameChange={handleNameChange}
        number={newNumber}
        numberChange={handleNumberChange}
      />

      <h2>Numbers</h2>

      <Persons persons={peopleToShow()}/>
    </div>
  )
}

export default App