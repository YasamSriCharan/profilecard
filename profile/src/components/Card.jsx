import React, { useState } from "react";
import "./Card.css";
import profile from "../assets/profile.png";

const Card = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "screen dark" : "screen"}>
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

      <div className="card">
        <img src={profile} alt="Profile" className="card-img" />

        <div className="card-body">
          <h2 className="card-title">Sri Charan</h2>

          <p className="card-sub">
            ⭐ Rating: <span className="highlight">6.9/10</span>
          </p>

          <p className="card-text">🎮 Gamer</p>
          <p className="card-text">🎓 4th Year B.Tech</p>

          <div className="divider"></div>

          <button className="follow-btn">Follow +</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
