import { FileText, Download, Eye, Lock, Calendar, User } from "lucide-react"
import styles from "./page.module.css"

export default function MedicalRecordsPage() {
  const sampleRecords = [
    {
      id: 1,
      type: "Lab Report",
      date: "2024-01-15",
      doctor: "Dr. Rajesh Kumar",
      department: "Cardiology",
      status: "Available",
    },
    {
      id: 2,
      type: "Prescription",
      date: "2024-01-10",
      doctor: "Dr. Priya Sharma",
      department: "Neurology",
      status: "Available",
    },
    {
      id: 3,
      type: "Discharge Summary",
      date: "2024-01-05",
      doctor: "Dr. Amit Patel",
      department: "Orthopedics",
      status: "Available",
    },
  ]

  return (
    <div className={styles.recordsPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>
            <FileText size={40} />
            Medical Records
          </h1>
          <p>Access and manage your medical records securely online</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>How to Access Your Records</h2>
            <div className={styles.accessSteps}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <User size={24} />
                <h3>Patient Registration</h3>
                <p>Register with your patient ID and contact details</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <Lock size={24} />
                <h3>Identity Verification</h3>
                <p>Verify your identity with OTP or security questions</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <Eye size={24} />
                <h3>View Records</h3>
                <p>Access your complete medical history and reports</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Sample Medical Records</h2>
            <div className={styles.recordsTable}>
              <div className={styles.tableHeader}>
                <div>Type</div>
                <div>Date</div>
                <div>Doctor</div>
                <div>Department</div>
                <div>Actions</div>
              </div>
              {sampleRecords.map((record) => (
                <div key={record.id} className={styles.tableRow}>
                  <div className={styles.recordType}>{record.type}</div>
                  <div className={styles.recordDate}>
                    <Calendar size={16} />
                    {new Date(record.date).toLocaleDateString()}
                  </div>
                  <div>{record.doctor}</div>
                  <div>{record.department}</div>
                  <div className={styles.actions}>
                    <button className={styles.viewBtn}>
                      <Eye size={16} />
                      View
                    </button>
                    <button className={styles.downloadBtn}>
                      <Download size={16} />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>Request Medical Records</h2>
            <div className={styles.requestCard}>
              <h3>Need Physical Copies?</h3>
              <p>
                If you need physical copies of your medical records for insurance, legal purposes, or transfer to
                another healthcare provider, please contact our medical records department.
              </p>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <FileText size={20} />
                  <div>
                    <strong>Medical Records Department</strong>
                    <p>Phone: +91-9876543218</p>
                    <p>Email: records@apexhospital.com</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
