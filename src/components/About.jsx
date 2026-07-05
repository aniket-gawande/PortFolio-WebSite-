import React from 'react';
import { Target, Users, BookOpen, Layers } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Target className="feature-card-icon text-purple" />,
      title: "Problem Solver",
      desc: "Building practical solutions with efficient algorithms and clean code."
    },
    {
      icon: <Layers className="feature-card-icon text-cyan" />,
      title: "Full Stack Development",
      desc: "Developing complete applications from frontend to backend."
    },
    {
      icon: <BookOpen className="feature-card-icon text-purple" />,
      title: "Continuous Learning",
      desc: "Always exploring new technologies and improving technical skills."
    },
    {
      icon: <Users className="feature-card-icon text-cyan" />,
      title: "Team Collaboration",
      desc: "Experience working in hackathons, internships, and technical communities."
    }
  ];

  return (
    <section id="about" className="about-section reveal">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>B.Tech IT student at PCCOE, Pune with a passion for web technologies and product engineering.</p>
        </div>

        <div className="about-grid">
          <div className="about-text-content">
            <h3 className="about-greeting">
              Converting creative ideas into responsive, functional products.
            </h3>
            <p className="about-paragraph">
              I'm a passionate Full Stack Developer and B.Tech Information Technology student at Pimpri Chinchwad College of Engineering (PCCOE), Pune.
            </p>
            <p className="about-paragraph">
              My journey into software development started with curiosity about how applications work behind the scenes. Today I specialize in building responsive web applications using React.js, Node.js, Express.js, MongoDB, and JavaScript.
            </p>
            <p className="about-paragraph">
              I enjoy transforming ideas into functional products while continuously learning new technologies through internships, hackathons, coding competitions, and personal projects.
            </p>
            <p className="about-paragraph">
              Beyond coding, I actively participate in technical communities, contribute to student activities, and enjoy photography, video editing, and exploring Artificial Intelligence.
            </p>
          </div>

          <div className="about-features-grid">
            {features.map((feat, idx) => (
              <div key={idx} className="feat-card glass-card">
                <div className="feat-icon-wrapper">
                  {feat.icon}
                </div>
                <h4 className="feat-title">{feat.title}</h4>
                <p className="feat-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 3.5rem;
          align-items: start;
        }

        .about-text-content {
          text-align: left;
        }

        .about-greeting {
          font-size: 1.65rem;
          line-height: 1.35;
          margin-bottom: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .about-paragraph {
          font-size: 1.02rem;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }

        .about-features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        .feat-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .feat-icon-wrapper {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: var(--bg-accent-alpha);
          margin-bottom: 1rem;
        }

        .feature-card-icon {
          width: 20px;
          height: 20px;
        }

        .feature-card-icon.text-purple { color: var(--accent-color); }
        .feature-card-icon.text-cyan { color: var(--accent-secondary); }

        .feat-title {
          font-size: 1.05rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .feat-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 576px) {
          .about-features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
