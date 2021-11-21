import React, { useState } from "react";

const App = (props) => {
  const people = [
    { name: "Grid Flex", number: "040-123456", id: 1 },
    { name: "CyberGirl", number: "944-532-3523", id: 2 },
    { name: "411Jackson", number: "305-237-4345", id: 3 },
    { name: "Error Bugs", number: "393-642-3122", id: 4 }
  ];

  const [search, setNewSearch] = useState("");
  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
};
const filtered = !search
    ? people
    : people.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      );



  return (
    <>
      <h2>Phone Book</h2>
      <input type="text" value={search} onChange={handleSearchChange} />

      <h2>Numbers Of The Team</h2>
      {filtered.map((person) => {
        return (
            <p key={person.id}>
                {person.name} - {person.number}
            </p>
        );
    })}
    
    </>
  );
};

export default App;
