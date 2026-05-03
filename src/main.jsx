import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const resources = [
  {
    title: "Get Your Documents",
    category: "Life Basics",
    description: "Birth certificate, Social Security card, state ID, medical records."
  },
  {
    title: "First Apartment Readiness",
    category: "Housing",
    description: "Understand leases, deposits, and renter rights."
  },
  {
    title: "College & Training",
    category: "Education",
    description: "Explore college, certifications, and financial aid."
  },
  {
    title: "Job Search",
    category: "Work",
    description: "Resume, interviews, and job applications."
  }
];

const mentors = [
  {
    name: "Dr. Dina Lundy",
    focus: "Advocates for Young Adults",
    description:
      "Guidance on life transitions, education pathways, and navigating independence after state care."
  }
];

function App() {
  const [activeTab, setActiveTab] = useState("resources");

  const renderContent = () => {
    if (activeTab === "mentors") {
      return (
        <section>
          <h2 style={styles.sectionTitle}>Mentorship</h2>
          {mentors.map((mentor, index) => (
            <div key={index} style={styles.card}>
              <p style={styles.category}>{mentor.focus}</p>
              <h3 style={styles.cardTitle}>{mentor.name}</h3>
              <p style={styles.cardText}>{mentor.description}</p>
            </div>
          ))}
        </section>
      );
    }

    return (
      <section>
        <h2 style={styles.sectionTitle}>Practical Resources</h2>
        <div style={styles.grid}>
          {resources.map((item, index) => (
            <div key={index} style={styles.card}>
              <p style={styles.category}>{item.category}</p>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardText}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div style={styles.page}>
      <header style={styles.hero}>
        <div style={styles.heroText}>
          <p style={styles.label}>Early Access Now Open</p>

          <h1 style={styles.title}>So You’re On Your Own</h1>

          <p style={styles.subtitle}>
            Everything you need to navigate life after foster care—without guessing.
          </p>

          <p style={styles.author}>
            By Dr. Dina Lundy — Advocating for young adults transitioning into independence
          </p>

          <a
            href="https://tinyurl.com/SoYoureOnYourOwn"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.primaryButton}
          >
            Get Early Access
          </a>
        </div>

        {/* ✅ YOUR BOOK COVER */}
        <div style={styles.coverWrap}>
       <img
 src="book-cover.png"
 alt="Book Cover"
/>


      <nav style={styles.tabs}>
        <button
          onClick={() => setActiveTab("resources")}
          style={{
            ...styles.tabButton,
            ...(activeTab === "resources" ? styles.activeTab : {})
          }}
        >
          Resources
        </button>

        <button
          onClick={() => setActiveTab("mentors")}
          style={{
            ...styles.tabButton,
            ...(activeTab === "mentors" ? styles.activeTab : {})
          }}
        >
          Mentors
        </button>

        <a
          href="https://tinyurl.com/SoYoureOnYourOwn"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.tabLink}
        >
          Early Access
        </a>
      </nav>

      <main>{renderContent()}</main>
    </div>
  );
}

const styles = {
  page: {
    maxWidth: "1120px",
    margin: "60px auto",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    color: "#1d1d1d"
  },

  hero: {
    display: "flex",
    gap: "40px",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: "40px",
    borderRadius: "28px",
    background: "linear-gradient(135deg, #f7efe7, #ffffff)",
    boxShadow: "0 20px 50px rgba(0,0,0,0.10)",
    marginBottom: "30px"
  },

  heroText: {
    flex: "1 1 420px"
  },

  label: {
    textTransform: "uppercase",
    fontSize: "13px",
    fontWeight: "800",
    color: "#9a6500",
    marginBottom: "12px"
  },

  title: {
    fontSize: "50px",
    marginBottom: "16px"
  },

  subtitle: {
    fontSize: "20px",
    marginBottom: "12px"
  },

  author: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "20px"
  },

  primaryButton: {
    padding: "14px 24px",
    backgroundColor: "#111",
    color: "#fff",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "700"
  },

  coverWrap: {
    flex: "0 1 280px",
    textAlign: "center"
  },

  cover: {
    width: "260px",
    borderRadius: "16px",
    boxShadow: "0 20px 45px rgba(0,0,0,0.25)"
  },

  tabs: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "30px"
  },

  tabButton: {
    padding: "10px 18px",
    borderRadius: "999px",
    border: "1px solid #ddd",
    background: "#fff",
    cursor: "pointer"
  },

  activeTab: {
    background: "#111",
    color: "#fff"
  },

  tabLink: {
    padding: "10px 18px",
    borderRadius: "999px",
    background: "#9a6500",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "700"
  },

  sectionTitle: {
    textAlign: "center",
    fontSize: "28px",
    marginBottom: "20px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "18px"
  },

  card: {
    padding: "20px",
    borderRadius: "18px",
    background: "#fff",
    border: "1px solid #eee",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
  },

  category: {
    fontSize: "12px",
    fontWeight: "800",
    color: "#9a6500",
    marginBottom: "8px"
  },

  cardTitle: {
    fontSize: "18px",
    marginBottom: "8px"
  },

  cardText: {
    fontSize: "14px",
    color: "#555"
  }
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);

