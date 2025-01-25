import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password }); // Replace with your API endpoint
      const token = response.data.token;

      if (token) {
        localStorage.setItem('token', token); // Store the token in localStorage
        navigate('/products'); // Redirect to Products page
      }
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      alert('Invalid credentials, please try again.');
    }
  };

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f9f9f9',
        padding: '20px'
      }}>
        <div style={{
          background: 'white',
          padding: '20px 30px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '400px'
        }}>
          <h2 style={{
            fontSize: '24px',
            marginBottom: '20px',
            textAlign: 'center',
            color: '#333'
          }}>Login</h2>
  
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{
                display: 'block',
                fontWeight: 'bold',
                marginBottom: '5px',
                color: '#555'
              }}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{
                display: 'block',
                fontWeight: 'bold',
                marginBottom: '5px',
                color: '#555'
              }}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#007bff',
                color: 'white',
                fontSize: '16px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
            >
              Login
            </button>
          </form>
          <p style={{
            marginTop: '15px',
            color: '#555',
            textAlign: 'center'
          }}>
            Don’t have an account?{' '}
            <button 
              onClick={() => navigate('/register')} 
              style={{
                all: 'unset',
                color: 'blue',
                cursor: 'pointer'
              }}
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
  );
};

export default Login;
