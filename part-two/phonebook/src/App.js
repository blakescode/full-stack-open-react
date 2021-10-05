import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
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
    const newPersonObject = {
      name: newName,
      number: newNumber,
    }
    const existingPerson = nameExists()
    if (existingPerson && window.confirm(`${existingPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
      contactService
        .update(existingPerson.id, newPersonObject)
        .then(returnedPerson => {
          const updatedPersons = persons.map(p => {
            if (p.id === existingPerson.id) {
              return {...p, number: returnedPerson.number}
            } else {
              return p
            }
          })
          setPersons(updatedPersons)
        })
    } else {
      contactService
        .create(newPersonObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
    }

    resetInputs()
  }

  const removePerson = id => {
    const personToRemove = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${personToRemove.name} ?`)) {
      contactService
        .remove(id)
        .then(reponse => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
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

  const nameExists = () => {
    let foundPerson = persons.find(person => person.name === newName)
    return foundPerson
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

      <ul>
        {peopleToShow().map(person => 
          <Person 
            key={person.id}
            person={person}
            deleteFunc={() => removePerson(person.id)} 
          />
        )}
      </ul>
    </div>
  )
}

export default App