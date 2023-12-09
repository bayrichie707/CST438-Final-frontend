import React, { useState, useEffect } from 'react';
import '../css/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
   
    const loggedInUser = localStorage.getItem('isLoggedIn');
    const storedUsername = localStorage.getItem('username');
    if (loggedInUser === 'true') {
      setIsLoggedIn(true);
      setUsername(storedUsername || '');
    }
  }, []);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (username === 'admin' && password === 'pass') {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
      window.location.reload();
    } else {
      setIsLoggedIn(false);
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    window.location.reload();
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <form>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button type="button" onClick={handleLogin}>
              Log In
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;

