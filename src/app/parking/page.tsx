"use client"

import { useState } from "react"
import styles from "./page.module.css"

export default function Parking() {
  const [selectedZone, setSelectedZone] = useState("general")

  const parkingZones = [
    {
      id: "general",
      name: "General Parking",
      capacity: "200 vehicles",
      rate: "₹20/hour",
      features: ["24/7 Security", "CCTV Surveillance", "Covered Parking", "Easy Access"],
    },
    {
      id: "emergency",
      name: "Emergency Parking",
      capacity: "50 vehicles",
      rate: "Free for 2 hours",
      features: ["Closest to Emergency", "Quick Access", "Reserved Spots", "Valet Service"],
    },
    {
      id: "vip",
      name: "VIP Parking",
      capacity: "30 vehicles",
      rate: "₹50/hour",
      features: ["Premium Location", "Valet Parking", "Car Wash Service", "Reserved Spots"],
    },
    {
      id: "staff",
      name: "Staff Parking",
      capacity: "150 vehicles",
      rate: "Monthly Pass",
      features: ["Staff Only", "Monthly Subscription", "Secure Access", "Bike Parking"],
    },
  ]

  const facilities = [
    {
      icon: "🚗",
      title: "Multi-Level Parking",
      description: "3-level parking structure with capacity for 400+ vehicles",
    },
    {
      icon: "🔒",
      title: "24/7 Security",
      description: "Round-the-clock security with CCTV monitoring and security personnel",
    },
    {
      icon: "🚲",
      title: "Two-Wheeler Parking",
      description: "Dedicated parking area for motorcycles and bicycles",
    },
    {
      icon: "♿",
      title: "Disabled Parking",
      description: "Reserved parking spots close to hospital entrance for disabled visitors",
    },
    {
      icon: "🚿",
      title: "Car Wash Service",
      description: "Professional car cleaning service available while you visit",
    },
    {
      icon: "💳",
      title: "Digital Payment",
      description: "Cashless parking with card, UPI, and mobile wallet options",
    },
  ]

  const rates = [
    { vehicle: "Car", duration: "First 2 hours", rate: "₹20/hour" },
    { vehicle: "Car", duration: "3-6 hours", rate: "₹15/hour" },
    { vehicle: "Car", duration: "Full day (24 hours)", rate: "₹200" },
    { vehicle: "Two-Wheeler", duration: "First 2 hours", rate: "₹10/hour" },
    { vehicle: "Two-Wheeler", duration: "3-6 hours", rate: "₹8/hour" },
    { vehicle: "Two-Wheeler", duration: "Full day (24 hours)", rate: "₹80" },
    { vehicle: "Emergency", duration: "First 2 hours", rate: "Free" },
    { vehicle: "Emergency", duration: "Additional hours", rate: "₹10/hour" },
  ]

  return (
    <div className={styles.page}>
      {/* <Header /> */}

      <div className={styles.heroSection}>
        <img
          src="/placeholder.svg?height=400&width=1200&text=Hospital+Parking+Facilities"
          alt="Hospital Parking Facilities"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1>Parking Facilities</h1>
            <p>Convenient and secure parking for all hospital visitors and staff</p>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.introSection}>
          <div className={styles.introContent}>
            <h2>Comprehensive Parking Solutions</h2>
            <p>
              Apex Hospital provides extensive parking facilities to ensure convenient access for patients, visitors,
              and staff. Our multi-level parking structure offers secure, well-lit, and easily accessible parking spaces
              with modern amenities.
            </p>
            <p>
              With over 400 parking spaces, 24/7 security, and various payment options, we make your hospital visit as
              hassle-free as possible.
            </p>
          </div>
          <div className={styles.introImage}>
            <img
              src="/placeholder.svg?height=300&width=400&text=Modern+Parking+Structure"
              alt="Modern Parking Structure"
            />
          </div>
        </section>

        <section className={styles.zonesSection}>
          <h2>Parking Zones</h2>
          <div className={styles.zoneButtons}>
            {parkingZones.map((zone) => (
              <button
                key={zone.id}
                className={`${styles.zoneButton} ${selectedZone === zone.id ? styles.active : ""}`}
                onClick={() => setSelectedZone(zone.id)}
              >
                {zone.name}
              </button>
            ))}
          </div>

          <div className={styles.zoneDetails}>
            {parkingZones.map(
              (zone) =>
                selectedZone === zone.id && (
                  <div key={zone.id} className={styles.zoneCard}>
                    <div className={styles.zoneInfo}>
                      <h3>{zone.name}</h3>
                      <div className={styles.zoneStats}>
                        <div className={styles.statItem}>
                          <span className={styles.statLabel}>Capacity:</span>
                          <span className={styles.statValue}>{zone.capacity}</span>
                        </div>
                        <div className={styles.statItem}>
                          <span className={styles.statLabel}>Rate:</span>
                          <span className={styles.statValue}>{zone.rate}</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.zoneFeatures}>
                      <h4>Features:</h4>
                      <ul>
                        {zone.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ),
            )}
          </div>
        </section>

        <section className={styles.facilitiesSection}>
          <h2>Parking Facilities</h2>
          <div className={styles.facilitiesGrid}>
            {facilities.map((facility, index) => (
              <div key={index} className={styles.facilityCard}>
                <div className={styles.facilityIcon}>{facility.icon}</div>
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.ratesSection}>
          <h2>Parking Rates</h2>
          <div className={styles.ratesTable}>
            <div className={styles.tableHeader}>
              <div>Vehicle Type</div>
              <div>Duration</div>
              <div>Rate</div>
            </div>
            {rates.map((rate, index) => (
              <div key={index} className={styles.tableRow}>
                <div className={styles.vehicleType}>{rate.vehicle}</div>
                <div className={styles.duration}>{rate.duration}</div>
                <div className={styles.rate}>{rate.rate}</div>
              </div>
            ))}
          </div>

          <div className={styles.rateNotes}>
            <h3>Important Notes:</h3>
            <ul>
              <li>Emergency parking is free for the first 2 hours</li>
              <li>Monthly passes available for regular visitors and staff</li>
              <li>Lost parking ticket will be charged full day rate</li>
              <li>Valet parking available for VIP and emergency patients</li>
              <li>Electric vehicle charging stations available</li>
            </ul>
          </div>
        </section>

        <section className={styles.directionsSection}>
          <div className={styles.directionsContainer}>
            <div className={styles.directionsInfo}>
              <h2>Parking Directions & Access</h2>

              <div className={styles.entranceInfo}>
                <h3>🚪 Parking Entrances</h3>
                <div className={styles.entranceList}>
                  <div className={styles.entranceItem}>
                    <strong>Main Entrance:</strong>
                    <span>From Hospital Road - General & VIP Parking</span>
                  </div>
                  <div className={styles.entranceItem}>
                    <strong>Emergency Entrance:</strong>
                    <span>From Emergency Gate - Emergency Parking Only</span>
                  </div>
                  <div className={styles.entranceItem}>
                    <strong>Staff Entrance:</strong>
                    <span>From Back Gate - Staff Parking Only</span>
                  </div>
                </div>
              </div>

              <div className={styles.accessInfo}>
                <h3>🎫 Access & Payment</h3>
                <div className={styles.accessList}>
                  <div className={styles.accessItem}>
                    <strong>Entry:</strong>
                    <span>Automated ticket system at entrance</span>
                  </div>
                  <div className={styles.accessItem}>
                    <strong>Payment:</strong>
                    <span>Cash, Card, UPI, Mobile Wallets</span>
                  </div>
                  <div className={styles.accessItem}>
                    <strong>Exit:</strong>
                    <span>Pay at exit or pre-pay at kiosks</span>
                  </div>
                  <div className={styles.accessItem}>
                    <strong>Help Desk:</strong>
                    <span>Ground floor - Extension 4567</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.mapSection}>
              <h3>Parking Layout Map</h3>
              <img
                src="/placeholder.svg?height=400&width=500&text=Hospital+Parking+Layout+Map"
                alt="Parking Layout Map"
                className={styles.mapImage}
              />
            </div>
          </div>
        </section>
      </div>

      
    </div>
  )
}
