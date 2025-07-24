"use client"

import type React from "react"

import { useState } from "react"

import styles from "./page.module.css"

export default function WheelchairSupport() {
  const [requestForm, setRequestForm] = useState({
    name: "",
    phone: "",
    location: "",
    time: "",
    duration: "",
    assistance: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setRequestForm({
      ...requestForm,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Wheelchair request:", requestForm)
    alert("Wheelchair support request submitted successfully!")
  }

  return (
    <div className={styles.page}>
     

      <div className={styles.heroSection}>
        <img
          src="/placeholder.svg?height=400&width=1200&text=Wheelchair+Support+Services"
          alt="Wheelchair Support Services"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1>Wheelchair Support Services</h1>
            <p>Comprehensive mobility assistance for all patients and visitors</p>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.servicesSection}>
          <h2>Our Wheelchair Services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <img
                src="/placeholder.svg?height=200&width=300&text=Standard+Wheelchair"
                alt="Standard Wheelchair"
                className={styles.serviceImage}
              />
              <div className={styles.serviceContent}>
                <h3>Standard Wheelchairs</h3>
                <ul>
                  <li>Manual wheelchairs for short-term use</li>
                  <li>Lightweight and easy to maneuver</li>
                  <li>Available at all hospital entrances</li>
                  <li>Free of charge for patients</li>
                </ul>
                <span className={styles.availability}>Available 24/7</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <img
                src="/placeholder.svg?height=200&width=300&text=Electric+Wheelchair"
                alt="Electric Wheelchair"
                className={styles.serviceImage}
              />
              <div className={styles.serviceContent}>
                <h3>Electric Wheelchairs</h3>
                <ul>
                  <li>Battery-powered for easy mobility</li>
                  <li>Ideal for long-distance movement</li>
                  <li>Trained staff assistance available</li>
                  <li>Advanced booking recommended</li>
                </ul>
                <span className={styles.availability}>By Appointment</span>
              </div>
            </div>

            <div className={styles.serviceCard}>
              <img
                src="/placeholder.svg?height=200&width=300&text=Bariatric+Wheelchair"
                alt="Bariatric Wheelchair"
                className={styles.serviceImage}
              />
              <div className={styles.serviceContent}>
                <h3>Bariatric Wheelchairs</h3>
                <ul>
                  <li>Heavy-duty wheelchairs for larger patients</li>
                  <li>Extra-wide seats for comfort</li>
                  <li>Reinforced frame construction</li>
                  <li>Specialized attendant training</li>
                </ul>
                <span className={styles.availability}>On Request</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.featuresSection}>
          <h2>Additional Support Features</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🚑</div>
              <h3>Emergency Transport</h3>
              <p>Immediate wheelchair assistance for emergency situations and urgent patient transfers.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>👨‍⚕️</div>
              <h3>Trained Attendants</h3>
              <p>Professional staff trained in patient mobility assistance and wheelchair operation.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏥</div>
              <h3>Hospital Navigation</h3>
              <p>Assistance with navigating through different hospital departments and facilities.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔧</div>
              <h3>Maintenance & Safety</h3>
              <p>Regular maintenance checks and safety inspections of all wheelchair equipment.</p>
            </div>
          </div>
        </section>

        <section className={styles.requestSection}>
          <div className={styles.requestContainer}>
            <div className={styles.requestInfo}>
              <h2>Request Wheelchair Support</h2>
              <p>Need wheelchair assistance? Fill out the form and our staff will assist you promptly.</p>

              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <strong>Emergency Wheelchair:</strong>
                  <span>Call Extension 2345</span>
                </div>
                <div className={styles.contactItem}>
                  <strong>Advance Booking:</strong>
                  <span>+91-9876543210</span>
                </div>
                <div className={styles.contactItem}>
                  <strong>Service Hours:</strong>
                  <span>24/7 Available</span>
                </div>
              </div>
            </div>

            <form className={styles.requestForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Patient/Visitor Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={requestForm.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Contact Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={requestForm.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="location">Current Location</label>
                <select
                  id="location"
                  name="location"
                  value={requestForm.location}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Location</option>
                  <option value="main-entrance">Main Entrance</option>
                  <option value="emergency">Emergency Department</option>
                  <option value="opd">OPD Block</option>
                  <option value="icu">ICU Ward</option>
                  <option value="surgery">Surgery Block</option>
                  <option value="parking">Parking Area</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="time">Required Time</label>
                <input
                  type="datetime-local"
                  id="time"
                  name="time"
                  value={requestForm.time}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="duration">Duration Needed</label>
                <select
                  id="duration"
                  name="duration"
                  value={requestForm.duration}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Duration</option>
                  <option value="30min">30 Minutes</option>
                  <option value="1hour">1 Hour</option>
                  <option value="2hours">2 Hours</option>
                  <option value="half-day">Half Day</option>
                  <option value="full-day">Full Day</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="assistance">Special Assistance Required</label>
                <textarea
                  id="assistance"
                  name="assistance"
                  value={requestForm.assistance}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Any special requirements or assistance needed..."
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Request Wheelchair Support
              </button>
            </form>
          </div>
        </section>
      </div>

      
    </div>
  )
}
