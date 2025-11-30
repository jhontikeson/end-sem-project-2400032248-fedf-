// src/pages/SignupPage.jsx
import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import './SignupPage.css'

const SignupPage = () => {
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user'
  })

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200))

      const userData = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        role: formData.role
      }

      // Auto login after sign up  
      login(userData)

      navigate('/dashboard')
    } catch (err) {
      setError('Signup failed. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="signup-page">
      <div className="container">
        <Card className="signup-card">
          <h2 className="signup-title">Create Your Account</h2>
          <p className="signup-subtitle">Join the Sustainable Living Platform</p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="signup-form">
            
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
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
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              disabled={loading}
              className="signup-button"
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </Button>
          </form>

          <p className="login-link">
            Already have an account?{' '}
            <span
              onClick={() => navigate('/login')}
              style={{ color: '#007bff', cursor: 'pointer' }}
            >
              Sign In
            </span>
          </p>
        </Card>
      </div>
    </div>
  )
}

export default SignupPage
