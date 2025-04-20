import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import FeatureHighlightProvider from './context/FeatureHighlightContext';

function App() {
  return (
    <div className="App">
      <FeatureHighlightProvider>
        <Homepage />
      </FeatureHighlightProvider>
    </div>
  );
}

export default App;
