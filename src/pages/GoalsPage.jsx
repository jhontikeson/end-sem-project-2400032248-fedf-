// src/pages/GoalsPage.jsx
import React, { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { ProgressContext } from '../contexts/ProgressContext'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const GoalsPage = () => {

  // -------------------------------------------
  // CONTEXTS
  // -------------------------------------------
  const { user } = useContext(AuthContext)
  const { progress, addEcoGoal, completeEcoGoal } = useContext(ProgressContext)

  // -------------------------------------------
  // FORM STATE
  // -------------------------------------------
  const [showForm, setShowForm] = useState(false)
  const [error, setError] = useState('')
  const [newGoal, setNewGoal] = useState({
    title: '',
    description: '',
    category: 'energy',
    targetDate: '',
    priority: 'medium',
    difficulty: 'normal'
  })

  // -------------------------------------------
  // HANDLERS
  // -------------------------------------------
  const handleInputChange = (e) => {
    setNewGoal({
      ...newGoal,
      [e.target.name]: e.target.value
    })
  }

  const validateGoal = () => {
    if (!newGoal.title.trim()) return 'Goal title is required.'
    if (newGoal.title.length < 3) return 'Title should be at least 3 characters.'
    if (newGoal.description.length > 300) return 'Description too long (max 300).'
    return ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const err = validateGoal()
    if (err) {
      setError(err)
      return
    }

    addEcoGoal(newGoal)

    // Reset
    setNewGoal({
      title: '',
      description: '',
      category: 'energy',
      targetDate: '',
      priority: 'medium',
      difficulty: 'normal'
    })
    setShowForm(false)
    setError('')
  }

  // -------------------------------------------
  // CATEGORY MAPPING
  // -------------------------------------------
  const categoryData = {
    energy:  { icon: '⚡', name: 'Energy Saving' },
    waste:   { icon: '♻️', name: 'Waste Reduction' },
    water:   { icon: '💧', name: 'Water Conservation' },
    transport: { icon: '🚗', name: 'Eco Transportation' },
    food: { icon: '🍎', name: 'Sustainable Food' },
    lifestyle: { icon: '🌱', name: 'Eco Lifestyle' }
  }

  // -------------------------------------------
  // REDIRECT IF NOT LOGGED IN
  // -------------------------------------------
  if (!user) {
    return (
      <div className="goals-page">
        <div className="container">
          <Card>
            <h2>Access Denied</h2>
            <p>Please log in to view your goals.</p>
          </Card>
        </div>
      </div>
    )
  }

  // -------------------------------------------
  // FILTER GOALS
  // -------------------------------------------
  const activeGoals = progress.ecoGoals.filter(goal => !goal.completed)
  const completedGoals = progress.ecoGoals.filter(goal => goal.completed)

  // -------------------------------------------
  // UI
  // -------------------------------------------
  return (
    <div className="goals-page">
      <div className="container">

        {/* HEADER */}
        <div className="goals-header">
          <h1>My Eco Goals</h1>
          <p>Track your sustainability progress and set real measurable targets.</p>

          <Button variant="primary" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Cancel' : '+ Add New Goal'}
          </Button>
        </div>

        {/* ADD GOAL FORM */}
        {showForm && (
          <Card className="goal-form-card mb-3">
            <h3>Create New Eco Goal</h3>

            {error && <p style={{ color:'red', marginBottom:'10px' }}>{error}</p>}

            <form onSubmit={handleSubmit}>

              {/* ROW 1 */}
              <div className="form-row">
                <div className="form-group">
                  <label>Goal Title *</label>
                  <input 
                    type="text"
                    name="title"
                    value={newGoal.title}
                    onChange={handleInputChange}
                    placeholder="Ex: Reduce home energy use"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Category</label>
                  <select name="category" value={newGoal.category} onChange={handleInputChange}>
                    {Object.entries(categoryData).map(([key, c]) => (
                      <option key={key} value={key}>{c.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* DESCRIPTION */}
              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  rows="3"
                  value={newGoal.description}
                  onChange={handleInputChange}
                  placeholder="Explain what you want to achieve..."
                />
              </div>

              {/* DATE + PRIORITY */}
              <div className="form-row">
                <div className="form-group">
                  <label>Target Date</label>
                  <input 
                    type="date"
                    name="targetDate"
                    value={newGoal.targetDate}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Priority Level</label>
                  <select 
                    name="priority"
                    value={newGoal.priority}
                    onChange={handleInputChange}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Difficulty</label>
                  <select 
                    name="difficulty"
                    value={newGoal.difficulty}
                    onChange={handleInputChange}
                  >
                    <option value="easy">Easy</option>
                    <option value="normal">Normal</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
              </div>

              <Button type="submit" variant="primary">
                Create Goal
              </Button>
            </form>
          </Card>
        )}

        {/* ACTIVE GOALS */}
        <div className="goals-section">
          <h2>Active Goals ({activeGoals.length})</h2>

          {activeGoals.length === 0 ? (
            <Card className="empty-state">
              <p>No active goals. Start by adding your first eco goal!</p>
            </Card>
          ) : (
            <div className="goals-grid">
              {activeGoals.map(goal => {
                const cat = categoryData[goal.category]

                return (
                  <Card key={goal.id} className="goal-card">
                    <div className="goal-header">
                      <div className="goal-category">
                        <span className="category-icon">{cat.icon}</span>
                        <span className="category-name">{cat.name}</span>
                      </div>

                      <Button 
                        variant="primary"
                        size="small"
                        onClick={() => completeEcoGoal(goal.id)}
                      >
                        Complete
                      </Button>
                    </div>

                    <h3>{goal.title}</h3>
                    {goal.description && <p>{goal.description}</p>}

                    <div className="goal-meta">
                      {goal.priority && <p><b>Priority:</b> {goal.priority}</p>}
                      {goal.difficulty && <p><b>Difficulty:</b> {goal.difficulty}</p>}
                      {goal.targetDate && (
                        <p><b>Target:</b> {new Date(goal.targetDate).toLocaleDateString()}</p>
                      )}
                    </div>
                  </Card>
                )
              })}
            </div>
          )}
        </div>

        {/* COMPLETED GOALS */}
        {completedGoals.length > 0 && (
          <div className="goals-section">
            <h2>Completed Goals ({completedGoals.length})</h2>

            <div className="goals-grid">
              {completedGoals.map(goal => {
                const cat = categoryData[goal.category]

                return (
                  <Card key={goal.id} className="goal-card completed">
                    <div className="goal-header">
                      <div className="goal-category">
                        <span className="category-icon">{cat.icon}</span>
                        <span className="category-name">{cat.name}</span>
                      </div>
                      <span className="completed-badge">Completed</span>
                    </div>

                    <h3>{goal.title}</h3>
                    {goal.description && <p>{goal.description}</p>}
                  </Card>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default GoalsPage
