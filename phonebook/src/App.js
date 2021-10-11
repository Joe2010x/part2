import axios from "axios";
import React, { useState, useEffect } from "react";
import Filter from "./components/Filter.js";
import PersonForm from "./components/PersonForm.js";
import Persons from "./components/Persons.js";

const App = () => {
  const baseUrl = "http://localhost:3001/persons";
const [persons, setPersons] = useState([]);
  useEffect (()=>{
    axios.get(baseUrl)
      .then (promise =>{
        //console.log("returned from promise ",promise.data);
        setPersons(promise.data);
      })
  },[])

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const addName = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const addNumber = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    // console.log(event.target)
    if (persons.find((element) => element.name === newName) === undefined)
    {
      const newPerson = { name: newName, number: newNumber }
      setPersons(persons.concat(newPerson))
      axios.post(baseUrl,newPerson)
        .then (res=>{
          console.log("returned from post new person: ",res);
        })
    } 
    else {
        alert(`${newName} is already added to phonebook`);
    }
     
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      {/* <div>debug: {filter}</div> */}

      <Filter onChange={handleFilter} value={filter} />

      <h3>add a new</h3>

      <PersonForm
        nName={newName}
        nNumber={newNumber}
        hClick={handleClick}
        aName={addName}
        aNumber={addNumber}
      />

      <h3>Numbers</h3>
      <Persons personsCollection={persons} thisFilter={filter} />
    </div>
  );
};

export default App;
