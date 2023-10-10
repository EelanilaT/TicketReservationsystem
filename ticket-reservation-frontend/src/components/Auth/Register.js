import React, { useState } from 'react';
import { register } from '../services/authService';

function Register() {
  const [user, setUser] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await register(user.username, user.password);
      // Handle successful registration (e.g., redirect to login page)
    } catch (error) {
      // Handle registration error
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        {/* Similar form structure as in Login.js */}
      </form>
    </div>
  );
}

export default Register;
