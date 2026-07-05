import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TermIcon } from 'lucide-react';

export default function Terminal() {
  const [history, setHistory] = useState([
    { text: 'AniketOS [Version 1.2.0]', type: 'system' },
    { text: '(c) 2026 Aniket Gawande. All rights reserved.', type: 'system' },
    { text: 'Type "help" to view a list of available command utilities.', type: 'system' },
    { text: '', type: 'spacer' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  const commands = {
    help: {
      desc: 'Show list of available commands.',
      action: () => [
        'Available utilities:',
        '  about     - Brief summary of who I am & education.',
        '  skills    - List core programming languages and tools.',
        '  projects  - Summarize active student projects.',
        '  timeline  - Professional engagements & student history.',
        '  contact   - Display telephone number, email, and social links.',
        '  clear     - Wipe all records from active screen buffer.'
      ]
    },
    about: {
      desc: 'Learn about Aniket Gawande.',
      action: () => [
        'Aniket Gawande - MERN Stack Developer & Student.',
        'Institution : Pimpri Chinchwad College of Engineering (PCCOE), Pune.',
        'Degree      : B.Tech in Information Technology (Second Year).',
        'Academic CGPA: 8.99/10',
        'Focus       : Scaling clean web frontends, backend APIs, and learning AI.'
      ]
    },
    skills: {
      desc: 'List technical programming skills.',
      action: () => [
        'Frontend : HTML5, CSS3, JavaScript, React.js, Bootstrap, Tailwind',
        'Backend  : Node.js, Express.js, REST APIs',
        'Database : MongoDB, MySQL',
        'Languages: C, C++, Java, Python',
        'Tools    : Git, GitHub, Postman, VS Code',
        'CS Core  : DSA, DBMS, Operating Systems, OOP, Computer Networks'
      ]
    },
    projects: {
      desc: 'List active coding projects.',
      action: () => [
        '1. MahaFort Guide - AI Heritage Tourism site (React, Node, Express, MongoDB, Leaflet, Gemini API).',
        '2. COVID-19 India - Forecast analytics dashboard (Python, Streamlit, Plotly, Pandas, ARIMA).',
        '3. Data Visualizer - Desktop CSV graph parsing tool (Java, Swing, JUnit, OpenCSV).'
      ]
    },
    timeline: {
      desc: 'Show timeline of engagements.',
      action: () => [
        '[June 2026 - Present]  Web Development Intern at VaultofCodes',
        '[Sept 2025 - Jan 2026] Google Student Ambassador (Gemini Promotion & Tasks)',
        '[2025 - Present]        IEEE Student Volunteer (Media, Video & Photography)'
      ]
    },
    contact: {
      desc: 'Get professional contact coordinates.',
      action: () => [
        'Email    : aniketgawande2509@gmail.com',
        'Phone    : +91 8275836349',
        'GitHub   : github.com/aniketgawande',
        'LinkedIn : linkedin.com/in/aniketgawande',
        'Location : Pune, Maharashtra, India'
      ]
    },
    clear: {
      desc: 'Clear the terminal buffer.',
      action: null
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const trimmedInput = inputValue.trim().toLowerCase();
      const newHistory = [...history, { text: `Guest@Aniket.dev:~$ ${inputValue}`, type: 'input' }];

      if (trimmedInput === '') {
        setHistory(newHistory);
        setInputValue('');
        return;
      }

      if (trimmedInput === 'clear') {
        setHistory([]);
        setInputValue('');
        return;
      }

      if (commands[trimmedInput]) {
        const result = commands[trimmedInput].action();
        setHistory([
          ...newHistory,
          ...result.map(line => ({ text: line, type: 'output' })),
          { text: '', type: 'spacer' }
        ]);
      } else {
        setHistory([
          ...newHistory,
          { text: `Command not found: "${inputValue}". Type "help" for a list of valid options.`, type: 'error' },
          { text: '', type: 'spacer' }
        ]);
      }

      setInputValue('');
    }
  };

  return (
    <section id="console" className="terminal-section reveal">
      <div className="container">
        <div className="section-header">
          <h2>Interactive Shell</h2>
          <p>Navigate my academic credentials, timeline, and projects directly using the custom web console command prompt.</p>
        </div>

        <div className="terminal-window glass-card" onClick={focusInput}>
          {/* Header */}
          <div className="terminal-bar">
            <div className="bar-dots">
              <span className="dot dot-close"></span>
              <span className="dot dot-min"></span>
              <span className="dot dot-expand"></span>
            </div>
            <div className="bar-title">
              <TermIcon size={14} className="bar-icon" />
              aniket_gawande_shell.sh
            </div>
            <div className="bar-status">
              <span className="status-indicator"></span>
              online
            </div>
          </div>

          {/* Terminal Logs */}
          <div className="terminal-body">
            {history.map((log, index) => {
              if (log.type === 'spacer') {
                return <div key={index} className="terminal-spacer" />;
              }
              return (
                <div key={index} className={`terminal-line line-${log.type}`}>
                  {log.text}
                </div>
              );
            })}

            {/* Input Line */}
            <div className="terminal-input-line">
              <span className="terminal-prompt">Guest@Aniket.dev:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="terminal-real-input"
                autoComplete="off"
                autoCapitalize="none"
                spellCheck="false"
                maxLength="40"
              />
              <span className="terminal-cursor"></span>
            </div>
            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>

      <style>{`
        .terminal-section {
          position: relative;
        }

        .terminal-window {
          max-width: 800px;
          margin: 0 auto;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-color);
        }

        .terminal-bar {
          background-color: var(--terminal-header);
          padding: 0.75rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-color);
        }

        .bar-dots {
          display: flex;
          gap: 0.45rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: inline-block;
        }

        .dot-close { background-color: #ff5f56; }
        .dot-min { background-color: #ffbd2e; }
        .dot-expand { background-color: #27c93f; }

        .bar-title {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .bar-icon {
          color: var(--accent-color);
        }

        .bar-status {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .status-indicator {
          width: 6px;
          height: 6px;
          background-color: #27c93f;
          border-radius: 50%;
          display: inline-block;
        }

        .terminal-body {
          background-color: var(--terminal-bg);
          height: 350px;
          overflow-y: auto;
          padding: 1.25rem;
          font-family: var(--font-mono);
          font-size: 0.9rem;
          text-align: left;
          cursor: text;
        }

        .terminal-line {
          margin-bottom: 0.25rem;
          white-space: pre-wrap;
          word-break: break-all;
        }

        .line-system {
          color: var(--text-muted);
        }

        .line-input {
          color: var(--text-primary);
        }

        .line-output {
          color: var(--accent-secondary);
        }

        .line-error {
          color: #ef4444;
        }

        .terminal-spacer {
          height: 0.4rem;
        }

        .terminal-input-line {
          display: flex;
          align-items: center;
          position: relative;
        }

        .terminal-prompt {
          color: var(--accent-color);
          margin-right: 0.5rem;
          flex-shrink: 0;
        }

        .terminal-real-input {
          background: transparent;
          border: none;
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-size: 0.9rem;
          flex-grow: 1;
          padding: 0;
          margin: 0;
          width: 10px;
          z-index: 2;
        }

        .terminal-cursor {
          position: absolute;
          width: 7px;
          height: 14px;
          background-color: var(--accent-color);
          animation: blink 0.8s infinite;
          pointer-events: none;
        }

        @media (max-width: 576px) {
          .terminal-body {
            font-size: 0.78rem;
            height: 280px;
          }
          .terminal-prompt {
            font-size: 0.78rem;
          }
        }
      `}</style>
    </section>
  );
}
