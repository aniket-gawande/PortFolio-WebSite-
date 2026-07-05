import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import { ArrowUp, Play, Pause, Music } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isMobile, setIsMobile] = useState(false);
  const [spotifyPlaying, setSpotifyPlaying] = useState(true);
  const [spotifyProgress, setSpotifyProgress] = useState(38);

  // Fading loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Scroll Indicators & Back-To-Top trigger
  useEffect(() => {
    const handleScroll = () => {
      // Back to top trigger
      setShowScrollTop(window.scrollY > 400);

      // Scroll progress percentage calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check mobile user-agent to disable custom cursor on touchscreen
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Custom cursor movement listener
  useEffect(() => {
    if (isMobile) return;

    const moveMouse = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveMouse);
    return () => window.removeEventListener('mousemove', moveMouse);
  }, [isMobile]);

  // Scroll-Reveal Animation Observer
  useEffect(() => {
    if (loading) return;

    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    reveals.forEach((element) => observer.observe(element));
    return () => reveals.forEach((element) => observer.unobserve(element));
  }, [loading]);

  // Mock Spotify progress animation
  useEffect(() => {
    if (!spotifyPlaying) return;
    const interval = setInterval(() => {
      setSpotifyProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [spotifyPlaying]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="portfolio-app">
      {/* 1. Loading Screen (Apple/Linear-style booting console) */}
      <div className={`loading-screen ${!loading ? 'fade-out' : ''}`}>
        <div className="loader-terminal">
          <div className="loader-header">&gt;_ boot_sequence.sh</div>
          <div className="loader-logs">
            <div>Initializing AniketOS v1.2... SUCCESS</div>
            <div>Retrieving PCCOE credentials... 8.99 CGPA OK</div>
            <div>Mapping MERN stack modules... READY</div>
            <div>Mounting interactive canvas visualizer... OK</div>
          </div>
          <div className="loader-bar-container">
            <div className="loader-bar-fill"></div>
          </div>
        </div>
      </div>

      {/* 2. Scroll Progress Bar */}
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      {/* 3. Custom Moving Cursor Glow (Vercel/Linear style) */}
      {!isMobile && (
        <div 
          className="cursor-glow" 
          style={{ 
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`
          }}
        />
      )}

      {/* 4. Navbar */}
      <Navbar />

      {/* 5. Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Stats />
        <Terminal />
        <Contact />
      </main>

      {/* 6. Back to Top Button */}
      <button 
        onClick={handleScrollToTop} 
        className={`scroll-top-btn glass-card ${showScrollTop ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      {/* 7. Apple/Linear-style Dark Footer & Spotify Widget */}
      <footer className="footer">
        <div className="container footer-grid-layout">
          
          {/* Left: Spotify Widget */}
          <div className="spotify-widget glass-card">
            <div className="spotify-header">
              <div className="spotify-indicator">
                <span className={`spotify-dot ${spotifyPlaying ? 'pulse' : ''}`}></span>
                <span className="spotify-status-text">{spotifyPlaying ? 'NOW PLAYING' : 'PAUSED'}</span>
              </div>
              <Music size={16} className="spotify-icon" />
            </div>
            
            <div className="spotify-body">
              <div className="spotify-art-placeholder">🎵</div>
              <div className="spotify-track-meta">
                <span className="spotify-track-name">Resonance</span>
                <span className="spotify-artist-name">HOME - Synthwave Code Mix</span>
              </div>
              <button 
                onClick={() => setSpotifyPlaying(!spotifyPlaying)}
                className="spotify-control-btn"
                aria-label="Toggle Play"
              >
                {spotifyPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}
              </button>
            </div>

            <div className="spotify-timeline-bar">
              <div className="spotify-timeline-fill" style={{ width: `${spotifyProgress}%` }}></div>
            </div>
          </div>

          {/* Right: Copyright */}
          <div className="footer-meta-content">
            <p className="footer-credits">
              Designed, Developed & Maintained by <span className="text-white">Aniket Gawande</span>
            </p>
            <p className="footer-rights">
              © {new Date().getFullYear()} All Rights Reserved.
            </p>
            <div className="footer-location-indicator">
              <span className="indicator-pulse-green"></span>
              Pune, Maharashtra
            </div>
          </div>

        </div>
      </footer>

      <style>{`
        .portfolio-app {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: var(--bg-primary);
        }

        /* Scroll Top Button styling */
        .scroll-top-btn {
          position: fixed;
          bottom: 2rem;
          left: 2rem;
          z-index: 90;
          width: 40px;
          height: 40px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          cursor: pointer;
          opacity: 0;
          pointer-events: none;
          transform: translateY(20px);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .scroll-top-btn.visible {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }

        .scroll-top-btn:hover {
          color: var(--accent-color);
          border-color: var(--accent-color);
          transform: translateY(-2px);
        }

        /* Footer Grid styling */
        .footer {
          border-top: 1px solid var(--border-color);
          background: var(--bg-secondary);
          padding: 3rem 0;
          margin-top: auto;
          text-align: left;
        }

        .footer-grid-layout {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 3rem;
        }

        /* Spotify Widget */
        .spotify-widget {
          padding: 1rem;
          max-width: 360px;
          width: 100%;
          border: 1px solid var(--border-color);
        }

        .spotify-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .spotify-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .spotify-dot {
          width: 6px;
          height: 6px;
          background-color: #1db954;
          border-radius: 50%;
        }

        .spotify-dot.pulse {
          animation: spotifyPulse 1.8s infinite ease-in-out;
        }

        @keyframes spotifyPulse {
          0% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(2.2); opacity: 0; }
          100% { transform: scale(1); opacity: 0.9; }
        }

        .spotify-status-text {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 700;
          color: #1db954;
          letter-spacing: 0.05em;
        }

        .spotify-icon {
          color: #1db954;
        }

        .spotify-body {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .spotify-art-placeholder {
          width: 40px;
          height: 40px;
          background: #191414;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          border: 1px solid var(--border-color);
        }

        .spotify-track-meta {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .spotify-track-name {
          font-weight: 700;
          font-size: 0.88rem;
          color: var(--text-primary);
        }

        .spotify-artist-name {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .spotify-control-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .spotify-control-btn:hover {
          border-color: #1db954;
          color: #1db954;
          transform: scale(1.05);
        }

        .spotify-timeline-bar {
          width: 100%;
          height: 3px;
          background: var(--border-color);
          border-radius: 9999px;
          overflow: hidden;
        }

        .spotify-timeline-fill {
          height: 100%;
          background-color: #1db954;
          border-radius: 9999px;
          transition: width 1s linear;
        }

        /* Footer Meta */
        .footer-meta-content {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.5rem;
        }

        .footer-credits {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .text-white {
          color: var(--text-primary);
          font-weight: 600;
        }

        .footer-rights {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .footer-location-indicator {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.45rem;
          margin-top: 0.25rem;
        }

        .indicator-pulse-green {
          width: 6px;
          height: 6px;
          background-color: #10b981;
          border-radius: 50%;
          display: inline-block;
          animation: pulseGreen 2s infinite ease-in-out;
        }

        @keyframes pulseGreen {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        @media (max-width: 768px) {
          .footer-grid-layout {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .spotify-widget {
            max-width: 100%;
          }
          .footer-meta-content {
            align-items: flex-start;
          }
          .scroll-top-btn {
            bottom: 2rem;
            left: auto;
            right: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
