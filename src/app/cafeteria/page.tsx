"use client"

import { useState } from "react"

import styles from "./page.module.css"

export default function Cafeteria() {
  const [activeTab, setActiveTab] = useState("menu")

  const menuCategories = [
    {
      category: "Breakfast",
      time: "6:00 AM - 10:00 AM",
      items: [
        { name: "Idli Sambar", price: "₹40", description: "Steamed rice cakes with lentil curry" },
        { name: "Dosa", price: "₹50", description: "Crispy rice crepe with coconut chutney" },
        { name: "Upma", price: "₹35", description: "Semolina porridge with vegetables" },
        { name: "Poha", price: "₹30", description: "Flattened rice with onions and spices" },
        { name: "Bread Omelette", price: "₹45", description: "Fluffy omelette with bread slices" },
        { name: "Tea/Coffee", price: "₹15", description: "Fresh brewed tea or coffee" },
      ],
    },
    {
      category: "Lunch",
      time: "12:00 PM - 3:00 PM",
      items: [
        { name: "Veg Thali", price: "₹80", description: "Complete meal with rice, dal, vegetables, roti" },
        { name: "Non-Veg Thali", price: "₹120", description: "Rice, dal, chicken curry, roti, vegetables" },
        { name: "Biryani", price: "₹100", description: "Aromatic rice with chicken/mutton" },
        { name: "Dal Rice", price: "₹60", description: "Simple comfort meal with pickle" },
        { name: "Chapati Sabzi", price: "₹70", description: "Indian bread with vegetable curry" },
        { name: "South Indian Meals", price: "₹90", description: "Traditional South Indian lunch" },
      ],
    },
    {
      category: "Snacks",
      time: "4:00 PM - 7:00 PM",
      items: [
        { name: "Samosa", price: "₹20", description: "Crispy pastry with potato filling" },
        { name: "Vada Pav", price: "₹25", description: "Mumbai street food favorite" },
        { name: "Sandwich", price: "₹40", description: "Grilled vegetable sandwich" },
        { name: "Pakoda", price: "₹30", description: "Deep fried vegetable fritters" },
        { name: "Fruit Juice", price: "₹35", description: "Fresh seasonal fruit juice" },
        { name: "Lassi", price: "₹30", description: "Refreshing yogurt drink" },
      ],
    },
    {
      category: "Dinner",
      time: "7:00 PM - 10:00 PM",
      items: [
        { name: "Dinner Thali", price: "₹85", description: "Complete dinner with rice, roti, dal, vegetables" },
        { name: "Chicken Curry Rice", price: "₹110", description: "Spicy chicken curry with steamed rice" },
        { name: "Paneer Butter Masala", price: "₹95", description: "Creamy paneer curry with naan" },
        { name: "Dal Tadka", price: "₹65", description: "Tempered lentils with rice/roti" },
        { name: "Fried Rice", price: "₹75", description: "Indo-Chinese style fried rice" },
        { name: "Soup", price: "₹40", description: "Hot vegetable or chicken soup" },
      ],
    },
  ]

  const facilities = [
    {
      icon: "🍽️",
      title: "Hygienic Food Preparation",
      description: "All food prepared in clean, sanitized kitchen following health standards",
    },
    {
      icon: "🥗",
      title: "Nutritious Meals",
      description: "Balanced meals designed considering patient dietary requirements",
    },
    {
      icon: "⏰",
      title: "Extended Hours",
      description: "Open from 6:00 AM to 10:00 PM to serve patients and families",
    },
    {
      icon: "💺",
      title: "Comfortable Seating",
      description: "Spacious dining area with comfortable seating for 100+ people",
    },
    {
      icon: "🚫",
      title: "Special Diet Options",
      description: "Diabetic, low-sodium, and other special dietary meals available",
    },
    {
      icon: "💳",
      title: "Multiple Payment Options",
      description: "Cash, card, and digital payment methods accepted",
    },
  ]

  return (
    <div className={styles.page}>
      

      <div className={styles.heroSection}>
        <img
          src="/placeholder.svg?height=400&width=1200&text=Hospital+Cafeteria+%26+Dining"
          alt="Hospital Cafeteria & Dining"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1>Hospital Cafeteria</h1>
            <p>Nutritious meals and refreshments for patients, families, and staff</p>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.introSection}>
          <div className={styles.introContent}>
            <h2>Welcome to Our Cafeteria</h2>
            <p>
              Our hospital cafeteria provides fresh, nutritious, and affordable meals throughout the day. We understand
              that good nutrition is essential for healing and recovery, which is why we offer a variety of healthy meal
              options prepared with the highest standards of hygiene and quality.
            </p>
            <p>
              Whether you're a patient, family member, or hospital staff, our cafeteria is designed to provide a
              comfortable dining experience with a wide range of food choices to suit different tastes and dietary
              requirements.
            </p>
          </div>
          <div className={styles.introImage}>
            <img
              src="/placeholder.svg?height=300&width=400&text=Modern+Cafeteria+Interior"
              alt="Modern Cafeteria Interior"
            />
          </div>
        </section>

        <section className={styles.tabSection}>
          <div className={styles.tabButtons}>
            <button
              className={`${styles.tabButton} ${activeTab === "menu" ? styles.active : ""}`}
              onClick={() => setActiveTab("menu")}
            >
              Menu & Pricing
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === "facilities" ? styles.active : ""}`}
              onClick={() => setActiveTab("facilities")}
            >
              Facilities
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === "hours" ? styles.active : ""}`}
              onClick={() => setActiveTab("hours")}
            >
              Hours & Location
            </button>
          </div>

          <div className={styles.tabContent}>
            {activeTab === "menu" && (
              <div className={styles.menuSection}>
                <h2>Daily Menu</h2>
                <div className={styles.menuGrid}>
                  {menuCategories.map((category, index) => (
                    <div key={index} className={styles.menuCategory}>
                      <div className={styles.categoryHeader}>
                        <h3>{category.category}</h3>
                        <span className={styles.categoryTime}>{category.time}</span>
                      </div>
                      <div className={styles.menuItems}>
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className={styles.menuItem}>
                            <div className={styles.itemInfo}>
                              <h4>{item.name}</h4>
                              <p>{item.description}</p>
                            </div>
                            <span className={styles.itemPrice}>{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "facilities" && (
              <div className={styles.facilitiesSection}>
                <h2>Cafeteria Facilities</h2>
                <div className={styles.facilitiesGrid}>
                  {facilities.map((facility, index) => (
                    <div key={index} className={styles.facilityCard}>
                      <div className={styles.facilityIcon}>{facility.icon}</div>
                      <h3>{facility.title}</h3>
                      <p>{facility.description}</p>
                    </div>
                  ))}
                </div>

                <div className={styles.additionalInfo}>
                  <div className={styles.infoCard}>
                    <h3>🍎 Special Dietary Requirements</h3>
                    <ul>
                      <li>Diabetic-friendly meals with controlled sugar and carbs</li>
                      <li>Low-sodium options for cardiac patients</li>
                      <li>Soft diet for post-surgery patients</li>
                      <li>Vegetarian and vegan meal options</li>
                      <li>Gluten-free alternatives available on request</li>
                    </ul>
                  </div>

                  <div className={styles.infoCard}>
                    <h3>🏥 Patient Meal Service</h3>
                    <ul>
                      <li>Room service available for admitted patients</li>
                      <li>Customized meals as per doctor's recommendations</li>
                      <li>Family meal packages for long-stay patients</li>
                      <li>Emergency meal service 24/7</li>
                      <li>Nutritionist consultation available</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "hours" && (
              <div className={styles.hoursSection}>
                <h2>Operating Hours & Location</h2>
                <div className={styles.hoursGrid}>
                  <div className={styles.hoursCard}>
                    <h3>🕐 Operating Hours</h3>
                    <div className={styles.hoursList}>
                      <div className={styles.hoursItem}>
                        <span>Breakfast:</span>
                        <span>6:00 AM - 10:00 AM</span>
                      </div>
                      <div className={styles.hoursItem}>
                        <span>Lunch:</span>
                        <span>12:00 PM - 3:00 PM</span>
                      </div>
                      <div className={styles.hoursItem}>
                        <span>Snacks:</span>
                        <span>4:00 PM - 7:00 PM</span>
                      </div>
                      <div className={styles.hoursItem}>
                        <span>Dinner:</span>
                        <span>7:00 PM - 10:00 PM</span>
                      </div>
                      <div className={styles.hoursItem}>
                        <span>Emergency Service:</span>
                        <span>24/7 Available</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.locationCard}>
                    <h3>📍 Location & Contact</h3>
                    <div className={styles.locationInfo}>
                      <div className={styles.locationItem}>
                        <strong>Location:</strong>
                        <span>Ground Floor, Main Building</span>
                      </div>
                      <div className={styles.locationItem}>
                        <strong>Seating Capacity:</strong>
                        <span>100+ People</span>
                      </div>
                      <div className={styles.locationItem}>
                        <strong>Contact:</strong>
                        <span>Extension 3456</span>
                      </div>
                      <div className={styles.locationItem}>
                        <strong>Room Service:</strong>
                        <span>Extension 3457</span>
                      </div>
                      <div className={styles.locationItem}>
                        <strong>Manager:</strong>
                        <span>+91-9876543210</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.mapSection}>
                  <h3>Cafeteria Location Map</h3>
                  <img
                    src="/placeholder.svg?height=300&width=600&text=Hospital+Floor+Plan+with+Cafeteria+Location"
                    alt="Cafeteria Location Map"
                    className={styles.mapImage}
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

     
    </div>
  )
}
