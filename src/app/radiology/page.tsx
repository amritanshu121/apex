import { Camera, Scan, Zap, Clock, Shield, Award, Brain, Heart } from "lucide-react"
import styles from "./page.module.css"

export default function RadiologyPage() {
  const services = [
    {
      title: "MRI Scanning",
      description: "High-resolution magnetic resonance imaging for detailed internal body visualization",
      icon: <Brain size={24} />,
      features: ["1.5T & 3T MRI", "Brain & Spine MRI", "Cardiac MRI", "Whole Body MRI"],
      image: "/placeholder.svg?height=200&width=300&text=MRI+Scanner",
    },
    {
      title: "CT Scanning",
      description: "Advanced computed tomography for rapid and accurate diagnosis",
      icon: <Scan size={24} />,
      features: ["64-Slice CT", "CT Angiography", "Cardiac CT", "Emergency CT"],
      image: "/placeholder.svg?height=200&width=300&text=CT+Scanner",
    },
    {
      title: "X-Ray Services",
      description: "Digital radiography for bone, chest, and general diagnostic imaging",
      icon: <Zap size={24} />,
      features: ["Digital X-Ray", "Chest X-Ray", "Bone X-Ray", "Portable X-Ray"],
      image: "/placeholder.svg?height=200&width=300&text=Digital+X-Ray",
    },
    {
      title: "Ultrasound",
      description: "Real-time ultrasound imaging for various medical conditions",
      icon: <Heart size={24} />,
      features: ["4D Ultrasound", "Doppler Studies", "Cardiac Echo", "Pregnancy Scans"],
      image: "/placeholder.svg?height=200&width=300&text=Ultrasound+Machine",
    },
  ]

  const advantages = [
    {
      title: "24/7 Emergency Imaging",
      description: "Round-the-clock radiology services for emergency cases",
      icon: <Clock size={24} />,
    },
    {
      title: "Expert Radiologists",
      description: "Board-certified radiologists with specialized expertise",
      icon: <Award size={24} />,
    },
    {
      title: "Advanced Technology",
      description: "Latest imaging equipment with AI-assisted diagnosis",
      icon: <Camera size={24} />,
    },
    {
      title: "Radiation Safety",
      description: "Strict safety protocols and minimal radiation exposure",
      icon: <Shield size={24} />,
    },
  ]

  return (
    <div className={styles.radiologyPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <img
            src="/placeholder.svg?height=300&width=800&text=Advanced+Radiology+Department"
            alt="Radiology Department"
            className={styles.headerImage}
          />
          <div className={styles.headerContent}>
            <h1>
              <Camera size={40} />
              Radiology & Imaging
            </h1>
            <p>State-of-the-art imaging services with advanced technology and expert radiologists</p>
          </div>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Imaging Services</h2>
            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <div key={index} className={styles.serviceCard}>
                  <div className={styles.serviceImage}>
                    <img src={service.image || "/placeholder.svg"} alt={service.title} />
                    <div className={styles.serviceIcon}>{service.icon}</div>
                  </div>
                  <div className={styles.serviceContent}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className={styles.featuresList}>
                      {service.features.map((feature, idx) => (
                        <span key={idx} className={styles.featureTag}>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>Why Choose Our Radiology</h2>
            <div className={styles.advantagesGrid}>
              {advantages.map((advantage, index) => (
                <div key={index} className={styles.advantageCard}>
                  <div className={styles.advantageIcon}>{advantage.icon}</div>
                  <h3>{advantage.title}</h3>
                  <p>{advantage.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.appointmentSection}>
            <div className={styles.appointmentCard}>
              <h3>Book Your Imaging Appointment</h3>
              <p>Schedule your radiology appointment with our expert team</p>
              <div className={styles.appointmentInfo}>
                <div className={styles.infoItem}>
                  <Clock size={20} />
                  <div>
                    <h4>Appointment Hours</h4>
                    <p>Monday - Saturday: 8:00 AM - 8:00 PM</p>
                    <p>Sunday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <Camera size={20} />
                  <div>
                    <h4>Emergency Imaging</h4>
                    <p>24/7 Available for urgent cases</p>
                    <p>Call: +91-9876543210</p>
                  </div>
                </div>
              </div>
              <button className={styles.appointmentBtn}>Book Appointment</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
