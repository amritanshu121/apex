import { Bed, Wifi, Car, Coffee, Shield, Clock, Phone, MapPin } from "lucide-react"
import styles from "./page.module.css"

export default function DormitoryPage() {
  const facilities = [
    {
      title: "Comfortable Rooms",
      description: "Clean and comfortable accommodation with essential amenities",
      icon: <Bed size={24} />,
      features: ["Single & Double Beds", "Clean Bedding", "Storage Space", "Reading Light"],
    },
    {
      title: "Free WiFi",
      description: "Complimentary high-speed internet access throughout the facility",
      icon: <Wifi size={24} />,
      features: ["24/7 Internet", "High Speed", "Multiple Devices", "Secure Connection"],
    },
    {
      title: "Parking Available",
      description: "Secure parking space for attendants' vehicles",
      icon: <Car size={24} />,
      features: ["Covered Parking", "Security Guard", "24/7 Access", "CCTV Monitoring"],
    },
    {
      title: "Cafeteria Access",
      description: "Access to hospital cafeteria with healthy meal options",
      icon: <Coffee size={24} />,
      features: ["Healthy Meals", "24/7 Availability", "Affordable Rates", "Special Diets"],
    },
  ]

  const roomTypes = [
    {
      type: "Standard Room",
      capacity: "1-2 People",
      price: "₹500/night",
      amenities: ["Single Bed", "Shared Bathroom", "Basic Amenities", "WiFi"],
      image: "/placeholder.svg?height=200&width=300&text=Standard+Dormitory+Room",
    },
    {
      type: "Deluxe Room",
      capacity: "2-3 People",
      price: "₹800/night",
      amenities: ["Double Bed", "Attached Bathroom", "AC/Heating", "TV", "WiFi"],
      image: "/placeholder.svg?height=200&width=300&text=Deluxe+Dormitory+Room",
    },
    {
      type: "Family Suite",
      capacity: "4-5 People",
      price: "₹1200/night",
      amenities: ["Multiple Beds", "Private Bathroom", "Kitchenette", "Living Area", "WiFi"],
      image: "/placeholder.svg?height=200&width=300&text=Family+Suite+Room",
    },
  ]

  return (
    <div className={styles.dormitoryPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <img
            src="/placeholder.svg?height=300&width=800&text=Hospital+Dormitory+Accommodation"
            alt="Hospital Dormitory"
            className={styles.headerImage}
          />
          <div className={styles.headerContent}>
            <h1>
              <Bed size={40} />
              Patient Attendant Dormitory
            </h1>
            <p>Comfortable and affordable accommodation for patient attendants and families</p>
          </div>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Facilities & Amenities</h2>
            <div className={styles.facilitiesGrid}>
              {facilities.map((facility, index) => (
                <div key={index} className={styles.facilityCard}>
                  <div className={styles.facilityIcon}>{facility.icon}</div>
                  <h3>{facility.title}</h3>
                  <p>{facility.description}</p>
                  <div className={styles.featuresList}>
                    {facility.features.map((feature, idx) => (
                      <span key={idx} className={styles.featureTag}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>Room Types & Pricing</h2>
            <div className={styles.roomsGrid}>
              {roomTypes.map((room, index) => (
                <div key={index} className={styles.roomCard}>
                  <div className={styles.roomImage}>
                    <img src={room.image || "/placeholder.svg"} alt={room.type} />
                    <div className={styles.priceTag}>{room.price}</div>
                  </div>
                  <div className={styles.roomContent}>
                    <h3>{room.type}</h3>
                    <p className={styles.capacity}>
                      <Bed size={16} />
                      {room.capacity}
                    </p>
                    <div className={styles.amenitiesList}>
                      {room.amenities.map((amenity, idx) => (
                        <span key={idx} className={styles.amenityTag}>
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.bookingSection}>
            <div className={styles.bookingCard}>
              <h3>Booking Information</h3>
              <div className={styles.bookingInfo}>
                <div className={styles.infoItem}>
                  <Clock size={20} />
                  <div>
                    <h4>Check-in/Check-out</h4>
                    <p>Check-in: 12:00 PM</p>
                    <p>Check-out: 11:00 AM</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <Shield size={20} />
                  <div>
                    <h4>Security & Safety</h4>
                    <p>24/7 Security Guard</p>
                    <p>CCTV Surveillance</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <Phone size={20} />
                  <div>
                    <h4>Reservations</h4>
                    <p>Phone: +91-9876543210</p>
                    <p>Email: dormitory@apexhospital.com</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <MapPin size={20} />
                  <div>
                    <h4>Location</h4>
                    <p>Adjacent to main hospital</p>
                    <p>Easy access to patient wards</p>
                  </div>
                </div>
              </div>
              <button className={styles.bookingBtn}>Book Now</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
