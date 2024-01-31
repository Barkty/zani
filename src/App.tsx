import React, { lazy } from 'react';
import './App.css';

const Home = lazy(() => import('pages'))

function App() {
  return (
    <Home />
  );
}

export default App;
