import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h1 className="title">⚡ React Counter App ⚡</h1>
      <p className="count">{count}</p>
      <div className="button-group">
        <button className="btn increment" onClick={() => setCount(count + 1)}>
          ➕ Increment
        </button>
        <button className="btn decrement" onClick={() => setCount(count - 1)}>
          ➖ Decrement
        </button>
        <button className="btn reset" onClick={() => setCount(0)}>
          🔄 Reset
        </button>
      </div>
    </div>
  );
}

export default App;
