import React from "react";
import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>nigamkushal0@gmail.com</h5>
            <a href="mailto:1816513009@kit.ac.in" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 6307463138</h5>
            <a
              href="https://api.whatsapp.com/send?phone=916307463138"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
