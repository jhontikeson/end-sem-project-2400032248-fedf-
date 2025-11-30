// src/pages/HomePage.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import './HomePage.css'

const HomePage = () => {
  const ecoPractices = [
    {
      title: "Save Energy",
      description: "Adopt energy-efficient habits by reducing consumption, switching to LED lights, and improving home insulation.",
      icon: "⚡"
    },
    {
      title: "Reduce Waste",
      description: "Learn proper recycling, composting, and smart purchasing to reduce landfill contribution.",
      icon: "♻️"
    },
    {
      title: "Conserve Water",
      description: "Implement water-saving methods such as rainwater harvesting and mindful daily usage.",
      icon: "💧"
    },
    {
      title: "Use Sustainable Transport",
      description: "Choose cycling, carpooling, electric vehicles, or public transportation to cut carbon emissions.",
      icon: "🚴‍♂️"
    },
    {
      title: "Protect Biodiversity",
      description: "Help restore ecosystems through planting, reducing pollution, and supporting wildlife.",
      icon: "🌱"
    }
  ];

  const platformFeatures = [
    {
      title: "Interactive Lessons",
      description: "Gamified and easy-to-understand lessons focused on environmental science and sustainability."
    },
    {
      title: "Real-World Projects",
      description: "Step-by-step guides for community, school, and home eco-projects that create real impact."
    },
    {
      title: "Progress Tracking",
      description: "Monitor your carbon footprint, habits, and achievements with our smart dashboard."
    },
    {
      title: "Community Challenges",
      description: "Join global and local challenges to make sustainability fun and competitive."
    },
    {
      title: "Certifications",
      description: "Earn badges, certificates, and recognition for completing sustainability modules."
    }
  ]

  return (
    <div className="home-page">
      
      {/* ========== HERO SECTION ========== */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Learn Sustainable Living for a Better Future</h1>
            <p className="hero-subtitle">
              Together, we can build a cleaner, greener, and healthier planet.
            </p>

            <p className="hero-description">
              Our platform helps students, individuals, and communities adopt eco-friendly habits 
              through learning modules, hands-on projects, and real-world environmental insights.
            </p>

            <div className="hero-actions">
              <Link to="/login">
                <Button variant="primary">Start Learning</Button>
              </Link>

              <Link to="/dashboard">
                <Button variant="secondary">View Demo Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ========== ECO PRACTICES ========== */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Daily Eco-Friendly Practices</h2>

          <p className="section-description">
            Small changes in your daily routine can create a massive positive impact on the environment.
            Explore simple habits that reduce pollution, conserve resources, and protect our planet.
          </p>

          <div className="grid grid-3">
            {ecoPractices.map((practice, index) => (
              <Card key={index} className="practice-card">
                <div className="practice-icon">{practice.icon}</div>
                <h3>{practice.title}</h3>
                <p>{practice.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* ========== PLATFORM FEATURES ========== */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Why Choose Our Platform?</h2>

          <p className="section-description">
            Designed for students, teachers, environmental clubs, and everyday learners.  
            Our features help turn eco-knowledge into real measurable action.
          </p>

          <div className="grid grid-3">
            {platformFeatures.map((feature, index) => (
              <Card key={index} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* ========== CORE OBJECTIVES ========== */}
      <section className="section">
        <div className="container">
          <div className="core-objectives">
            <h2 className="section-title">Our Core Objectives</h2>

            <p className="section-description">
              We aim to inspire responsible habits, environmental awareness, and practical 
              eco-skills through knowledge, community, and action-oriented learning.
            </p>

            <div className="objectives-grid">
              
              <div className="objective">
                <div className="objective-number">01</div>
                <h3>Raise Eco-Awareness</h3>
                <p>
                  Understand climate change, pollution, energy use, and how daily habits affect the Earth.
                </p>
              </div>

              <div className="objective">
                <div className="objective-number">02</div>
                <h3>Promote Responsible Living</h3>
                <p>
                  Learn sustainable routines that conserve water, energy, and biodiversity.
                </p>
              </div>

              <div className="objective">
                <div className="objective-number">03</div>
                <h3>Build Practical Skills</h3>
                <p>
                  Gain hands-on experience through composting, recycling, planting, renewable energy, and community action.
                </p>
              </div>

              <div className="objective">
                <div className="objective-number">04</div>
                <h3>Create Real Impact</h3>
                <p>
                  Turn knowledge into results by participating in global challenges and measurable eco-goals.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
