import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const resources = [
  { title: "Get Your Documents", description: "Birth certificate, Social Security card, state ID, medical records." },
  { title: "First Apartment Readiness", description: "Understand leases, deposits, and renter rights." },
  { title: "College & Training", description: "Explore college, certifications, and financial aid." },
  { title: "Job Search", description: "Resume, interviews, and job applications." }
];

function App() {
  const [tab, setTab] = useState("budget");
  const [income, setIncome] = useState(1200);
  const [rent, setRent] = useState(500);

  const leftover = income - rent;

  return (
    <div className="container">
      <h1>So You’re On Your Own — but not alone.</h1>
      <p>A practical tool for teens transitioning out of foster care.</p>

      <div className="tabs">
        <button onClick={() => setTab("budget")}>Budget</button>
        <button onClick={() => setTab("resources")}>Resources</button>
        <button onClick={() => setTab("mentors")}>Support</button>
        <button onClick={() => setTab("early")}>Early Access</button>
      </div>

      {tab === "budget" && (
        <div>
          <h2>Budget</h2>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            placeholder="Monthly income"
          />
          <input
            type="number"
            value={rent}
            onChange={(e) => setRent(Number(e.target.value))}
            placeholder="Monthly rent"
          />
          <p>Leftover: ${leftover}</p>
        </div>
      )}

      {tab === "resources" && (
        <div>
          <h2>Resources</h2>
          {resources.map((r) => (
            <div key={r.title} style={{ marginBottom: "12px" }}>
              <strong>{r.title}</strong>
              <p>{r.description}</p>
            </div>
          ))}
        </div>
      )}

      {tab === "mentors" && (
        <div>
          <h2>Support</h2>

          <div style={{ marginBottom: "20px" }}>
            <h3>Dr. Dina Lundy</h3>
            <p><strong>Advocates for Young Adults</strong></p>

            <p>
              Guidance for young adults navigating independence after foster care,
              including real-world decision-making, planning, and support systems.
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4>Focus Areas</h4>
            <ul>
              <li>Budgeting and financial stability</li>
              <li>Housing and independent living decisions</li>
              <li>Education and career pathways</li>
              <li>Building support systems</li>
            </ul>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4>How to Get Support</h4>
            <p>
              Request guidance and access additional support by completing the Early Access form.
            </p>

            <a
              href="YOUR_GOOGLE_FORM_LINK_HERE"
              target="_blank"
              rel="noreferrer"
            >
              <button>Request Support</button>
            </a>
          </div>
        </div>
      )}

      {tab === "early" && (
        <div>
          <h2>Get Early Access</h2>

          <p>
            The tools here are just the beginning. Early access provides deeper guidance,
            structured plans, and ongoing support from the full system behind
            <em> So You’re On Your Own</em>.
          </p>

          <a
            href="YOUR_GOOGLE_FORM_LINK_HERE"
            target="_blank"
            rel="noreferrer"
          >
            <button>Get Early Access</button>
          </a>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);



createRoot(document.getElementById("root")).render(<App />);
