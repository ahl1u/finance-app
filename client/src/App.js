import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  const [accessKey, setAccessKey] = useState(localStorage.getItem('access-key') || '');

  if (accessKey) {
    return <Dashboard accessKey={accessKey} onLogout={() => setAccessKey('')} />;
  } else {
    return <Login onLogin={setAccessKey} />;
  }
}

export default App;
