// src/pages/LoginPage.jsx
import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import './LoginPage.css'

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'user'
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))

      if (formData.email && formData.password) {
        const userData = {
          id: Date.now(),
          email: formData.email,
          name: formData.email.split('@')[0],
          role: formData.role
        }
        login(userData)
        navigate('/dashboard')
      } else {
        setError('Please fill in all fields')
      }
    } catch (err) {
      setError('Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="container">
        <div className="login-container">
          <Card className="login-card">
            <h2 className="login-title">Welcome Back</h2>
            <p className="login-subtitle">Sign in to your Sustainable Living account</p>

            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="role">Role</label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  disabled={loading}
                >
                  <option value="user">User / Student</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                disabled={loading}
                className="login-button"
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>

            {/* ---- SIGN UP LINK ADDED HERE ---- */}
            <p className="signup-link">
              Don't have an account?{' '}
              <span 
                onClick={() => navigate('/signup')}
                style={{ color: '#007bff', cursor: 'pointer' }}
              >
                Create Account
                
              </span>
            </p>

            <div className="login-info">
              <h4>Demo Credentials:</h4>
              <p>Any email and password will work for demonstration.</p>
              <p>Select your role to see different dashboard views.</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
