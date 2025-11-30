// src/components/layout/Footer.jsx
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sustainable Living Education</h3>
            <p>Protecting our environment for future generations.</p>
          </div>
          <div className="footer-section">
            <h4>Team Members</h4>
            <ul>
              <li>P. Tanush Gopi</li>
              <li>Grandhi Sivaram</li>
              <li>T - jashwanth sai</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Core Objectives</h4>
            <ul>
              <li>Increase Environmental Awareness</li>
              <li>Promote Responsible Resource Use</li>
              <li>Develop Practical Skills</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sustainable Living Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer