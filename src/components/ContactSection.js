import { Fragment } from "react";
import { useEffect } from "react";
import { buttonHover } from "../utils";

const ContactSection = () => {
  useEffect(() => {
    buttonHover();
  }, []);
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
                <div className="text"><a href="tel:812-343-5020">812.343.5020</a></div>
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
                <div className="text">I am available for Freelance hire</div>
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
            <form id="cform" method="POST" data-netlify="true">
              <div className="group-val">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="group-val">
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className="group-val ct-gr">
                <textarea
                  name="message"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div className="group-bts">
                <button type="submit" className="btn btn-6">
                  <span className="btn-text">Send Message</span>
                  <span className="btn-bg"></span>
                </button>
              </div>
            </form>
            <div className="alert-success">
              <p>Thanks, your message is sent successfully.</p>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </Fragment>
  );
};
export default ContactSection;
