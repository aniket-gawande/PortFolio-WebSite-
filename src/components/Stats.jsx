import React, { useState } from "react";
import { Award, Trophy, Star, Sparkles, GraduationCap } from "lucide-react";

export default function Stats() {
  const achievements = [
    {
      icon: "🏆",
      title: "Indradhanu Grand Challenge Finalist",
      desc: "Top 19 finalist among 1,002 competing engineering teams.",
    },
    {
      icon: "🥉",
      title: "3rd Place - PRAXIS 2026",
      desc: "Secured podium placement in the PRAXIS coding competition.",
    },
    {
      icon: "🏅",
      title: "Google Ambassador Performance Award",
      desc: "Earned ₹10,000 in rewards for exceptional campus task performance.",
    },
    {
      icon: "🏆",
      title: "La Trobe University Grand Challenge",
      desc: "Selected for prototype funding(400 $) in the Technology Infusion Grand Challenge.",
    },
    {
      icon: "📈",
      title: "8.99 CGPA Academic Standout",
      desc: "Maintaining high academic performance in B.Tech IT at PCCOE.",
    },
    {
      icon: "🎯",
      title: "98.33 Percentile - MHT CET",
      desc: "Scored in the top percentile of the state engineering entrance exam.",
    },
  ];

  // Generate simulated GitHub data (20 weeks, 7 days each)
  const [contributions, setContributions] = useState(() => {
    const data = [];
    const baseDate = new Date();
    baseDate.setDate(baseDate.getDate() - 140); // 20 weeks ago

    for (let i = 0; i < 140; i++) {
      const date = new Date(baseDate);
      date.setDate(baseDate.getDate() + i);

      // Random mock contributions (0 to 8 commits)
      const randVal = Math.random();
      const count =
        randVal > 0.85
          ? Math.floor(Math.random() * 8) + 1
          : randVal > 0.4
            ? Math.floor(Math.random() * 3)
            : 0;
      data.push({ date, count });
    }
    return data;
  });

  const [hoverInfo, setHoverInfo] = useState(
    "Hover over a square to see commit logs.",
  );

  const handleBlockHover = (day) => {
    const formattedDate = day.date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    setHoverInfo(`${day.count} contributions on ${formattedDate}`);
  };

  const handleBlockClick = (index) => {
    // Click increments the commits to make it interactive!
    const updated = [...contributions];
    updated[index].count = Math.min(updated[index].count + 2, 10);
    setContributions(updated);
    handleBlockHover(updated[index]);
  };

  const getIntensityClass = (count) => {
    if (count === 0) return "intensity-0";
    if (count <= 2) return "intensity-1";
    if (count <= 4) return "intensity-2";
    if (count <= 6) return "intensity-3";
    return "intensity-4";
  };

  return (
    <section id="achievements" className="stats-section reveal">
      <div className="container">
        <div className="section-header">
          <h2>Achievements & Metrics</h2>
          <p>
            Key milestones, academic accomplishments, and a live simulation of
            my coding contributions.
          </p>
        </div>

        <div className="stats-grid-layout">
          {/* Left Column: Achievements */}
          <div className="achievements-column text-left">
            <h3 className="stats-subheading">
              <Trophy size={18} className="subheading-icon" />
              Milestones
            </h3>

            <div className="achievements-list">
              {achievements.map((item, idx) => (
                <div key={idx} className="achievement-item-card glass-card">
                  <span className="achievement-emoji">{item.icon}</span>
                  <div>
                    <h4 className="achievement-item-title">{item.title}</h4>
                    <p className="achievement-item-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Simulated Github Grid */}
          <div className="github-grid-column text-left">
            <h3 className="stats-subheading">
              <Star size={18} className="subheading-icon" />
              GitHub Activity (Simulated)
            </h3>

            <div className="github-card glass-card">
              <div className="github-header">
                <span className="github-user">github.com/aniketgawande</span>
                <span className="github-badge">MERN Stack</span>
              </div>

              <div className="github-heatmap-container">
                <div className="github-heatmap">
                  {contributions.map((day, idx) => (
                    <button
                      key={idx}
                      className={`heatmap-box ${getIntensityClass(day.count)}`}
                      onMouseEnter={() => handleBlockHover(day)}
                      onClick={() => handleBlockClick(idx)}
                      aria-label="Commit Block"
                    ></button>
                  ))}
                </div>
              </div>

              <div className="github-tooltip-info">
                <Sparkles size={14} className="sparkle-icon" />
                <span>{hoverInfo}</span>
              </div>

              <div className="github-legend">
                <span>Less</span>
                <div className="legend-box intensity-0"></div>
                <div className="legend-box intensity-1"></div>
                <div className="legend-box intensity-2"></div>
                <div className="legend-box intensity-3"></div>
                <div className="legend-box intensity-4"></div>
                <span>More</span>
                <span className="legend-tip">(Click boxes to add commits)</span>
              </div>
            </div>

            {/* Custom Stats summary */}
            <div className="academic-summary glass-card">
              <h4 className="summary-title">PCCOE IT Academic Overview</h4>
              <ul className="summary-stats-list">
                <li>
                  <strong>Current Year:</strong> Second Year B.Tech
                </li>
                <li>
                  <strong>CGPA Target:</strong> Maintain 9.0+ average
                </li>
                <li>
                  <strong>Coding Focus:</strong> MERN Web Apps, DSA in C++
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .stats-section {
          position: relative;
        }

        .stats-grid-layout {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 3.5rem;
          align-items: start;
        }

        .text-left {
          text-align: left;
        }

        .stats-subheading {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-primary);
        }

        .subheading-icon {
          color: var(--accent-color);
        }

        .achievements-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .achievement-item-card {
          padding: 1.25rem;
          display: flex;
          gap: 1.25rem;
          align-items: center;
        }

        .achievement-emoji {
          font-size: 1.8rem;
          flex-shrink: 0;
        }

        .achievement-item-title {
          font-size: 1.02rem;
          font-weight: 600;
          margin-bottom: 0.2rem;
        }

        .achievement-item-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        /* Github Heatmap Container */
        .github-card {
          padding: 1.75rem;
          margin-bottom: 1.5rem;
        }

        .github-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .github-user {
          font-family: var(--font-mono);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .github-badge {
          font-size: 0.72rem;
          background: rgba(6, 182, 212, 0.08);
          border: 1px solid rgba(6, 182, 212, 0.2);
          border-radius: 4px;
          padding: 0.15rem 0.5rem;
          color: var(--accent-secondary);
          font-weight: 700;
        }

        .github-heatmap-container {
          background: #030303;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 1rem;
          margin-bottom: 1rem;
          overflow-x: auto;
        }

        .github-heatmap {
          display: grid;
          grid-template-rows: repeat(7, 10px);
          grid-auto-flow: column;
          gap: 4px;
          width: max-content;
        }

        .heatmap-box {
          width: 10px;
          height: 10px;
          border-radius: 2px;
          cursor: pointer;
          border: none;
          outline: none;
          transition: transform 0.15s ease;
        }

        .heatmap-box:hover {
          transform: scale(1.3);
          box-shadow: 0 0 5px var(--accent-secondary);
          z-index: 2;
        }

        /* Commit Heatmap Intensity Levels (Green Scale) */
        .intensity-0 { background-color: #161b22; }
        .intensity-1 { background-color: #0e4429; }
        .intensity-2 { background-color: #006d32; }
        .intensity-3 { background-color: #26a641; }
        .intensity-4 { background-color: #39d353; }

        .github-tooltip-info {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          background: rgba(255,255,255,0.01);
          padding: 0.5rem;
          border-radius: 4px;
        }

        .sparkle-icon {
          color: var(--accent-color);
        }

        .github-legend {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          color: var(--text-muted);
          flex-wrap: wrap;
        }

        .legend-box {
          width: 8px;
          height: 8px;
          border-radius: 1px;
        }

        .legend-tip {
          margin-left: auto;
          font-style: italic;
          color: var(--text-muted);
        }

        .academic-summary {
          padding: 1.5rem;
        }

        .summary-title {
          font-size: 1.05rem;
          margin-bottom: 0.85rem;
          color: var(--accent-color);
          font-weight: 700;
        }

        .summary-stats-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.9rem;
        }

        .summary-stats-list li {
          color: var(--text-secondary);
        }

        .summary-stats-list li strong {
          color: var(--text-primary);
        }

        @media (max-width: 992px) {
          .stats-grid-layout {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
    </section>
  );
}
