import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  const words = [
    'MERN Stack Developer',
    'React Developer',
    'Full Stack Web Developer',
    'Software Engineering Student'
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const fullWord = words[currentWordIndex];
      
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullWord) {
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="linear-grid"></div>

      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            Available for Software Development Internships
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Aniket Gawande</span>
          </h1>
          <h2 className="hero-subtitle">
            A <span className="typewriter-text">{currentText}</span>
            <span className="typewriter-cursor">|</span>
          </h2>
          <p className="hero-desc">
            I build modern, scalable web applications using the MERN Stack and enjoy solving real-world problems through clean code, intuitive user interfaces, and continuous learning. Currently exploring Artificial Intelligence while strengthening my software engineering skills.
          </p>

          <div className="hero-actions">
            <button onClick={() => handleScrollTo('projects')} className="btn-primary">
              View Projects
              <ArrowRight size={16} />
            </button>
            <button onClick={() => handleScrollTo('contact')} className="btn-secondary">
              Contact Me
            </button>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/aniketgawande" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/aniketgawande" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="mailto:aniketgawande2509@gmail.com" className="hero-social-link" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-wrapper floating-element">
            <div className="layered-visual-container">
              {/* Floating Code Card behind */}
              <div className="floating-code-card glass-card">
                <div className="code-card-header">
                  <div className="code-dots">
                    <span className="code-dot red"></span>
                    <span className="code-dot yellow"></span>
                    <span className="code-dot green"></span>
                  </div>
                  <span className="code-tab">MahaFortGuide.jsx</span>
                </div>
                <div className="code-card-body">
                  <span className="code-purple">const</span> <span className="code-blue">Aniket</span> = &#123;<br />
                  &nbsp;&nbsp;college: <span className="code-green">"PCCOE"</span>,<br />
                  &nbsp;&nbsp;branch: <span className="code-green">"IT"</span>,<br />
                  &nbsp;&nbsp;gpa: <span className="code-yellow">8.99</span><br />
                  &#125;;
                </div>
              </div>

              {/* Profile Image Wrapper in front */}
              <div className="profile-image-wrapper">
                <img 
                  src="/profile.jpg" 
                  alt="Aniket Gawande" 
                  className="profile-image"
                />
                <div className="profile-image-overlay"></div>
              </div>

              {/* Floating Badge */}
              <div className="floating-badge-it glass-card">
                🎓 PCCOE IT Student
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding-top: 6rem;
          overflow: hidden;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 2rem;
          align-items: center;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 0.95rem;
          border-radius: 9999px;
          background: var(--bg-accent-alpha);
          border: 1px solid var(--border-glow);
          color: var(--text-primary);
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
        }

        .badge-pulse {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: var(--accent-secondary);
          position: relative;
          display: inline-block;
        }

        .badge-pulse::after {
          content: '';
          width: 100%;
          height: 100%;
          background-color: var(--accent-secondary);
          border-radius: 50%;
          position: absolute;
          top: 0;
          left: 0;
          animation: pulse 1.8s infinite ease-in-out;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(3.0); opacity: 0; }
        }

        .hero-title {
          font-size: 3.75rem;
          line-height: 1.15;
          margin-bottom: 0.75rem;
          letter-spacing: -0.03em;
        }

        .hero-subtitle {
          font-size: 2.15rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          height: 3.25rem;
        }

        .typewriter-text {
          color: var(--text-primary);
        }

        .typewriter-cursor {
          color: var(--accent-color);
          font-weight: 300;
          animation: blink 0.8s infinite;
          margin-left: 2px;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-desc {
          font-size: 1.05rem;
          color: var(--text-secondary);
          max-width: 580px;
          margin-bottom: 2.25rem;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .hero-socials {
          display: flex;
          gap: 1rem;
        }

        .hero-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 6px;
          border: 1px solid var(--border-color);
          background: var(--bg-card);
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .hero-social-link:hover {
          color: var(--text-primary);
          border-color: var(--text-primary);
          transform: translateY(-2px);
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          position: relative;
        }

        .visual-wrapper {
          width: 100%;
          max-width: 440px;
        }

        .layered-visual-container {
          position: relative;
          width: 100%;
          height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Profile Image Wrapper styling */
        .profile-image-wrapper {
          position: relative;
          z-index: 2;
          width: 230px;
          height: 310px;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-lg), 0 0 30px var(--accent-glow);
          background-color: var(--bg-card);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s;
        }

        .profile-image-wrapper:hover {
          transform: scale(1.02) translateY(-4px);
          border-color: var(--border-glow);
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: contrast(1.05) brightness(0.95);
          transition: filter 0.3s;
        }

        .profile-image-wrapper:hover .profile-image {
          filter: contrast(1.08) brightness(1.0);
        }

        /* Gradient overlay to fade bottom edge */
        .profile-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(3, 3, 3, 0.4) 0%, transparent 40%);
          pointer-events: none;
        }

        /* Floating Code Card styling */
        .floating-code-card {
          position: absolute;
          z-index: 1;
          bottom: 20px;
          left: 0px;
          width: 220px;
          padding: 1rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          text-align: left;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-md);
          transform: rotate(-4deg) translate(-20px, 10px);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .layered-visual-container:hover .floating-code-card {
          transform: rotate(-2deg) translate(-35px, 0px) scale(1.03);
        }

        .code-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .code-dots {
          display: flex;
          gap: 3px;
        }

        .code-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .code-dot.red { background-color: #ef4444; }
        .code-dot.yellow { background-color: #f59e0b; }
        .code-dot.green { background-color: #10b981; }

        .code-tab {
          font-size: 0.65rem;
          color: var(--text-muted);
        }

        .code-card-body {
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .code-purple { color: #c678dd; }
        .code-blue { color: #61afef; }
        .code-green { color: #98c379; }
        .code-yellow { color: #d19a66; }

        /* Floating Badge styling */
        .floating-badge-it {
          position: absolute;
          z-index: 3;
          top: 30px;
          right: 10px;
          padding: 0.4rem 0.8rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--accent-secondary);
          border: 1px solid var(--border-color);
          border-radius: 9999px;
          box-shadow: var(--shadow-md);
          transform: rotate(4deg) translate(20px, -10px);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .layered-visual-container:hover .floating-badge-it {
          transform: rotate(2deg) translate(35px, -5px) scale(1.05);
        }

        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
          
          .hero-content {
            align-items: center;
            text-align: center;
          }
          
          .hero-subtitle {
            justify-content: center;
          }
          
          .hero-title {
            font-size: 2.85rem;
          }

          .hero-desc {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-actions {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.25rem;
          }
          .hero-subtitle {
            font-size: 1.35rem;
            height: 2.5rem;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-actions button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
