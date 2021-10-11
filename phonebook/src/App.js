//import axios from "axios";
import React, { useState, useEffect } from "react";
import Filter from "./components/Filter.js";
import PersonForm from "./components/PersonForm.js";
import Persons from "./components/Persons.js";
import personService from "./services/persons.js"
import Notification from "./components/Notification.js"

const App = () => {
const [persons, setPersons] = useState([]);
  useEffect (()=>{
    personService
      .getAll()
      .then(initialNotes => {
        setPersons(initialNotes)
      })
  },[])
 // const [style,setStyle] = useStage("red");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [errorMessage, setErrorMessage]=useState([null,{color:'red'}])

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
      personService
        .create(newPerson)
        .then(createdPerson=>{
          setPersons(persons.concat(createdPerson));
          setErrorMessage([`Add ${createdPerson.name}`,{color:'green'}])
          setTimeout(()=>{
            setErrorMessage([null, {color:'red'}]);
          },5000)
        })
    } 
    else {
        //alert(`${newName} is already added to phonebook`);
        //ask for alter the phone number
        const result = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one? `)
        if (result) {
          const updateId = persons.find((element) => element.name === newName).id
          personService.update(
            updateId,
            { name: newName, number: newNumber }
          ). then (res=>{
            //console.log("this is returned after update: ",res);
            setPersons(persons.map(person=>person.id!==updateId?person:res ))
          })
        }
    }
     
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleDeleteID = (id) =>{

    //window confirm message
    const nameOfDelete = persons.find(person=>person.id === id).name;
    const result = window.confirm(`Delete ${nameOfDelete} ?`)
    if (result) 
    {personService
      .deleteAnItem(id)
      .then(res=>{

        console.log(`${persons.find(person=>person.id===id).name} is deleted!`);
        //console.log("this is response data ",res)
        //const newPersons = {...persons, }
        setPersons(persons.filter((person)=>person.id!==id))
        //console.log("new persons object after delete ",persons)
         setErrorMessage([
           `Information of ${nameOfDelete} has been removed from server`,
           { color: "green" },
         ]);
         setTimeout(() => {
           setErrorMessage([null, { color: 'green' }]);
         }, 5000);
        }
        ).catch(error=> {
          setErrorMessage([`Information of ${nameOfDelete} has already been removed from server`, { color: "red" }]);
          setTimeout(()=>{
            setErrorMessage([null,{color:'red'}])
          },5000)
          setPersons(persons.filter((person) => person.id !== id));
        }
          )
      }

    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {/* <div>debug: {filter}</div> */}
      <Notification message ={errorMessage} />
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
      <Persons personsCollection={persons} thisFilter={filter} deleteId ={(id)=>handleDeleteID(id)}/>
    </div>
  );
};

export default App;
