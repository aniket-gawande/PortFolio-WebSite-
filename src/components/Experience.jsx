import React from 'react';
import { Briefcase, GraduationCap, Calendar, Compass, ShieldAlert } from 'lucide-react';

export default function Experience() {
  const workExperience = [
    {
      role: 'Web Development Intern',
      company: 'VaultofCodes',
      date: 'June 2026 – Present',
      desc: 'Working on real-world web development projects using React.js, Node.js, MongoDB, REST APIs, Git, and GitHub while improving software development best practices.'
    },
    {
      role: 'Google Student Ambassador',
      company: 'Google / Campus Ambassador Program',
      date: 'Sept 2025 – Jan 2026',
      desc: 'Promoted Google Gemini across campus, organized awareness campaigns, collaborated with students, completed multiple ambassador tasks, and earned performance-based rewards.'
    },
    {
      role: 'IEEE Student Volunteer',
      company: 'IEEE Student Branch PCCOE',
      date: '2025 - Present',
      desc: 'Worked as Photographer and Video Editor during IEEE events and technical activities while contributing to event management and media creation.'
    }
  ];

  const education = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'Pimpri Chinchwad College of Engineering (PCCOE), Pune',
      date: '2024 – Present',
      desc: 'Focused on Data Structures, Databases, OOP, Software Engineering. Actively participating in coding contests, hackathons and tech communities. Current CGPA: 8.99'
    },
    {
      degree: 'Higher Secondary Education (Class XII)',
      institution: 'State Board College, Maharashtra',
      date: '2022 – 2024',
      desc: 'Core subjects: Physics, Chemistry, Mathematics, Computer Science. Secured a 98.33 Percentile in MHT CET and In 12th boards Exam scored 87%.'
    },
    {
      degree: 'Secondary School Education (Class X)',
      institution: 'Shri Vyankatesh Balaji English Highschool',
      date: '2021 – 2022',
      desc: '10th Percentage- 95.47'
    }
    
  ];

  return (
    <section id="timeline" className="experience-section reveal">
      <div className="container">
        <div className="section-header">
          <h2>Journey & Timeline</h2>
          <p>My academic path and professional student engagements leading to building modern web applications.</p>
        </div>

        <div className="timeline-grid">
          {/* Work Experience Timeline */}
          <div className="timeline-column">
            <h3 className="column-title">
              <Briefcase className="timeline-icon" size={20} />
              Professional Engagements
            </h3>
            
            <div className="timeline">
              {workExperience.map((item, index) => (
                <div key={index} className="timeline-item">
                  <span className="timeline-dot"></span>
                  <div className="timeline-header-meta">
                    <div>
                      <h4 className="timeline-role">{item.role}</h4>
                      <span className="timeline-company">{item.company}</span>
                    </div>
                    <span className="timeline-date">{item.date}</span>
                  </div>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="timeline-column">
            <h3 className="column-title">
              <GraduationCap className="timeline-icon" size={22} />
              Education Path
            </h3>
            
            <div className="timeline">
              {education.map((item, index) => (
                <div key={index} className="timeline-item">
                  <span className="timeline-dot"></span>
                  <div className="timeline-header-meta">
                    <div>
                      <h4 className="timeline-role">{item.degree}</h4>
                      <span className="timeline-company">{item.institution}</span>
                    </div>
                    <span className="timeline-date">{item.date}</span>
                  </div>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .experience-section {
          position: relative;
        }

        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 4rem;
          align-items: start;
        }

        .timeline-column {
          text-align: left;
        }

        .column-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 2.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-primary);
        }

        .timeline-icon {
          color: var(--accent-color);
        }

        @media (max-width: 992px) {
          .timeline-grid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
        }
      `}</style>
    </section>
  );
}
