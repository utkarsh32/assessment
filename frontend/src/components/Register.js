import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Register() {
  const navigate = useNavigate();
  const [name,setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
     const response= await axios.post('http://localhost:3001/register',{
        name,email,password
      })
      console.log("------",response.status)
      if(response.status==200){
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

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
      <form 
        onSubmit={handleSubmit} 
        style={{
          background: 'white',
          padding: '20px 30px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '400px',
          marginBottom: '15px'
        }}>
        <h2 style={{
          fontSize: '24px',
          marginBottom: '20px',
          textAlign: 'center',
          color: '#333'
        }}>Register</h2>

        {/* Name Field */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{
            display: 'block',
            fontWeight: 'bold',
            marginBottom: '5px',
            color: '#555'
          }}>Name</label>
          <input 
            type="text" 
            name="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter your name"
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

        {/* Email Field */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{
            display: 'block',
            fontWeight: 'bold',
            marginBottom: '5px',
            color: '#555'
          }}>Email</label>
          <input 
            type="email" 
            name="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email"
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

        {/* Password Field */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{
            display: 'block',
            fontWeight: 'bold',
            marginBottom: '5px',
            color: '#555'
          }}>Password</label>
          <input 
            type="password" 
            name="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}  
            placeholder="Enter your password"
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
          Register
        </button>
      </form>
      <p style={{
        marginTop: '15px',
        color: '#555'
      }}>
        Already have an account?{' '}
        <button 
          onClick={() => navigate('/')} 
          style={{
            all: 'unset',
            color: 'blue',
            cursor: 'pointer'
          }}
        >
          Login
        </button>
      </p>
    </div>
  )
}

export default Register