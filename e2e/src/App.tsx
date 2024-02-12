import React from 'react';
import logo from './logo.svg';
import './App.css';

import {AnalyticsApi} from './analytics.api';


function App() {
  const callAnalytics = async () => {
    try {
      const health = await AnalyticsApi.getAnalyticsHealth();
      const bi = await AnalyticsApi.getBIAnalytics();
      console.log(health);
      console.log(bi);
    } catch (error) {
      return error;
    }
  };

  callAnalytics();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
  );
}

export default App;
