import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [greet, setGreet] = useState([]);

  useEffect(() => {
    fetch("/helloguest")
  .then(async (res) => {
    const data = await res.json();
    setGreet(JSON.stringify(data,null,2));
  })
  }, []);

  const handleTome = () => {
    fetch("/hellotome")
  .then(async (res) => {
    const data = await res.json();
    setGreet(JSON.stringify(data,null,2));
  })
  };

  const handleAnte = () => {
    fetch("/helloante")
  .then(async (res) => {
    const data = await res.json();
    setGreet(JSON.stringify(data,null,2));
  })
  }
  
  const handleFabijan = () => {
    fetch("/hellofabijan")
  .then(async (res) => {
    const data = await res.json();
    setGreet(JSON.stringify(data,null,2));
  })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {greet}
        <button onClick={handleTome}>Hello, Tome!</button>
        <button onClick={handleAnte}>Hello, Ante!</button>
        <button onClick={handleFabijan}>Hello, Fabijan!</button>
      </header>
    </div>
  );
}

export default App;
