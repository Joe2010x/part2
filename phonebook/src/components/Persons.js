import React from "react";

const Persons = ({ personsCollection, thisFilter }) => {
  console.log(personsCollection);
  console.log(thisFilter);
  return (
    <div>
      {personsCollection
        .filter((person) =>
          person.name.toLowerCase().includes(thisFilter.toLowerCase())
        )
        .map((person) => (
          <p key={person.id}>
            {person.name} {person.number}
          </p>
        ))}
    </div>
  );
};

export default Persons;
