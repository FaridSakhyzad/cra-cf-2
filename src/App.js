import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

const El = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

const El2 = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>El2 Asdf</h1>
      </header>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<El />} />
      <Route path="/asdf" element={<El2 />} />
    </Routes>
  );
}

export default App;
