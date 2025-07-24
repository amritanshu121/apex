"use client"


import styles from "./page.module.css"

export default function PrayerRoom() {
  const prayerTimes = [
    { prayer: "Fajr", time: "05:30 AM" },
    { prayer: "Dhuhr", time: "12:30 PM" },
    { prayer: "Asr", time: "04:00 PM" },
    { prayer: "Maghrib", time: "06:45 PM" },
    { prayer: "Isha", time: "08:15 PM" },
  ]

  const facilities = [
    {
      icon: "🕌",
      title: "Multi-Faith Space",
      description: "Dedicated areas for different religious practices and meditation",
    },
    {
      icon: "🧘",
      title: "Quiet Environment",
      description: "Peaceful and serene atmosphere for prayer and reflection",
    },
    {
      icon: "🚿",
      title: "Ablution Facilities",
      description: "Clean washing facilities for ritual purification",
    },
    {
      icon: "📚",
      title: "Religious Books",
      description: "Collection of holy books and prayer materials available",
    },
    {
      icon: "🕐",
      title: "24/7 Access",
      description: "Prayer room accessible round the clock for patients and families",
    },
    {
      icon: "♿",
      title: "Wheelchair Accessible",
      description: "Fully accessible for patients with mobility challenges",
    },
  ]

  return (
    <div className={styles.page}>
     

      <div className={styles.heroSection}>
        <img
          src="/placeholder.svg?height=400&width=1200&text=Prayer+Room+%26+Spiritual+Care"
          alt="Prayer Room & Spiritual Care"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1>Prayer Room & Spiritual Care</h1>
            <p>A peaceful sanctuary for prayer, meditation, and spiritual healing</p>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.introSection}>
          <div className={styles.introContent}>
            <h2>Welcome to Our Prayer Room</h2>
            <p>
              At Apex Hospital, we understand that healing encompasses not just the physical body, but also the mind and
              spirit. Our prayer room provides a tranquil space where patients, families, and staff can find solace,
              practice their faith, and seek spiritual comfort during challenging times.
            </p>
            <p>
              The prayer room is designed to accommodate people of all faiths and beliefs, offering a respectful and
              inclusive environment for personal reflection, meditation, and prayer.
            </p>
          </div>
          <div className={styles.introImage}>
            <img src="/placeholder.svg?height=300&width=400&text=Peaceful+Prayer+Space" alt="Peaceful Prayer Space" />
          </div>
        </section>

        <section className={styles.facilitiesSection}>
          <h2>Prayer Room Facilities</h2>
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

        <section className={styles.prayerTimesSection}>
          <div className={styles.prayerTimesContainer}>
            <div className={styles.prayerTimesInfo}>
              <h2>Daily Prayer Times</h2>
              <p>
                For our Muslim patients and visitors, we provide daily prayer time information. The prayer room is
                oriented towards Mecca and includes prayer mats and other necessary items for Islamic prayers.
              </p>
              <div className={styles.prayerTimesList}>
                {prayerTimes.map((prayer, index) => (
                  <div key={index} className={styles.prayerTimeItem}>
                    <span className={styles.prayerName}>{prayer.prayer}</span>
                    <span className={styles.prayerTime}>{prayer.time}</span>
                  </div>
                ))}
              </div>
              <p className={styles.note}>
                <strong>Note:</strong> Prayer times are approximate and may vary slightly. Please check with the
                information desk for exact timings.
              </p>
            </div>
            <div className={styles.prayerTimesImage}>
              <img src="/placeholder.svg?height=350&width=300&text=Prayer+Times+Display" alt="Prayer Times Display" />
            </div>
          </div>
        </section>

        <section className={styles.guidelinesSection}>
          <h2>Prayer Room Guidelines</h2>
          <div className={styles.guidelinesGrid}>
            <div className={styles.guidelineCard}>
              <h3>🤫 Maintain Silence</h3>
              <p>Please keep noise to a minimum to respect others who are praying or meditating.</p>
            </div>
            <div className={styles.guidelineCard}>
              <h3>👟 Remove Footwear</h3>
              <p>Shoe racks are provided at the entrance. Please remove shoes before entering.</p>
            </div>
            <div className={styles.guidelineCard}>
              <h3>📱 Switch Off Devices</h3>
              <p>Mobile phones and electronic devices should be turned off or set to silent mode.</p>
            </div>
            <div className={styles.guidelineCard}>
              <h3>🧼 Cleanliness</h3>
              <p>Please help maintain the cleanliness and sanctity of the prayer space.</p>
            </div>
            <div className={styles.guidelineCard}>
              <h3>⏰ Time Consideration</h3>
              <p>Be mindful of others waiting to use the space, especially during peak hours.</p>
            </div>
            <div className={styles.guidelineCard}>
              <h3>🤝 Respect All Faiths</h3>
              <p>The space is shared by people of all religions. Please be respectful and inclusive.</p>
            </div>
          </div>
        </section>

        <section className={styles.locationSection}>
          <div className={styles.locationContainer}>
            <div className={styles.locationInfo}>
              <h2>Location & Access</h2>
              <div className={styles.locationDetails}>
                <div className={styles.locationItem}>
                  <strong>Location:</strong>
                  <span>Ground Floor, Near Main Reception</span>
                </div>
                <div className={styles.locationItem}>
                  <strong>Access Hours:</strong>
                  <span>24/7 Available</span>
                </div>
                <div className={styles.locationItem}>
                  <strong>Capacity:</strong>
                  <span>Up to 20 people</span>
                </div>
                <div className={styles.locationItem}>
                  <strong>Accessibility:</strong>
                  <span>Wheelchair accessible</span>
                </div>
                <div className={styles.locationItem}>
                  <strong>Contact:</strong>
                  <span>Reception Desk - Extension 1234</span>
                </div>
              </div>

              <div className={styles.spiritualCare}>
                <h3>Spiritual Care Services</h3>
                <p>
                  Our hospital also provides spiritual care services through trained chaplains and religious
                  coordinators who can offer comfort, guidance, and support to patients and families of all faiths.
                </p>
                <button className={styles.contactButton}>Request Spiritual Care Support</button>
              </div>
            </div>
            <div className={styles.locationImage}>
              <img
                src="/placeholder.svg?height=400&width=350&text=Prayer+Room+Location+Map"
                alt="Prayer Room Location"
              />
            </div>
          </div>
        </section>
      </div>

     
    </div>
  )
}
