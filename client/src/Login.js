import React, { useState } from 'react';

function Login({ onLogin }) {
  const [accessKey, setAccessKey] = useState('');
  const [error, setError] = useState(null);

  const submit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3000/api/users/', {
      headers: { 'access-key': accessKey }
    });
    if (response.ok) {
      localStorage.setItem('access-key', accessKey);
      onLogin(accessKey);
    } else {
      setError('Invalid access key');
    }
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={accessKey}
        onChange={e => setAccessKey(e.target.value)}
        placeholder="Access key"
      />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default Login;
