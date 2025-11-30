// src/App.jsx
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthContext } from './contexts/AuthContext'
import { ProgressContext } from './contexts/ProgressContext'
import { ThemeContext } from './contexts/ThemeContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'   // <-- ADDED
import DashboardPage from './pages/DashboardPage'
import GoalsPage from './pages/GoalsPage'
import { useLocalStorage } from './hooks/useLocalStorage'
import './App.css'

function App() {
  const [user, setUser] = useLocalStorage('sustainable-user', null)
  const [progress, setProgress] = useLocalStorage('sustainable-progress', {
    completedLessons: [],
    ecoGoals: [],
    carbonFootprint: 0
  })
  const [theme, setTheme] = useLocalStorage('sustainable-theme', 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const login = (userData) => {
    setUser(userData)
  }

  const logout = () => {
    setUser(null)
  }

  const updateProgress = (newProgress) => {
    setProgress(newProgress)
  }

  const markLessonCompleted = (lessonId) => {
    if (!progress.completedLessons.includes(lessonId)) {
      const updatedProgress = {
        ...progress,
        completedLessons: [...progress.completedLessons, lessonId]
      }
      setProgress(updatedProgress)
    }
  }

  const addEcoGoal = (goal) => {
    const newGoal = {
      id: Date.now(),
      ...goal,
      createdAt: new Date().toISOString(),
      completed: false
    }
    const updatedProgress = {
      ...progress,
      ecoGoals: [...progress.ecoGoals, newGoal]
    }
    setProgress(updatedProgress)
  }

  const completeEcoGoal = (goalId) => {
    const updatedProgress = {
      ...progress,
      ecoGoals: progress.ecoGoals.map(goal => 
        goal.id === goalId ? { ...goal, completed: true } : goal
      )
    }
    setProgress(updatedProgress)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AuthContext.Provider value={{ user, login, logout }}>
        <ProgressContext.Provider value={{ 
          progress, 
          updateProgress, 
          markLessonCompleted, 
          addEcoGoal, 
          completeEcoGoal 
        }}>
          <Router>
            <div className="app">
              <Header />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignupPage />} />   {/* <-- ADDED */}
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/goals" element={<GoalsPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </ProgressContext.Provider>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
