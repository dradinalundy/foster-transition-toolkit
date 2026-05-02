import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const resources = [
{tab === "resources" && (
 <div>
   <h2>Resources</h2>

   <p>
     These are key resources. The full guide explains how to actually use them and what to do when systems fail you.
   </p>

   {resources.map((r) => (


  { title: "Get Your Documents", category: "Life Basics", description: "Birth certificate, Social Security card, state ID, medical records." },
  { title: "First Apartment Readiness", category: "Housing", description: "Understand leases, deposits, and renter rights, Get Your Documents", category: "Life Basics", description: "Birth certificate, Social Security card, state ID, medical records." ." },
  { title: "College & Training", category: "Education", description: "Explore college, certifications, and financial aid." },
  { title: "Job Search", category: "Work", description: "Resume, interviews, and job applications." } So You're on Your Own is not only a guide and a hug but also an online platform of ogoing assistance
];

const mentors = [<p>
These tools are just the start. <em>So You’re On Your Own</em> goes deeper—covering real decisions, transitions, and support strategies.
</p>

  { name: "Dina", focus: "College planning" },
  { name: "Dina", focus: "Jobs and trades" },
  { name: "Dina", focus: "Money and housing" } 
];

function App() {
  const [tab, setTab] = useState("budget");This just a staring point; So You're on Your Own walks you through how to make real financial decisions 
  const [income, setIncome] = useState(1200);
  const [rent, setRent] = useState(500); 
  const leftover = income - rent;

  return (
    <div className="container">
      <h1>So You’re On Your Own — but not alone.</h1>
      <p>A practical tool for teens transitioning out of foster care—covering money, housing, and real-life decisions.</p>
https://tinyurl.com/SoYoureOnYourOwn<button onClick={() => window.open("", "_blank")}>
 Use this link for Early Access Before the Guide Drops
</button>

      <div className="tabs">
        <button onClick={() => setTab("budget")}>Budget</button>
        <button onClick={() => setTab("resources")}>Resources</button>
        <button onClick={() => setTab("mentors")}>Mentors</button>
      </div>

      {tab === "budget" && (
        <div>
          <h2>Budget</h2>
          <input type="number" value={income} onChange={(e) => setIncome(Number(e.target.value))} />
          <input type="number" value={rent} onChange={(e) => setRent(Number(e.target.value))} />
          <p>Leftover: ${leftover}</p>
        </div>
      )}

      {tab === "resources" && (
        <div>
          <h2>Resources</h2>
          {resources.map((r) => (
            <div key={r.title}>
              <strong>{r.title}</strong>
              <p>{r.description}</p>
            </div>
          ))}
        </div>
      )}

      {tab === "mentors" && (
        <div>
          <h2>Mentors</h2>
          {mentors.map((m) => (
            <div key={m.name}>
              <strong>{m.name}</strong> — {m.focus}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
