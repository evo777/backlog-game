import React, { useState } from "react";
import axios from 'axios';

function App() {
  const [value, setValue] = useState("");
  function submitGame(e) {
    // Handle ajax call here to save game item
    e.preventDefault();
    axios.post('http://localhost:5000/add', { title: value })
      .then(res => {
        console.log("I am data: ", res.data);
      })
      .catch(e => console.error(e));
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="App">
      <h1>Backlog Game (Under Construction)</h1>
      <form onSubmit={submitGame}>
        <label>
          Game:
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
