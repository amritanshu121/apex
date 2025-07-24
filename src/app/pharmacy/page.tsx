import { Pill, Clock, Truck, Phone, CheckCircle, AlertCircle, Heart, Shield } from "lucide-react"
import styles from "./page.module.css"

export default function PharmacyPage() {
  const services = [
    {
      title: "24/7 Availability",
      description: "Round-the-clock pharmacy services for emergency medications",
      icon: <Clock size={24} />,
    },
    {
      title: "Home Delivery",
      description: "Free home delivery for medications within city limits",
      icon: <Truck size={24} />,
    },
    {
      title: "Medication Counseling",
      description: "Expert pharmacist consultation for proper medication usage",
      icon: <Heart size={24} />,
    },
    {
      title: "Insurance Claims",
      description: "Direct insurance billing and claim processing",
      icon: <Shield size={24} />,
    },
  ]

  const medications = [
    { category: "Emergency Medicines", availability: "Always Available", status: "available" },
    { category: "Prescription Drugs", availability: "Doctor's Prescription Required", status: "available" },
    { category: "Over-the-Counter", availability: "Readily Available", status: "available" },
    { category: "Surgical Supplies", availability: "On Demand", status: "available" },
    { category: "Medical Equipment", availability: "Rental & Purchase", status: "available" },
  ]

  return (
    <div className={styles.pharmacyPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <img
            src="/placeholder.svg?height=300&width=800&text=Modern+Hospital+Pharmacy"
            alt="Hospital Pharmacy"
            className={styles.headerImage}
          />
          <div className={styles.headerContent}>
            <h1>
              <Pill size={40} />
              Hospital Pharmacy
            </h1>
            <p>24/7 pharmaceutical services with expert medication management and home delivery</p>
          </div>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Our Services</h2>
            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <div key={index} className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>Medication Categories</h2>
            <div className={styles.medicationsGrid}>
              {medications.map((med, index) => (
                <div key={index} className={styles.medicationCard}>
                  <div className={styles.statusIcon}>
                    {med.status === "available" ? (
                      <CheckCircle size={20} className={styles.available} />
                    ) : (
                      <AlertCircle size={20} className={styles.unavailable} />
                    )}
                  </div>
                  <h3>{med.category}</h3>
                  <p>{med.availability}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.contactSection}>
            <div className={styles.contactCard}>
              <Phone size={32} />
              <h3>Pharmacy Contact</h3>
              <p>For medication queries and home delivery</p>
              <div className={styles.contactInfo}>
                <p>
                  <strong>Phone:</strong> +91-9876543210
                </p>
                <p>
                  <strong>Hours:</strong> 24/7 Available
                </p>
                <p>
                  <strong>Delivery:</strong> Free within 10km
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
