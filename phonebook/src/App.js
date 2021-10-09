import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber,setNewNumber] = useState("");
  const [filter,setFilter] = useState("");
  
 
  const addName =(event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

    const addNumber = (event) => {
      console.log(event.target.value);
      setNewNumber(event.target.value);
    };

  const handleClick =(event) => {
    event.preventDefault();
   // console.log(event.target)
    persons.find((element)=>element.name ===newName) ===undefined 
    ? setPersons(persons.concat({ name: newName, number:newNumber }))
    : alert(`${newName} is already added to phonebook` )
  }

  const handleFilter =(event) =>{
    setFilter (event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {/* <div>debug: {filter}</div> */}
      filter shown with 
      <input onChange={handleFilter} value = {filter}>
      </input>
      <h2>add a new</h2>
      <form>
        <div>
          name:
          <input value={newName} onChange={addName} />
        </div>
        <div>
          number:
          <input value={newNumber} onChange={addNumber} />
        </div>
        <div>
          <button onClick={handleClick} type="submit">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter(person=>person.name.toLowerCase().includes(filter.toLowerCase())).map((person) => (
        <p key={person.id}>{person.name} {person.number}</p>
      ))}
    </div>
  );
};

export default App;
