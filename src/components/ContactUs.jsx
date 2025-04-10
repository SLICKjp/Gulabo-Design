import React from "react";
import contactimg from "../assets/contactus/contact.png";


const ContactUs = () => {
  return (
    <div className="contactus">
       
       <div className="head-container">
        <p className="contact-big-text-one">Let's</p>
        <p className="contact-big-text-two">Connect</p>
       </div>


      <div className="text-container">
        <div className="sub-container">
        <p className="contact-text-one">Let’s create something amazing together! </p>
        <p className="second-text">Whether you’re looking to collaborate, revamp your brand, or just say hello, we’d love to hear from you. </p>
        <p className="third-text">Let’s bring your vision to life!</p>
        </div>

        <div className="image-contact">
        <img src={contactimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
