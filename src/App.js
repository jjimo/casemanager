import React, { useState } from 'react';
import Aside from './components/Aside.js';
import Bar from './components/Bar.js';
import Case from './components/Case.js';

function App() {

  // To add a case
  const [cases, saveCases] = useState([]);

  const addCase = ccase => {
    saveCases([
      ...cases,
      ccase
    ]);
  }

  return (

    <div className="app-container">
      <Aside />

      <main>
        <Bar />

        <Case />
      </main>

    </div>

  );
}

export default App;
