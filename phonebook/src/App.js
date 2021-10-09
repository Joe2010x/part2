import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "040-1234567" }]);
  const [newName, setNewName] = useState("");
  const [newNumber,setNewNumber] = useState("")
  
 
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

  return (
    <div>
      <h2>Phonebook</h2>
      {/* <div>debug: {newName}</div> */}
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
      {persons.map((person) => (
        <p key={person}>{person.name} {person.number}</p>
      ))}
    </div>
  );
};

export default App;
