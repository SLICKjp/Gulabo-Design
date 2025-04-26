import React from "react";
import contactimg from "../../assets/contactus/contact.png";
import "./contactus.css";

const ContactUs = () => {
	return (
		<div className="contactus">
			<div className="head-container">
				<p className="contact-big-text-one">Let's</p>
				<p className="contact-big-text-two">Connect</p>
			</div>

			<div className="text-container">
				<div className="text-subcontainer">
					<div className="sub-container">
						<h2>
							Let’s create something <br /> amazing together!
						</h2>
						<p className="contact-text">
							Whether you’re looking to <br /> collaborate, revamp your <br />
							brand, or just say hello, we’d <br /> love to hear from you.{" "}
							<br />
							Let’s bring your vision to life!
						</p>
					</div>

					<div className="img-container">
						<div className="image-contact">
							<img src={contactimg} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
