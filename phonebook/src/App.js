import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
 
  const handleChange =(event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleClick =(event) => {
    event.preventDefault();
   // console.log(event.target)
    persons.find((element)=>element.name ===newName) ===undefined ? setPersons(persons.concat({ name: newName }))
    : alert(`${newName} is already added to phonebook` )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {/* <div>debug: {newName}</div> */}
      <form>
        <div>
          name:
          <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button onClick={handleClick} type="submit">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
