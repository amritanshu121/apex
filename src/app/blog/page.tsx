"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Download } from "lucide-react"
import styles from "./page.module.css"
import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "Understanding Heart Disease: Prevention and Treatment",
    excerpt: "Learn about the latest advances in cardiac care and how to maintain a healthy heart.",
    author: "Dr. Rajesh Kumar",
    date: "2024-01-15",
    category: "Cardiology",
    image: "/placeholder.svg?height=300&width=400",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Mental Health Awareness: Breaking the Stigma",
    excerpt: "Understanding mental health issues and the importance of seeking professional help.",
    author: "Dr. Priya Sharma",
    date: "2024-01-10",
    category: "Psychiatry",
    image: "/placeholder.svg?height=300&width=400",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Diabetes Management: A Comprehensive Guide",
    excerpt: "Essential tips for managing diabetes and maintaining a healthy lifestyle.",
    author: "Dr. Amit Patel",
    date: "2024-01-05",
    category: "Endocrinology",
    image: "/placeholder.svg?height=300&width=400",
    readTime: "6 min read",
  },
]

const journalArticles = [
  {
    id: 1,
    title: "Advances in Minimally Invasive Cardiac Surgery",
    authors: "Dr. Kumar R., Dr. Sharma P., Dr. Patel A.",
    journal: "Indian Journal of Cardiology",
    date: "2024-01-20",
    abstract: "This study examines the outcomes of minimally invasive cardiac procedures...",
  },
  {
    id: 2,
    title: "Neuroplasticity in Stroke Recovery",
    authors: "Dr. Rao S., Dr. Singh V.",
    journal: "Neurology India",
    date: "2024-01-18",
    abstract: "Research on brain plasticity and its role in post-stroke rehabilitation...",
  },
]

const brochures = [
  {
    id: 1,
    title: "Patient Guide to Cardiac Care",
    description: "Comprehensive guide for cardiac patients and their families",
    pages: "24 pages",
    size: "2.5 MB",
    downloadUrl: "/brochures/cardiac-care-guide.pdf",
  },
  {
    id: 2,
    title: "Maternity Services Handbook",
    description: "Everything you need to know about our maternity services",
    pages: "32 pages",
    size: "3.2 MB",
    downloadUrl: "/brochures/maternity-handbook.pdf",
  },
]

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState("blog")

  const tabs = [
    { id: "blog", label: "Blog" },
    { id: "journal", label: "Journal" },
    { id: "journal-brochure", label: "Journal Brochure" },
    { id: "brochure", label: "Brochure" },
  ]

  return (
    <div className={styles.blogPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>Blog & Journal</h1>
          <p>Stay updated with the latest medical insights, research, and health information</p>
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
          {activeTab === "blog" && (
            <div className={styles.blogGrid}>
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`} className={styles.blogCard}>
                  <div className={styles.cardImage}>
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div className={styles.category}>{post.category}</div>
                  </div>
                  <div className={styles.cardContent}>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className={styles.cardMeta}>
                      <div className={styles.metaItem}>
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className={styles.metaItem}>
                        <Calendar size={16} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className={styles.readTime}>{post.readTime}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {activeTab === "journal" && (
            <div className={styles.journalList}>
              {journalArticles.map((article) => (
                <div key={article.id} className={styles.journalCard}>
                  <h3>{article.title}</h3>
                  <div className={styles.journalMeta}>
                    <span className={styles.authors}>{article.authors}</span>
                    <span className={styles.journal}>{article.journal}</span>
                    <span className={styles.date}>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <p className={styles.abstract}>{article.abstract}</p>
                  <Link href={`/journal/${article.id}`} className={styles.readMore}>
                    Read Full Article →
                  </Link>
                </div>
              ))}
            </div>
          )}

          {activeTab === "journal-brochure" && (
            <div className={styles.brochureGrid}>
              <div className={styles.brochureCard}>
                <h3>Medical Journal Collection</h3>
                <p>Access our comprehensive collection of published medical research and case studies.</p>
                <div className={styles.brochureDetails}>
                  <span>Updated Monthly</span>
                  <span>50+ Articles</span>
                </div>
                <button className="btn-primary">
                  <Download size={16} />
                  Download Collection
                </button>
              </div>
            </div>
          )}

          {activeTab === "brochure" && (
            <div className={styles.brochureGrid}>
              {brochures.map((brochure) => (
                <div key={brochure.id} className={styles.brochureCard}>
                  <h3>{brochure.title}</h3>
                  <p>{brochure.description}</p>
                  <div className={styles.brochureDetails}>
                    <span>{brochure.pages}</span>
                    <span>{brochure.size}</span>
                  </div>
                  <button className="btn-primary">
                    <Download size={16} />
                    Download PDF
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
