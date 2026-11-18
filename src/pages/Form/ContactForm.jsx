import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./form.css";

const Icon = ({ children }) => (
	<span className="contact-icon" aria-hidden="true">
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
			{children}
		</svg>
	</span>
);

const ContactForm = () => {
	return (
		<>
			<Navbar />
			<main className="container contact-page">
				<header className="contact-head">
					<span className="contact-eyebrow">Contact</span>
					<h1 className="display contact-title">
						Let’s make something <span>together.</span>
					</h1>
				</header>

				<div className="contact-shell">
					{/* ---------- Info panel ---------- */}
					<aside className="contact-info">
						<div>
							<h2 className="display contact-info-title">Tell us about your project</h2>
							<p className="contact-info-text">
								A new space, a uniform for your team or a brand from scratch: share a few details
								and we’ll get back to you.
							</p>
						</div>

						<ul className="contact-list">
							<li>
								<Icon>
									<rect x="3" y="5" width="18" height="14" rx="2" />
									<path d="M3 7l9 6 9-6" />
								</Icon>
								<div>
									<span className="contact-label">Email</span>
									<a href="mailto:hello@gulabodesign.com">hello@gulabodesign.com</a>
								</div>
							</li>
							<li>
								<Icon>
									<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
								</Icon>
								<div>
									<span className="contact-label">Phone</span>
									<a href="tel:+911294009373">+91 129 400 9373</a>
								</div>
							</li>
							<li>
								<Icon>
									<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
									<circle cx="12" cy="9.5" r="2.5" />
								</Icon>
								<div>
									<span className="contact-label">Studio</span>
									<span>346, Sector 21A, Faridabad, Haryana 121002</span>
								</div>
							</li>
							<li>
								<Icon>
									<rect x="3" y="3" width="18" height="18" rx="5" />
									<circle cx="12" cy="12" r="4" />
									<circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
								</Icon>
								<div>
									<span className="contact-label">Instagram</span>
									<a href="https://www.instagram.com/gulabo.design" target="_blank" rel="noopener noreferrer">
										@gulabo.design
									</a>
								</div>
							</li>
						</ul>

						<iframe
							title="Gulabo Design studio location on Google Maps"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4326.807346831096!2d77.2968030761386!3d28.420370693682376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce6d5c36cda1f%3A0x4d70f0db1a27e207!2sGulabo%20Design!5e1!3m2!1sen!2sin!4v1749966472271!5m2!1sen!2sin"
							className="contact-map"
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</aside>

					{/* ---------- Form ---------- */}
					{/* TODO: hook this up to an email/form service; the button doesn't send anything yet */}
					<form className="contact-form" onSubmit={(e) => e.preventDefault()}>
						<div className="field-row">
							<div className="field">
								<label htmlFor="firstname">First name</label>
								<input id="firstname" name="firstname" type="text" autoComplete="given-name" placeholder="Priya" />
							</div>
							<div className="field">
								<label htmlFor="lastname">Last name</label>
								<input id="lastname" name="lastname" type="text" autoComplete="family-name" placeholder="Sharma" />
							</div>
						</div>
						<div className="field-row">
							<div className="field">
								<label htmlFor="email">Email</label>
								<input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" />
							</div>
							<div className="field">
								<label htmlFor="phone">
									Phone <span className="field-optional">(optional)</span>
								</label>
								<input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91" />
							</div>
						</div>
						<div className="field">
							<label htmlFor="message">About your project</label>
							<textarea
								id="message"
								name="message"
								rows="6"
								placeholder="What are you working on, and when would you like to start?"
							/>
						</div>

						<div className="contact-submit-row">
							<button className="btn btn-dark contact-submit" type="button">
								Send message <span className="arrow">→</span>
							</button>
							<p className="contact-note">We usually reply within two working days.</p>
						</div>
					</form>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default ContactForm;
