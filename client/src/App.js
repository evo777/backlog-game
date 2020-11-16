import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  function submitGame(e) {
    console.log("form submitted");
    // Handle ajax call here to save game item
    e.preventDefault();
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
