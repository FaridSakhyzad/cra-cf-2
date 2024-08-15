import './App.css';
import { Routes, Route, } from 'react-router-dom';
import React, { Suspense } from 'react';

const Home = React.lazy(() => import('./pages/Home' /* webpackPrefetch: true */));
const Profile = React.lazy(() => import('./pages/Profile' /* webpackPrefetch: true */));
const About = React.lazy(() => import('./pages/About' /* webpackPrefetch: true */));
const Faq = React.lazy(() => import('./pages/Faq' /* webpackPrefetch: true */));

function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Suspense>
  );
}

export default App;
