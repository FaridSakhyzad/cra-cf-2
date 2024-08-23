import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Routes, Route, } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';

import { reducer } from './store';

import './App.css';

const Home = React.lazy(() => import('./pages/Home' /* webpackPrefetch: true */));
const Profile = React.lazy(() => import('./pages/Profile' /* webpackPrefetch: true */));
const About = React.lazy(() => import('./pages/About' /* webpackPrefetch: true */));
const Faq = React.lazy(() => import('./pages/Faq' /* webpackPrefetch: true */));

const store = configureStore({
  reducer,
  preloadedState: typeof window === 'undefined' ? undefined : window.__PRELOADED_STATE__,
});

if (typeof window !== 'undefined') {
  delete window.__PRELOADED_STATE__;

  window.addEventListener('load', () => {
    const $preloadedState = document.querySelector('#preloaded-state');

    $preloadedState && $preloadedState.remove();
  });
}

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </Suspense>
    </Provider>
  );
}

export default App;
