"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ExternalLink, Download } from "lucide-react"
import styles from "./page.module.css"

const pressReleases = [
  {
    id: 1,
    title: "Apex Hospital Launches New Cardiac Care Unit",
    date: "2024-01-20",
    excerpt: "State-of-the-art cardiac care facility with advanced catheterization lab now operational.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "Free Health Camp for Senior Citizens",
    date: "2024-01-15",
    excerpt: "Comprehensive health screening camp organized for senior citizens in Solapur district.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Apex Hospital Receives NABH Accreditation",
    date: "2024-01-10",
    excerpt: "Hospital achieves highest standards in healthcare quality and patient safety.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const mediaNews = [
  {
    id: 1,
    title: "Leading Hospital in Maharashtra - Times of India",
    publication: "Times of India",
    date: "2024-01-18",
    link: "#",
    excerpt: "Apex Hospital recognized for excellence in patient care and medical innovation.",
  },
  {
    id: 2,
    title: "Healthcare Excellence Award - Maharashtra Today",
    publication: "Maharashtra Today",
    date: "2024-01-12",
    link: "#",
    excerpt: "Hospital receives prestigious award for outstanding healthcare services.",
  },
  {
    id: 3,
    title: "Medical Breakthrough in Cardiac Surgery - Health News",
    publication: "Health News India",
    date: "2024-01-08",
    link: "#",
    excerpt: "Successful complex cardiac procedure performed using minimally invasive techniques.",
  },
]

const newsletters = [
  {
    id: 1,
    title: "Apex Health Newsletter - January 2024",
    date: "2024-01-01",
    description: "Monthly health tips, hospital updates, and medical insights",
    downloadUrl: "/newsletters/january-2024.pdf",
    size: "2.1 MB",
  },
  {
    id: 2,
    title: "Apex Health Newsletter - December 2023",
    date: "2023-12-01",
    description: "Year-end review and health resolutions for the new year",
    downloadUrl: "/newsletters/december-2023.pdf",
    size: "1.8 MB",
  },
  {
    id: 3,
    title: "Apex Health Newsletter - November 2023",
    date: "2023-11-01",
    description: "Winter health care tips and seasonal wellness advice",
    downloadUrl: "/newsletters/november-2023.pdf",
    size: "2.3 MB",
  },
]

export default function NewsEventsPage() {
  const [activeTab, setActiveTab] = useState("press-releases")

  const tabs = [
    { id: "press-releases", label: "Press Releases" },
    { id: "in-the-media", label: "In the Media" },
    { id: "newsletters", label: "Newsletters" },
  ]

  return (
    <div className={styles.newsPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>News & Events</h1>
          <p>Stay updated with the latest news, events, and announcements from Apex Hospital</p>
        </div>

        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tab} ${activeTab === tab.id ? styles.active : ""}`}
                onClick={() => setActiveTab(tab.id)}
                onMouseEnter={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.tabContent}>
          {activeTab === "press-releases" && (
            <div className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>Press Releases</h2>
              <div className={styles.newsGrid}>
                {pressReleases.map((news) => (
                  <Link key={news.id} href={`/news-events/press-releases/${news.id}`} className={styles.newsCard}>
                    <div className={styles.cardImage}>
                      <Image
                        src={news.image || "/placeholder.svg"}
                        alt={news.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.cardDate}>
                        <Calendar size={16} />
                        <span>{new Date(news.date).toLocaleDateString()}</span>
                      </div>
                      <h3>{news.title}</h3>
                      <p>{news.excerpt}</p>
                      <span className={styles.readMore}>Read More →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {activeTab === "in-the-media" && (
            <div className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>In the Media</h2>
              <div className={styles.mediaList}>
                {mediaNews.map((media) => (
                  <div key={media.id} className={styles.mediaCard}>
                    <div className={styles.mediaContent}>
                      <h3>{media.title}</h3>
                      <div className={styles.mediaMeta}>
                        <span className={styles.publication}>{media.publication}</span>
                        <span className={styles.date}>{new Date(media.date).toLocaleDateString()}</span>
                      </div>
                      <p>{media.excerpt}</p>
                      <a href={media.link} className={styles.externalLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Read Original Article
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "newsletters" && (
            <div className={styles.contentSection}>
              <h2 className={styles.sectionTitle}>Newsletters</h2>
              <div className={styles.newsletterGrid}>
                {newsletters.map((newsletter) => (
                  <div key={newsletter.id} className={styles.newsletterCard}>
                    <div className={styles.newsletterIcon}>
                      <Download size={32} />
                    </div>
                    <h3>{newsletter.title}</h3>
                    <p>{newsletter.description}</p>
                    <div className={styles.newsletterMeta}>
                      <span>{new Date(newsletter.date).toLocaleDateString()}</span>
                      <span>{newsletter.size}</span>
                    </div>
                    <button className="btn-primary">
                      <Download size={16} />
                      Download PDF
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
