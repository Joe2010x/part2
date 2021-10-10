import React , {useState} from "react";

//const produceNameList

const CountryList = (props) => {
  // console.log("this is namelist: ",props.nameList[0].name.common);
   const [clicked, setClicked] = useState(false);
   //let selCou =[]
   const [selCou,setSelCou] = useState([])
  const handleShowCountry = (event) => {
    event.preventDefault();
   
    let countryName = event.target.firstChild.value;
     setSelCou ( props.nameList.filter((aCountry) => aCountry.name.common === countryName))
 
    setClicked(true);

        


  };

  return (
    <div>
      {!clicked ? (
        props.nameList.map((e) => (
          <form onSubmit={handleShowCountry}>
            <input key={e} value={e.name.common}></input>
            <button type="submit">show</button>
          </form>
        ))
      ) : 
         <DisplayOneCountry thisCountry={selCou}/>}
    </div>
  );
};

const DisplayLanguage = (props) => {
  console.log(props.languages);
  //props.languages.forEach
  let langList = [];
  Object.values(props.languages).forEach((val) => {
    langList = langList.concat(val);
  });
  //console.log(langList)
  return (
    <div>
      {langList.map((lan) => (
        <p key={lan}>{lan}</p>
      ))}
    </div>
  );
};

const DisplayOneCountry = ({ thisCountry }) => {
  console.log("this is one country div: ", thisCountry);
  return (
    <div>
      <h1>{thisCountry[0].name.common}</h1>
      <p>capital {thisCountry[0].capital}</p>
      <p>population {thisCountry[0].population}</p>
      <h2>languages</h2>

      <DisplayLanguage languages={thisCountry[0].languages} />
      <img
        src={thisCountry[0].flags.svg}
        alt={"Flag of " + thisCountry[0].name.common}
        width="200px"
      />
    </div>
  );
};

const FiltNameList = ({ nameList, theFilter }) => {
  const filtedNameList = nameList.filter(
    (aCountry) =>
      aCountry.name !== null &&
      aCountry.name.common.toLowerCase().includes(theFilter.toLowerCase())
  );
    
  console.log("this is filtednamelist: ", filtedNameList);
  const listLen = filtedNameList.length;

  if (listLen === 0) {
    return <p>No matches, specify another filter</p>;
  } else if (listLen > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (listLen !== 1) {
    return <CountryList nameList={filtedNameList} filter={theFilter} />;
  } else {
    return <DisplayOneCountry thisCountry={filtedNameList} />;
  }
};
const DisplayCountries = ({ allCou, couFil }) => {
  console.log("this is allcountries: ", couFil, allCou);
  return (
    <div>
      {allCou === [] ? (
        <p>Loading data...</p>
      ) : (
        <FiltNameList nameList={allCou} theFilter={couFil} />
      )}
    </div>
  );
};

export default DisplayCountries;
