import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Phone, MapPin, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message cannot be empty';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Contact Form Fetch Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Clear status toast after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="contact-section reveal">
      <div className="container">
        <div className="section-header">
          <h2>Let's Build Something Amazing</h2>
          <p>I'm currently looking for Software Development Internships, Full Stack Development opportunities, freelance projects, and collaborations. Feel free to connect with me.</p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="contact-info-card glass-card">
            <h3 className="card-heading">Let's Connect</h3>
            <p className="card-text">
              Have an idea, project, or role you want to discuss? Send a message directly, or reach out through my professional socials or email coordinates.
            </p>

            <ul className="contact-details-list">
              <li className="contact-detail-item">
                <div className="detail-icon-wrapper">
                  <Mail size={18} className="detail-icon" />
                </div>
                <div>
                  <span className="detail-label">Email Address</span>
                  <a href="mailto:aniketgawande2509@gmail.com" className="detail-value">
                    aniketgawande2509@gmail.com
                  </a>
                </div>
              </li>
              <li className="contact-detail-item">
                <div className="detail-icon-wrapper">
                  <Phone size={18} className="detail-icon" />
                </div>
                <div>
                  <span className="detail-label">Phone</span>
                  <a href="tel:+918275836349" className="detail-value">
                    +91 8275836349
                  </a>
                </div>
              </li>
              <li className="contact-detail-item">
                <div className="detail-icon-wrapper">
                  <MapPin size={18} className="detail-icon" />
                </div>
                <div>
                  <span className="detail-label">Location</span>
                  <span className="detail-value text-white">
                    Pune, Maharashtra, India
                  </span>
                </div>
              </li>
              <li className="contact-detail-item">
                <div className="detail-icon-wrapper">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <span className="detail-label">LinkedIn</span>
                  <a 
                    href="linkedin.com/in/aniket-gawande25" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="detail-value"
                  >
                    linkedin.com/in/aniket-gawande25
                  </a>
                </div>
              </li>
              <li className="contact-detail-item">
                <div className="detail-icon-wrapper">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
                <div>
                  <span className="detail-label">GitHub</span>
                  <a 
                    href="https://github.com/aniket-gawande" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="detail-value"
                  >
                    github.com/aniket-gawande
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Interactive Form Card */}
          <div className="contact-form-card glass-card">
            <h3 className="card-heading">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className={`form-input ${errors.name ? 'input-error' : ''}`}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@company.com"
                  className={`form-input ${errors.email ? 'input-error' : ''}`}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How can I help you?"
                  rows="4"
                  className={`form-input ${errors.message ? 'input-error' : ''}`}
                ></textarea>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="btn-primary form-submit-btn" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Transmitting...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Toast Notification */}
      {submitStatus === 'success' && (
        <div className="toast-success glass-card">
          <CheckCircle2 className="toast-icon" />
          <div>
            <div className="toast-title">Message Sent Successfully!</div>
            <div className="toast-body">Thank you, I will get back to you shortly.</div>
          </div>
        </div>
      )}

      {/* Error Toast Notification */}
      {submitStatus === 'error' && (
        <div className="toast-error glass-card">
          <AlertCircle className="toast-icon-error" />
          <div>
            <div className="toast-title">Message Transmission Failed</div>
            <div className="toast-body">SMTP credentials not set or server offline.</div>
          </div>
        </div>
      )}

      <style>{`
        .contact-section {
          position: relative;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 3rem;
          align-items: stretch;
        }

        .contact-info-card, .contact-form-card {
          padding: 2.25rem;
          text-align: left;
          display: flex;
          flex-direction: column;
        }

        .card-heading {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
        }

        .card-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.55;
        }

        .contact-details-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-detail-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .detail-icon-wrapper {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--bg-accent-alpha);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .detail-icon {
          color: var(--accent-color);
        }

        .detail-label {
          display: block;
          font-size: 0.72rem;
          text-transform: uppercase;
          color: var(--text-muted);
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 0.15rem;
        }

        .detail-value {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          word-break: break-all;
        }

        .detail-value:hover {
          color: var(--accent-color);
        }

        /* Form styling */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
          flex-grow: 1;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .form-input {
          padding: 0.75rem 0.95rem;
          border-radius: 6px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          font-size: 0.92rem;
          transition: all 0.3s ease;
        }

        .form-input::placeholder {
          color: var(--text-muted);
        }

        .form-input:focus {
          border-color: var(--accent-color);
          box-shadow: 0 0 8px var(--border-glow);
          background: var(--bg-card);
        }

        .input-error {
          border-color: #ef4444;
        }

        .input-error:focus {
          box-shadow: 0 0 8px rgba(239, 68, 68, 0.2);
          border-color: #ef4444;
        }

        .error-text {
          font-size: 0.75rem;
          color: #ef4444;
          font-weight: 500;
        }

        .form-submit-btn {
          width: 100%;
          justify-content: center;
          margin-top: 0.5rem;
          border-radius: 6px;
        }

        /* Spinner animation */
        .spinner {
          width: 14px;
          height: 14px;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          border-top-color: #fff;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Toast Success Notification styling */
        .toast-success {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 1100;
          padding: 1.15rem 1.65rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          border-left: 4px solid #10b981;
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .toast-icon {
          color: #10b981;
          flex-shrink: 0;
        }

        .toast-icon-error {
          color: #ef4444;
          flex-shrink: 0;
        }

        .toast-title {
          font-weight: 700;
          font-size: 0.92rem;
        }

        .toast-body {
          font-size: 0.82rem;
          color: var(--text-secondary);
        }

        .toast-error {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 1100;
          padding: 1.15rem 1.65rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          border-left: 4px solid #ef4444;
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 576px) {
          .toast-success {
            left: 1rem;
            right: 1rem;
            bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
