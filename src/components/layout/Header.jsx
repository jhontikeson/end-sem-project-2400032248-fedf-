// src/components/layout/Header.jsx
import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { ThemeContext } from '../../contexts/ThemeContext'
import Button from '../ui/Button'
import './Header.css'

const Header = () => {
  const { user, logout } = useContext(AuthContext)
  const { theme, toggleTheme } = useContext(ThemeContext)
  const location = useLocation()

  const handleLogout = () => {
    logout()
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <h2>Sustainable Living</h2>
            </Link>
          </div>
          
          <nav className="nav">
            <ul>
              <li>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                  Home
                </Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/goals" className={location.pathname === '/goals' ? 'active' : ''}>
                      My Goals
                    </Link>
                  </li>
                  <li>
                    <span>Welcome, {user.name}</span>
                  </li>
                  <li>
                    <Button onClick={handleLogout} variant="secondary">
                      Logout
                    </Button>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/login">
                    <Button variant="primary">Login</Button>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header   