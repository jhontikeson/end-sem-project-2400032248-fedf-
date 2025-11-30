// src/pages/DashboardPage.jsx
import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { ProgressContext } from '../contexts/ProgressContext'
import LessonCard from '../components/features/LessonCard'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const DashboardPage = () => {
  const { user } = useContext(AuthContext)
  const { progress } = useContext(ProgressContext)
  const [lessons, setLessons] = useState([])
  const [tips, setTips] = useState([])
  const [loading, setLoading] = useState(true)

  /* ------------------------------
     Fetch Lessons (Mock API)
  ------------------------------ */
  useEffect(() => {
    const fetchLessons = async () => {
      await new Promise(resolve => setTimeout(resolve, 800))

      setLessons([
        {
          id: 1,
          title: "Introduction to Sustainable Living",
          description: "Understand the fundamentals of living sustainably.",
          content: "Sustainable living reduces our environmental impact through conscious choices.",
          duration: "15 min"
        },
        {
          id: 2,
          title: "Energy Conservation Techniques",
          description: "Learn practical ways to reduce electricity usage.",
          content: "Understand home appliances, energy rating labels, and energy-saving habits.",
          duration: "20 min"
        },
        {
          id: 3,
          title: "Waste Reduction Strategies",
          description: "Reduce, reuse, recycle – and how to do each properly.",
          content: "Includes composting, plastic alternatives, and smart disposal.",
          duration: "25 min"
        },
        {
          id: 4,
          title: "Water Conservation Methods",
          description: "Efficient water usage for daily life.",
          content: "Covers smart taps, rainwater harvesting, and habit changes.",
          duration: "18 min"
        }
      ])

      // Extra: Daily eco tips for realism
      setTips([
        "Turn off unnecessary switches – saves up to ₹300–₹500/month.",
        "Use reusable bottles instead of plastic – reduces landfill waste.",
        "Walk or cycle for trips under 2km – lowers CO₂ footprint.",
        "Take 5-minute showers – saves up to 50 liters of water.",
        "Carry a cloth bag – avoids 100–200 plastic bags per year."
      ])

      setLoading(false)
    }

    fetchLessons()
  }, [])

  /* ------------------------------
     If No User Logged In
  ------------------------------ */
  if (!user) {
    return (
      <div className="dashboard-page">
        <div className="container">
          <Card>
            <h2>Access Denied</h2>
            <p>Please log in to access the dashboard.</p>
          </Card>
        </div>
      </div>
    )
  }

  /* ------------------------------
     Progress Calculations
  ------------------------------ */
  const completed = progress.completedLessons.length
  const totalLessons = lessons.length
  const progressPercent = totalLessons ? Math.round((completed / totalLessons) * 100) : 0

  return (
    <div className="dashboard-page">
      <div className="container">

        {/* ------------------------------
            HEADER
        ------------------------------ */}
        <div className="dashboard-header">
          <h1>Welcome, {user.name} 👋</h1>
          <p>
            Role: <span className="role-badge">{user.role}</span>
          </p>
        </div>

        {/* ------------------------------
            ADMIN PANEL
        ------------------------------ */}
        {user.role === "admin" && (
          <Card className="admin-panel mb-3">
            <h2>Admin Dashboard</h2>
            <p>Manage educational content, user activity, and platform analytics.</p>

            <div className="admin-actions">
              <Button variant="primary">Add New Lesson</Button>
              <Button variant="primary">View User Stats</Button>
              <Button variant="primary">Content Moderation</Button>
              <Button variant="primary">Eco Goal Reports</Button>
            </div>
          </Card>
        )}

        {/* ------------------------------
            KEY STATS
        ------------------------------ */}
        <div className="dashboard-stats">

          {/* Progress Card */}
          <Card className="stat-card">
            <h3>Learning Progress</h3>
            <div className="progress-circle">
              <svg width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="var(--border-color)" strokeWidth="8" fill="none" />
                <circle
                  cx="50" cy="50" r="45"
                  stroke="var(--accent-color)"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="283"
                  strokeDashoffset={283 - (283 * progressPercent) / 100}
                  transform="rotate(-90 50 50)"
                />
                <text x="50" y="50" dy="7" textAnchor="middle" fontSize="20" fill="var(--text-primary)">
                  {progressPercent}%
                </text>
              </svg>
            </div>
            <p>{completed} of {totalLessons} lessons completed</p>
          </Card>

          {/* Eco Goals */}
          <Card className="stat-card">
            <h3>Eco Goals</h3>
            <div className="goal-count">{progress.ecoGoals.length}</div>
            <p>Active sustainability goals</p>
          </Card>

          {/* Carbon Footprint */}
          <Card className="stat-card">
            <h3>Carbon Footprint</h3>
            <div className="carbon-value">{progress.carbonFootprint} kg CO₂</div>
            <p>Estimated monthly footprint</p>
          </Card>
        </div>

        {/* ------------------------------
            DAILY ECO TIPS
        ------------------------------ */}
        <Card className="tips-card">
          <h2>🌱 Daily Eco Tips</h2>
          <ul>
            {tips.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </Card>

        {/* ------------------------------
            AVAILABLE LESSONS
        ------------------------------ */}
        <section className="lessons-section">
          <h2>Available Lessons</h2>

          {loading ? (
            <div className="loading">Loading lessons...</div>
          ) : (
            <div className="grid grid-2">
              {lessons.map(lesson => (
                <LessonCard key={lesson.id} lesson={lesson} />
              ))}
            </div>
          )}
        </section>

      </div>
    </div>
  )
}

export default DashboardPage
