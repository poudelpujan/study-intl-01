import React from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineAlternateEmail,
  MdOutlineLocalPhone,
  MdOutlineLocationOn,
} from "react-icons/md";

const ContactUs = () => {
  return (
    <React.Fragment>
      {/* <div className="contact-container">
        <h1 className="contact-heading">Get in touch</h1>
        <div className="profile-section">
          <img
            className="profile-image"
            src="https://via.placeholder.com/150"
            alt="Profile image"
          />
          <div className="profile-info">
            <h2 className="profile-name">John Doe</h2>
            <h3 className="profile-role">CEO</h3>

            <p className="profile-contact-info">
              <i className="fas fa-phone"></i> +1 (555) 123-4567 <br />
              <i className="fas fa-envelope"></i> john.doe@example.com
            </p>
          </div>
        </div>

        <div className="contact-text">
          <p>
            Thank you for your interest in our business. We'd love to hear from
            you! Please feel free to reach out to us via phone or email, or
            connect with us on social media.
          </p>
        </div>
      </div> */}

      <section className="contact-section">
        <div className="container">
          <div className="contact-heading">
            <h2>Get in touch</h2>
          </div>
          <div className="contacts">
            <div className="contact email">
              <span className="label">
                Email <MdOutlineAlternateEmail />
              </span>
              <Link href="#">shaileshistudy2010@gmail.com</Link>
              <Link href="#">istudyintl2010@gmail.com</Link>
            </div>
            <div className="contact phone">
              <span className="label">
                Phone <MdOutlineLocalPhone />
              </span>
              <Link href="#">01-5918853</Link>
              <Link href="#">+977-9801848237</Link>
            </div>
            <div className="contact location">
              <span className="label">
                Location <MdOutlineLocationOn />
              </span>
              <Link href="#">
                Bagbazar, Kathmandu, Opposite of Everest Bank
              </Link>
            </div>
          </div>
          <div className="contact-text">
            <p>
              Thank you for choosing us for your abroad studies. We'd love to
              hear from you! Please feel free to reach out to us via phone or
              email, or connect with us on social media.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactUs;
