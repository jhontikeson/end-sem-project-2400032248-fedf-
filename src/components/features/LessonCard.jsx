// src/components/features/LessonCard.jsx
import React, { useContext } from 'react'
import { ProgressContext } from '../../contexts/ProgressContext'
import Card from '../ui/Card'
import Button from '../ui/Button'
import './LessonCard.css'

const LessonCard = ({ lesson }) => {
  const { progress, markLessonCompleted } = useContext(ProgressContext)
  const isCompleted = progress.completedLessons.includes(lesson.id)

  const handleComplete = () => {
    markLessonCompleted(lesson.id)
  }

  return (
    <Card className="lesson-card">
      <div className="lesson-header">
        <h3>{lesson.title}</h3>
        {isCompleted && <span className="completed-badge">Completed</span>}
      </div>
      <p className="lesson-description">{lesson.description}</p>
      <div className="lesson-content">
        <p>{lesson.content}</p>
      </div>
      <div className="lesson-footer">
        <span className="lesson-duration">Duration: {lesson.duration}</span>
        {!isCompleted && (
          <Button onClick={handleComplete} variant="primary">
            Mark Complete
          </Button>
        )}
      </div>
    </Card>
  )
}

export default LessonCard