import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import About from "./pages/About";
import Faq from "./pages/Faq";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<Faq />} />
    </Routes>
  );
}

export default App;
