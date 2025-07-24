"use client"
import { useState } from "react"
import type React from "react"

import { HelpCircle, Send, User, Mail, MessageSquare, Stethoscope } from "lucide-react"
import styles from "./page.module.css"

export default function AskDoctorPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    specialty: "",
    question: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const specialties = [
    "General Medicine",
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Gynecology",
    "Dermatology",
    "ENT",
    "Ophthalmology",
    "Psychiatry",
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    // Simulate API call
    setTimeout(() => {
      setMessage("Your question has been submitted successfully! Our medical experts will respond within 24 hours.")
      setFormData({
        name: "",
        email: "",
        age: "",
        gender: "",
        specialty: "",
        question: "",
      })
      setIsSubmitting(false)
    }, 2000)
  }

  const faqItems = [
    {
      question: "How quickly will I receive a response?",
      answer: "Our medical experts typically respond within 24 hours during business days.",
    },
    {
      question: "Is this service free?",
      answer: "Yes, asking questions to our doctors through this platform is completely free.",
    },
    {
      question: "Can I ask about my specific medical condition?",
      answer:
        "You can ask general questions, but for specific medical conditions, we recommend scheduling a consultation.",
    },
    {
      question: "Are the responses confidential?",
      answer: "Yes, all communications are kept strictly confidential and secure.",
    },
  ]

  return (
    <div className={styles.askDoctorPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>
            <HelpCircle size={40} />
            Ask Your Doctor
          </h1>
          <p>Get expert medical advice from our qualified doctors</p>
        </div>

        <div className={styles.content}>
          <div className={styles.mainContent}>
            <section className={styles.section}>
              <div className={styles.infoCard}>
                <Stethoscope size={32} />
                <div>
                  <h2>Expert Medical Guidance</h2>
                  <p>
                    Have a health question? Our experienced doctors are here to help. Submit your question and receive
                    professional medical advice from our qualified healthcare professionals.
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Submit Your Question</h2>
              <div className={styles.formCard}>
                <form onSubmit={handleSubmit}>
                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">
                        <User size={20} />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email">
                        <Mail size={20} />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="age">Age *</label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                        min="1"
                        max="120"
                        placeholder="Enter your age"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="gender">Gender *</label>
                      <select id="gender" name="gender" value={formData.gender} onChange={handleInputChange} required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="specialty">Medical Specialty</label>
                      <select id="specialty" name="specialty" value={formData.specialty} onChange={handleInputChange}>
                        <option value="">Select Specialty (Optional)</option>
                        {specialties.map((specialty) => (
                          <option key={specialty} value={specialty}>
                            {specialty}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="question">
                      <MessageSquare size={20} />
                      Your Question *
                    </label>
                    <textarea
                      id="question"
                      name="question"
                      value={formData.question}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Please describe your health question or concern in detail..."
                    />
                  </div>

                  <button type="submit" className="btn-primary" disabled={isSubmitting}>
                    <Send size={16} />
                    {isSubmitting ? "Submitting..." : "Submit Question"}
                  </button>

                  {message && <div className={`${styles.message} ${styles.success}`}>{message}</div>}
                </form>
              </div>
            </section>
          </div>

          <div className={styles.sidebar}>
            <section className={styles.section}>
              <h3>Important Notice</h3>
              <div className={styles.noticeCard}>
                <p>
                  <strong>This service is for general health information only.</strong>
                </p>
                <ul>
                  <li>Not a substitute for professional medical consultation</li>
                  <li>For emergencies, call +91-9876543211</li>
                  <li>For urgent concerns, schedule an appointment</li>
                  <li>Responses are for educational purposes</li>
                </ul>
              </div>
            </section>

            <section className={styles.section}>
              <h3>Frequently Asked Questions</h3>
              <div className={styles.faqList}>
                {faqItems.map((faq, index) => (
                  <div key={index} className={styles.faqItem}>
                    <h4>{faq.question}</h4>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
