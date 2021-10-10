
import React, { useEffect, useState }  from "react"
import axios from "axios"
import DisplayCountries from "./components/DisplayCountries.js"


function App() {
  const [inputName,setInputName] = useState("Country name")
  const [allCountries,setAllCountries] = useState([])
useEffect(()=>{
  axios.get("https://restcountries.com/v3.1/all")
    .then (res=>{
       setAllCountries(res.data);
      console.log("this respond from rest countries: ", res.data)
    })
},[])

  const handleName = (event) => {
    console.log(event.target.value)
    setInputName(event.target.value)
  }

  return (
    
    <div className="App">
      {/* <div>debug: {inputName}</div> */}
      find country:
      <input onChange={handleName} value={inputName}></input>
      
      <DisplayCountries allCou={allCountries === undefined ?[] :allCountries} couFil = {inputName}/>
    </div>
  );
}

export default App;
