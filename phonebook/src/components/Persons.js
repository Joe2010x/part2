import React from "react";

const Persons = ({ personsCollection, thisFilter, deleteId }) => {
  console.log(personsCollection);
  console.log(thisFilter);
  return (
    <div>
      {personsCollection
        .filter((person) =>
          person.name.toLowerCase().includes(thisFilter.toLowerCase())
        )
        .map((person) => (
          <div>
            {/* <p key={person.id}> */}
            {person.name} {person.number}
            <button onClick={() => deleteId(person.id)}>delete</button>
          </div>          
        ))}
    </div>
  );
};

export default Persons;
