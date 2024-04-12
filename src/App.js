import './App.css';
import { Routes, Route } from 'react-router-dom';
import Element1 from './components/Element1/index';
import Element2 from './components/Element2/index';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Element1 />} />
      <Route path="/asdf" element={<Element2 />} />
    </Routes>
  );
}

export default App;
