import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  const [tab, setTab] = useState("budget");

  return (
    <div className="container">
      <h1>So You’re On Your Own — but not alone.</h1>
      <p>This is an app for teens transitioning out of foster care.</p>
      <a href="https://tinyurl.com/SoYoureOnYourOwn" target="_blank" rel="noreferrer">
 <button>Get Early Access</button>
</a>


      <div className="tabs">
        <button onClick={() => setTab("budget")}>Budget</button>
        <button onClick={() => setTab("resources")}>Resources</button>
        <button onClick={() => setTab("mentors")}>Mentors</button>
      </div>

      {tab === "budget" && (
        <div>
          <h2>Budget</h2>
          <p>Basic budgeting tool.</p>
        </div>
      )}

      {tab === "resources" && (
        <div>
          <h2>Resources</h2>
          <p>Key resources for transition.</p>
        </div>
      )}

      {tab === "mentors" && (
        <div>
          
 <div>
   <h2>Mentors</h2>
   <p>Find support and guidance.</p>

   <p><strong>Dr. Lundy</strong> — Author</p>

 </div>
)}

        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
