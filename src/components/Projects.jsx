import React, { useState } from 'react';
import { ExternalLink, Code2, Calendar, X } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'MahaFort Guide - AI Heritage Platform',
      category: 'MERN Stack',
      description: 'An AI-powered heritage tourism platform built using the MERN Stack. It assists tourists with historical insights, provides weather integrations, secure user account management, and maps out fortifications in Maharashtra.',
      image: '🏰',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Leaflet', 'Gemini API'],
      demoLink: 'https://mahafort-guide-t3oe.vercel.app/',
      codeLink: 'https://github.com/aniket-gawande/MAHAFORT-GUIDE.git',
      date: '2026',
      features: [
        'Secure user authentication and token handling',
        'Interactive Leaflet maps identifying historical site positions',
        'AI chatbot integrations utilizing the Google Gemini API to query fort histories',
        'Real-time weather status API integration for safe trekking recommendations'
      ]
    },
    {
      id: 2,
      title: 'COVID-19 India Prediction Dashboard',
      category: 'Data Analysis & ML',
      description: 'An interactive analytical dashboard representing COVID trends in India. Built to provide rich data visualizations and forecast upcoming pandemic statistics using time-series forecasting models.',
      image: '📈',
      tech: ['Python', 'Streamlit', 'Plotly', 'Pandas', 'NumPy', 'ARIMA'],
      demoLink: 'https://github.com/aniket-gawande/COVID-19-DATA-PREDICTION-AND-ANALYSIS.git',
      codeLink: 'https://github.com/aniket-gawande/COVID-19-DATA-PREDICTION-AND-ANALYSIS.git',
      date: '2025',
      features: [
        'Interactive line, bar, and map plots created with Plotly',
        'Time-series forecasting module using the ARIMA predictive model',
        'CSV/Excel data import and cleaning filters using Pandas',
        'Clean dashboard deployment utilizing the Streamlit interface'
      ]
    },
    {
      id: 3,
      title: 'Modular Data Visualizer',
      category: 'Desktop Software',
      description: 'A desktop Java application that parses CSV datasets and dynamically visualizes data using multiple chart modules. Engineered using OOP guidelines and swing layout panels.',
      image: '📊',
      tech: ['Java', 'Swing', 'JUnit', 'OpenCSV'],
      demoLink: 'https://github.com/aniket-gawande/Modular-Data-Visualiser.git',
      codeLink: 'https://github.com/aniketgawandehttps://github.com/aniket-gawande/Modular-Data-Visualiser.git',
      date: '2025',
      features: [
        'Robust custom CSV parsing using the OpenCSV library',
        'Dynamic chart render engine (Bar charts, Scatter plots, Line charts)',
        'Unit test coverage created with JUnit to assure data parsing accuracy',
        'Interactive Java Swing desktop viewport'
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section reveal">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>Real-world applications and academic coding projects reflecting code quality and MERN capabilities.</p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-preview">
                <span className="preview-emoji">{project.image}</span>
                <span className="project-tag">{project.category}</span>
              </div>
              <div className="project-body">
                {/* Project Header using H3 */}
                <h3 className="project-title">{project.title}</h3>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-pill">{t}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <button 
                    onClick={() => setSelectedProject(project)} 
                    className="details-btn"
                  >
                    View Details
                  </button>
                  <div className="project-links">
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link-icon"
                      aria-label="Source Code"
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link-icon"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Modal overlay */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close modal">
              <X size={20} />
            </button>

            <div className="modal-header">
              <span className="modal-emoji">{selectedProject.image}</span>
              <div>
                <h3 className="modal-title">{selectedProject.title}</h3>
                <div className="modal-meta">
                  <span className="modal-meta-item">
                    <Code2 size={14} />
                    {selectedProject.category.toUpperCase()}
                  </span>
                  <span className="modal-meta-item">
                    <Calendar size={14} />
                    {selectedProject.date}
                  </span>
                </div>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4>Overview</h4>
                <p>{selectedProject.description}</p>
              </div>

              <div className="modal-section">
                <h4>Key Features</h4>
                <ul className="modal-features-list">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4>Technologies Used</h4>
                <div className="project-tech">
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className="tech-pill">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-actions">
              <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <ExternalLink size={14} />
                Live Preview
              </a>
              <a href={selectedProject.codeLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                Source Code
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .projects-section {
          position: relative;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          text-align: left;
          height: 100%;
        }

        .project-preview {
          height: 150px;
          background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--terminal-header) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          border-bottom: 1px solid var(--border-color);
        }

        .preview-emoji {
          font-size: 3.5rem;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.5));
        }

        .project-tag {
          position: absolute;
          top: 0.85rem;
          right: 0.85rem;
          padding: 0.25rem 0.6rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--accent-secondary);
        }

        .project-body {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .project-title {
          font-size: 1.15rem;
          margin-bottom: 0.6rem;
          font-weight: 700;
        }

        .project-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
          line-height: 1.5;
          flex-grow: 1;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-bottom: 1.25rem;
        }

        .tech-pill {
          font-size: 0.72rem;
          font-family: var(--font-mono);
          padding: 0.15rem 0.45rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          color: var(--text-secondary);
        }

        .project-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--border-color);
          padding-top: 0.85rem;
        }

        .details-btn {
          background: transparent;
          color: var(--accent-color);
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .details-btn:hover {
          color: var(--accent-secondary);
        }

        .project-links {
          display: flex;
          gap: 0.6rem;
        }

        .project-link-icon {
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 4px;
          border: 1px solid var(--border-color);
          background: var(--bg-card);
          transition: all 0.2s ease;
        }

        .project-link-icon:hover {
          color: var(--text-primary);
          border-color: var(--text-primary);
          transform: translateY(-1px);
        }

        /* Modal styling */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .modal-content {
          max-width: 580px;
          width: 100%;
          padding: 2rem;
          position: relative;
          text-align: left;
          max-height: 85vh;
          overflow-y: auto;
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: transparent;
          color: var(--text-secondary);
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .modal-close:hover {
          color: var(--text-primary);
        }

        .modal-header {
          display: flex;
          gap: 1.25rem;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .modal-emoji {
          font-size: 3rem;
          background: var(--bg-secondary);
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          border: 1px solid var(--border-color);
        }

        .modal-title {
          font-size: 1.35rem;
          margin-bottom: 0.35rem;
        }

        .modal-meta {
          display: flex;
          gap: 0.85rem;
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .modal-meta-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .modal-section {
          margin-bottom: 1.5rem;
        }

        .modal-section h4 {
          font-size: 0.95rem;
          margin-bottom: 0.4rem;
          color: var(--accent-color);
        }

        .modal-section p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .modal-features-list {
          padding-left: 1.15rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .modal-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1.75rem;
          border-top: 1px solid var(--border-color);
          padding-top: 1.25rem;
        }

        .modal-actions a {
          flex: 1;
          justify-content: center;
        }

        @media (max-width: 576px) {
          .modal-content {
            padding: 1.25rem;
          }
          .modal-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
          .modal-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
