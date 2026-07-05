import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal as TerminalIcon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'timeline', 'skills', 'projects', 'console', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'timeline', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setIsOpen(false);
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
    <nav className={`fixed-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
          <TerminalIcon className="logo-icon" />
          <span className="logo-text">Aniket<span className="logo-accent">.dev</span></span>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-desktop">
          <div className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a 
            href="#contact" 
            className="btn-primary nav-cta"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
          >
            Connect
          </a>
        </div>

        {/* Mobile Toggle Buttons */}
        <div className="nav-mobile-controls">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`mobile-drawer-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary mobile-drawer-cta"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
          >
            Connect
          </a>
        </div>
      </div>

      <style>{`
        .fixed-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1.5rem 0;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .fixed-nav.scrolled {
          padding: 0.85rem 0;
          background: var(--glass-bg);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.35rem;
          color: var(--text-primary);
        }

        .logo-icon {
          color: var(--accent-color);
        }

        .logo-accent {
          color: var(--accent-secondary);
        }

        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-links {
          display: flex;
          gap: 1.75rem;
        }

        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          position: relative;
          padding: 0.25rem 0;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--text-primary);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-color), var(--accent-secondary));
          transition: width 0.3s ease;
        }

        .nav-link:hover::after, .nav-link.active::after {
          width: 100%;
        }

        .nav-cta {
          padding: 0.45rem 1.15rem;
          font-size: 0.85rem;
          border-radius: 6px;
        }

        .nav-mobile-controls {
          display: none;
          align-items: center;
        }

        .mobile-menu-btn {
          background: transparent;
          color: var(--text-primary);
          cursor: pointer;
        }

        /* Mobile Drawer */
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 280px;
          height: 100vh;
          background: var(--bg-primary);
          border-left: 1px solid var(--border-color);
          z-index: 99;
          padding: 6rem 2rem 2rem;
          transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: var(--shadow-lg);
        }

        .mobile-drawer.open {
          right: 0;
        }

        .mobile-drawer-links {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          text-align: left;
        }

        .mobile-drawer-link {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-secondary);
          padding: 0.5rem 0;
          border-bottom: 1px solid var(--border-color);
        }

        .mobile-drawer-link.active, .mobile-drawer-link:hover {
          color: var(--accent-color);
          padding-left: 0.5rem;
        }

        .mobile-drawer-cta {
          margin-top: 1rem;
          width: 100%;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .nav-desktop {
            display: none;
          }
          .nav-mobile-controls {
            display: flex;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
