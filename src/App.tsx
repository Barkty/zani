import React, { lazy } from 'react';
import './App.css';

const Home = lazy(() => import('pages'))

function App() {
  return (
    <div data-testid='home'>
      <Home />
    </div>
  );
}

export default App;
