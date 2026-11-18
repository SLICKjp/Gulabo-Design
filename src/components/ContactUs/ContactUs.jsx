import { Link } from "react-router-dom";
import "./contactus.css";

const ContactUs = () => {
	return (
		<section id="contact" className="container cta">
			<div className="cta-box">
				<h2 className="display cta-title">Got something in mind? Let’s make it.</h2>
				<div className="cta-actions">
					<Link className="btn btn-light cta-btn" to="/contact-form">
						Start a project <span className="arrow">→</span>
					</Link>
					<a className="cta-email" href="mailto:hello@gulabodesign.com">
						hello@gulabodesign.com
					</a>
				</div>
			</div>
		</section>
	);
};

export default ContactUs;
