import { useState } from "react";

export default function PersonDetails() {
  const [person, setPerson] = useState({
    name: "John Doe",
    age: 25,
    city: "New York",
  });

  /**
   * Updates the age of the person by incrementing it by 1.
   */
  const updateAge = () => {
    setPerson({
      // Spread operator to copy the existing person object
      ...person,
      age: person.age + 1,
    });
  };

  return (
    <>
      <div>
        <h1>Person Details</h1>
        <p>Name: {person.name}</p>
        <p>Age {person.age}</p>
        <p>City: {person.city}</p>
      </div>
      <br />
      <button onClick={updateAge}> update age</button>
    </>
  );
}
