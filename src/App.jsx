import React from "react";
import "./LovePage.css";

import nurseImg from "./assets/nurse.png";
import cartoonImg from "./assets/889.png";
import bgImg from "./assets/6789.png";

export default function LovePage() {

  const moveButton = (e) => {
    const button = e.target;

    const x = Math.random() * 220 - 110;
    const y = Math.random() * 150 - 75;

    button.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleYes = () => {
    alert("I knew it 😘❤️");
  };

  return (
    <div
      className="love-container"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="overlay"></div>

      {/* Floating Hearts */}
      <div className="heart heart1">❤️</div>
      <div className="heart heart2">💕</div>
      <div className="heart heart3">💖</div>
      <div className="heart heart4">💘</div>

      <div className="glass-card">

        <div className="content-grid">

          {/* LEFT SIDE */}
          <div className="left-section">

            <p className="tagline">
              FOR MY FAVORITE NURSE 💖
            </p>

            <h1 className="main-heading">
              You Heal <span>People</span>
              <br />
              But You <span>Stole</span>
              <br />
              My Heart
            </h1>

            <p className="description">
              Every patient may call you their nurse 🩺
              <br />
              But I call you my happiness ❤️
            </p>

            <p className="quote">
              “In your smile, I found my favorite place.” 💕
            </p>

            <div className="love-cards">

              <div className="love-card">
                💉 Your smile should be prescribed because it cures all my sadness.
              </div>

              <div className="love-card">
                ❤️ Are you a heart specialist? Because my heart beats faster whenever I see you.
              </div>

              <div className="love-card">
                🩺 Side effects of loving you: smiling all day and missing you every second.
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="right-section">

            <div className="image-glow"></div>

            <div className="image-card">

              <img
                src={nurseImg}
                alt="nurse"
                className="main-image"
              />

              <div className="badge">
                Cutest Nurse Ever 💕
              </div>

            </div>

            <img
              src={cartoonImg}
              alt="cartoon"
              className="small-image"
            />

          </div>
        </div>

        {/* QUESTION SECTION */}

        <div className="question-section">

          <h2>One Important Question 😘</h2>

          <p>Do you love me?</p>

          <div className="button-area">

            <button
              className="yes-btn"
              onClick={handleYes}
            >
              Love Me 💖
            </button>

            <button
              className="no-btn"
              onMouseEnter={moveButton}
            >
              Love Me Not 😭
            </button>

          </div>
        </div>

        {/* FOOTER */}

        <div className="footer">
          Made with endless love for the most beautiful nurse ❤️
        </div>

      </div>
    </div>
  );
}