import { Fragment, useState } from "react";
import { useEffect } from "react";
import { buttonHover } from "../utils";

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    buttonHover();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        const successMessage = result.message || 'Thank you for your message! I\'ll get back to you soon.';
        setFormStatus({ 
          type: 'success', 
          message: successMessage
        });
        e.target.reset();
      } else {
        setFormStatus({ 
          type: 'error', 
          message: result.error || 'Something went wrong. Please try again.' 
        });
      }
    } catch (error) {
      setFormStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Fragment>
      {/* Section Contacts Info */}
      <div className="section contacts" id="next_section">
        <div className="content">
          {/* title */}
          <div className="title">
            <div className="title_inner">Contact Info</div>
          </div>
          {/* contacts items */}
          <div className="service-items">
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-phone" />
                </div>
                <div className="name">Phone</div>
                <div className="text"><a href="tel:812-343-5020">812-343-5020</a></div>
              </div>
            </div>
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-envelope" />
                </div>
                <div className="name">Email</div>
                <div className="text">
                  <a href="mailto:spensermcconnell@gmail.com">
                  spensermcconnell@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-map-marker-alt" />
                </div>
                <div className="name">Location</div>
                <div className="text">Indianapolis, Indiana</div>
              </div>
            </div>
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-user-tie" />
                </div>
                <div className="name">Freelance Available</div>
                <div className="text">Available for select projects</div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
      {/* Section Contacts Form */}
      <div className="section contacts" id="section-contacts">
        <div className="content">
          {/* title */}
          <div className="title">
            <div className="title_inner">Contact Form</div>
          </div>
          {/* form */}
          <div className="contact_form content-box">
            {formStatus.type === 'success' ? (
              // Success message display
              <div style={{ 
                padding: '40px 20px',
                textAlign: 'center',
                animation: 'fadeIn 0.5s ease-in'
              }}>
                <div style={{ 
                  fontSize: '48px',
                  color: '#4bffa5',
                  marginBottom: '20px'
                }}>
                  ✓
                </div>
                <h3 style={{ 
                  color: '#4bffa5',
                  fontSize: '24px',
                  marginBottom: '15px',
                  fontWeight: '600'
                }}>
                  Message Sent Successfully!
                </h3>
                <p style={{ 
                  color: '#999',
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}>
                  Thank you for reaching out. I&apos;ll review your message and get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setFormStatus({ type: '', message: '' })}
                  className="btn btn-6"
                  style={{ marginTop: '30px' }}
                >
                  <span className="btn-text">Send Another Message</span>
                  <span className="btn-bg"></span>
                </button>
              </div>
            ) : (
              // Contact form
              <>
                <form 
                id="cform" 
                onSubmit={handleSubmit}>
                {/* Honeypot field for bots */}
                <div style={{ display: 'none' }}>
                  <input name="bot-field" tabIndex="-1" autoComplete="off" />
                </div>
                  <div className="group-val">
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Name" 
                      required 
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="group-val">
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email" 
                      required 
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="group-val ct-gr">
                    <textarea
                      name="message"
                      placeholder="Message"
                      required
                      disabled={isSubmitting}
                      defaultValue={""}
                    />
                  </div>
                  <div className="group-bts">
                    <button 
                      type="submit" 
                      className="btn btn-6"
                      disabled={isSubmitting}
                    >
                      <span className="btn-text">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </span>
                      <span className="btn-bg"></span>
                    </button>
                  </div>
                </form>
                {formStatus.type === 'error' && (
                  <div style={{ 
                    marginTop: '20px', 
                    padding: '15px', 
                    borderRadius: '4px',
                    backgroundColor: '#ff4b4b10',
                    border: '2px solid #ff4b4b',
                    textAlign: 'center'
                  }}>
                    <p style={{ 
                      margin: 0, 
                      color: '#ff4b4b',
                      fontSize: '14px'
                    }}>
                      {formStatus.message}
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        <div className="clear" />
      </div>
    </Fragment>
  );
};
export default ContactSection;
