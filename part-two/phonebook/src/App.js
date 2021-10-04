import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import contactService from './services/contacts'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
    contactService
      .getAll()
      .then(initialContacts => {
        setPersons(initialContacts)
      })
  }, []) 

  const addPerson = (event) => {
    event.preventDefault()
    if (nameOrNumberExists()) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      }
      contactService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
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