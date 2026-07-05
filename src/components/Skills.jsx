import React from 'react';
import { Layout, Server, Cpu, Wrench, GraduationCap } from 'lucide-react';

export default function Skills() {
  const frontendSkills = ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap', 'Tailwind CSS'];
  const backendSkills = ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'MySQL'];
  const programmingLanguages = ['C', 'C++', 'Java', 'Python'];
  const devTools = ['Git', 'GitHub', 'Postman', 'VS Code'];
  const coreSubjects = ['DSA (Data Structures)', 'DBMS (Databases)', 'Operating Systems', 'Computer Networks', 'OOP (Object Oriented Programming)'];

  // Top items to float in the circular CSS Skills Orbit on the right
  const orbitItems = ['React', 'Node', 'Express', 'MongoDB', 'C++', 'Java', 'Python', 'MySQL', 'Git'];

  return (
    <section id="skills" className="skills-section reveal">
      <div className="container">
        <div className="section-header">
          <h2>Skills & Competencies</h2>
          <p>My core programming languages, modern MERN web stack tools, and core computer science fundamentals.</p>
        </div>

        <div className="skills-layout-grid">
          {/* Skills Cards on Left */}
          <div className="skills-lists-column">
            
            {/* Frontend */}
            <div className="skills-card glass-card">
              <h3 className="card-title">
                <Layout className="title-icon text-cyan" size={18} />
                Frontend Development
              </h3>
              <ul className="skills-ul">
                {frontendSkills.map((s, idx) => (
                  <li key={idx} className="skill-pill">{s}</li>
                ))}
              </ul>
            </div>

            {/* Backend & DB */}
            <div className="skills-card glass-card">
              <h3 className="card-title">
                <Server className="title-icon text-purple" size={18} />
                Backend & Database
              </h3>
              <ul className="skills-ul">
                {backendSkills.map((s, idx) => (
                  <li key={idx} className="skill-pill">{s}</li>
                ))}
              </ul>
            </div>

            {/* Programming Languages */}
            <div className="skills-card glass-card">
              <h3 className="card-title">
                <Cpu className="title-icon text-cyan" size={18} />
                Languages
              </h3>
              <ul className="skills-ul">
                {programmingLanguages.map((s, idx) => (
                  <li key={idx} className="skill-pill">{s}</li>
                ))}
              </ul>
            </div>

            {/* Developer Tools */}
            <div className="skills-card glass-card">
              <h3 className="card-title">
                <Wrench className="title-icon text-purple" size={18} />
                Tools & Systems
              </h3>
              <ul className="skills-ul">
                {devTools.map((s, idx) => (
                  <li key={idx} className="skill-pill">{s}</li>
                ))}
              </ul>
            </div>

            {/* CS Core Subjects */}
            <div className="skills-card glass-card">
              <h3 className="card-title">
                <GraduationCap className="title-icon text-cyan" size={20} />
                CS Core Subjects
              </h3>
              <ul className="skills-ul">
                {coreSubjects.map((s, idx) => (
                  <li key={idx} className="skill-pill highlight-pill">{s}</li>
                ))}
              </ul>
            </div>

          </div>

          {/* Interactive Skills Orbit on Right */}
          <div className="orbit-column">
            <h3 className="orbit-section-title">Core Stack Focus</h3>
            <p className="orbit-section-desc">Visualizing my primary language targets and database foundations rotating interactively.</p>
            
            <div className="skills-orbit-container">
              <div className="orbit-center">MERN</div>
              <div className="orbit-path">
                {orbitItems.map((item, idx) => {
                  const angle = (idx * 360) / orbitItems.length;
                  const radius = 120; // Radius of orbit
                  const x = radius * Math.cos((angle * Math.PI) / 180);
                  const y = radius * Math.sin((angle * Math.PI) / 180);
                  
                  return (
                    <div 
                      key={idx} 
                      className="orbit-node"
                      style={{
                        transform: `translate(${x}px, ${y}px) rotate(${-angle}deg)`,
                        left: 'calc(50% - 18px)',
                        top: 'calc(50% - 18px)'
                      }}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .skills-section {
          position: relative;
        }

        .skills-layout-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
        }

        .skills-lists-column {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          text-align: left;
        }

        .skills-card {
          padding: 1.5rem;
        }

        .card-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-primary);
        }

        .title-icon.text-cyan { color: var(--accent-secondary); }
        .title-icon.text-purple { color: var(--accent-color); }

        .skills-ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
        }

        .skill-pill {
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.35rem 0.8rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .skill-pill:hover {
          color: var(--text-primary);
          border-color: var(--accent-color);
          background: var(--bg-accent-alpha);
          transform: scale(1.03);
        }

        .highlight-pill {
          background: rgba(6, 182, 212, 0.05);
          border-color: rgba(6, 182, 212, 0.2);
        }

        .highlight-pill:hover {
          border-color: var(--accent-secondary);
          background: rgba(6, 182, 212, 0.1);
        }

        /* Orbit Column on Right */
        .orbit-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .orbit-section-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .orbit-section-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          max-width: 320px;
          margin-bottom: 2rem;
          text-align: center;
        }

        @media (max-width: 992px) {
          .skills-layout-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .orbit-column {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
