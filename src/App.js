import React, { useEffect } from 'react';
import Routers from './components/router/Routers';
import './App.scss';

function App() {
  useEffect(() => {
    document.title = 'Publishing Guides'
  }, []);

  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
