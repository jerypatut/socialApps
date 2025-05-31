import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Authcontext';
import LoginForm from '../components/LoginComponent';
import { login } from '../service/AuthService';

export default function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const { authState, setAuthState } = useContext(AuthContext);
  const navigate = useNavigate();

  // ✅ Redirect ke '/' kalau sudah login
  useEffect(() => {
    if (authState.status) {
      navigate('/');
    }
  }, [authState, navigate]);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await login(credentials);

      if (response.data.error) {
        alert(response.data.error);
      } else {
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        });
        navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Terjadi kesalahan saat login.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <LoginForm credentials={credentials} onChange={handleChange} onSubmit={handleLogin} />
    </div>
  );
}
