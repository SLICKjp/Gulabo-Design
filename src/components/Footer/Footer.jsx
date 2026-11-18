import { Link } from "react-router-dom";
import "./footer.css";

const INSTAGRAM_URL = "https://www.instagram.com/gulabo.design";
// TODO: add the studio's LinkedIn page URL; the icon is hidden while this is empty
const LINKEDIN_URL = "";

const Footer = () => {
	return (
		<footer id="about" className="footer">
			<div className="container footer-top">
				<div className="footer-intro">
					<p className="display footer-tagline">A design studio for brands that want to be felt.</p>
					<div className="footer-social">
						<a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
							<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
								<rect x="3" y="3" width="18" height="18" rx="5" />
								<circle cx="12" cy="12" r="4" />
								<circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
							</svg>
						</a>
						{LINKEDIN_URL && (
							<a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
								<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
									<rect x="3" y="3" width="18" height="18" rx="3" />
									<path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
								</svg>
							</a>
						)}
					</div>
				</div>

				<div className="footer-cols">
					<div className="footer-col">
						<h3>Studio</h3>
						<Link to="/about">About Gulabo</Link>
						<Link to="/about">Team</Link>
						<a href="/#work">Work</a>
					</div>
					<div className="footer-col">
						<h3>Services</h3>
						<a href="/#services">Experience Design</a>
						<a href="/#services">Uniform Design</a>
						<a href="/#services">Branding</a>
					</div>
					<div className="footer-col footer-col-wide">
						<h3>Visit</h3>
						<address>
							346, Sector 21A, Faridabad, Haryana 121002 <span className="footer-dim">(Studio)</span>
						</address>
						<a href="mailto:hello@gulabodesign.com">hello@gulabodesign.com</a>
						<a href="tel:+911294009373">+91 129 400 9373</a>
					</div>
				</div>
			</div>

			<div className="container footer-bottom">
				<span>© {new Date().getFullYear()} Gulabo Design</span>
				<span>Registered: 24 A Sector 10H, DLF Faridabad, Haryana 121006</span>
			</div>

			<div className="display footer-wordmark" aria-hidden="true">
				gulabo
			</div>
		</footer>
	);
};

export default Footer;
