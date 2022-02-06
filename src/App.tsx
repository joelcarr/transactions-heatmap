import React from 'react';

import { Transactions } from './features/transactions/Transactions';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Transactions Heatmap</h1>
      <Transactions />
    </div>
  );
}

export default App;
