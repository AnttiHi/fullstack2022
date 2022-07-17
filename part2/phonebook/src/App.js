import { useState } from 'react'
import SearchFilter from './components/SearchFilter'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-123456'
    }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterShown, setFilterShown] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    const names = persons.map(person => person.name)
    if (names.includes(newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilterShown(event.target.value)
  }

  const Person = ({ name, number }) => {
    return (<li>{name} {number}</li>)
  }

  const shownPersons = persons.filter(person => person.name.toLowerCase().includes(filterShown.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with: <input
        value={filterShown}
        onChange={handleFilterChange} />
      </div>
      <h3>Add a new contact</h3>
      <form
        onSubmit={addPerson}>
        <div>name: <input
          value={newName}
          onChange={handleNameChange}
        />
        </div>
        <div>number: <input
          value={newNumber}
          onChange={handleNumberChange}
        />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <ul>
        {shownPersons.map(person =>
        <Person key={person.name} name={person.name} number={person.number} />
        )}
      </ul>
    </div>
  )
}

export default App