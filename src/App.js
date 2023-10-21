//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';



function App() {
  const [todos, setTodos] = useState(["할일 1", "할일 2"]);
  //["할일 1", "할일 2"];

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <div>
        <input />
        <button>ADD</button>
      </div>
      {todos.map((todo, index) => (
        <div key={index}>
          <input type="checkbox" />
          <span>{todo}</span>
          <button>DEL</button>
        </div>
      ))}
    </div>
  );
}

export default App;
