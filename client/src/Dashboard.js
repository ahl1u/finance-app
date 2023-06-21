import React from 'react';

function Dashboard({ accessKey, onLogout }) {
  const logout = () => {
    localStorage.removeItem('access-key');
    onLogout();
  };

  return (
    <div>
      <h1>Welcome, {accessKey}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
