import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const resources = [
  { title: "Get Your Documents", category: "Life Basics", description: "Birth certificate, Social Security card, state ID, medical records." },
  { title: "First Apartment Readiness", category: "Housing", description: "Understand leases, deposits, and renter rights." },
  { title: "College & Training", category: "Education", description: "Explore college, certifications, and financial aid." },
  { title: "Job Search", category: "Work", description: "Resume, interviews, and job applications." }
];

const mentors = [
  { 
    name: "Dr. Dina Lundy", 
    focus: "Advocates for Young Adults", 
    description: "Guidance on life transitions, education pathways, and navigating independence after state care."
  }
];

function App() {
  const [activeTab, setActiveTab] = useState("resources");

  const renderContent = () => {
    switch (activeTab) {
      case "resources":
        return (
          <div>
            <h2>Resources</h2>
            {resources.map((item, index) => (
              <div key={index} className="card">
                <h3>{item.title}</h3>
                <p><strong>{item.category}</strong></p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        );

      case "mentors":
        return (
          <div>
            <h2>Mentorship</h2>
            {mentors.map((mentor, index) => (
              <div key={index} className="card">
                <h3>{mentor.name}</h3>
                <p><strong>{mentor.focus}</strong></p>
                <p>{mentor.description}</p>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="app">

      {/* ✅ BOOK TITLE + POSITIONING */}
       <p className="subtitle">
    Everything you need to navigate life after foster care—without guessing.
  </p>

  <p style={{ marginTop: "10px", fontWeight: "500" }}>
    By Dr. Dina Lundy — Advocating for young adults transitioning into independence
  </p>

  <a
    href="https://tinyurl.com/SoYoureOnYourOwn"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      marginTop: "20px",
      padding: "12px 20px",
      backgroundColor: "#000",
      color: "#fff",
      borderRadius: "6px",
      textDecoration: "none",
      fontWeight: "600"
    }}
  >
    Get Early Access
  </a>

</header>
      <p className="subtitle">
    Everything you need to navigate life after foster care—without guessing.
  </p>

  <p style={{ marginTop: "10px", fontWeight: "500" }}>
    By Dr. Dina Lundy — Advocating for young adults transitioning into independence
  </p>

  <a
    href="https://tinyurl.com/SoYoureOnYourOwn"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      marginTop: "20px",
      padding: "12px 20px",
      backgroundColor: "#000",
      color: "#fff",
      borderRadius: "6px",
      textDecoration: "none",
      fontWeight: "600"
    }}
  >
    Get Early Access
  </a>
</header>

      <header>
  <h1>So You’re On Your Own</h1>

  <p>
    Everything you need to navigate life after foster care—without guessing.
  </p>

  <p>
    By Dr. Dina Lundy
  </p>

  <a href="https://tinyurl.com/SoYoureOnYourOwn" target="_blank">
    Get Early Access
  </a>
</header>

      <nav className="tabs">
        <button onClick={() => setActiveTab("resources")}>
          Resources
        </button>

        <button onClick={() => setActiveTab("mentors")}>
          Mentors
        </button>

        {/* ✅ SINGLE EARLY ACCESS TAB */}
        <a
          href="https://tinyurl.com/SoYoureOnYourOwn"
          target="_blank"
          rel="noopener noreferrer"
          className="tab-link"
        >
          Early Access
        </a>
      </nav>

      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <div
    style={{
      maxWidth: "1000px",
      margin: "60px auto 0 auto",
      padding: "20px 30px",
      boxSizing: "border-box"
    }}>
<>
<header>
<h1>So You’re On Your Own</h1>
<p>Everything you need to navigate life after foster care—without guessing.</p>
<p>By Dr. Dina Lundy</p>
<a href="https://tinyurl.com/SoYoureOnYourOwn" target="_blank">
Get Early Access
</a>
</header>

<App />
</>
</div>
);

