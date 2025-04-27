import React from "react";
import "./footer.css";
import gulabologo from "../../assets/footer/gulabo_logo.png";
import linkedin from "../../assets/footer/linkedin.png";
import instagram from "../../assets/footer/instagram.png";

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer-img-container">
				<div>
					<img className="footer-image" src={gulabologo} alt="" />
					<div className="footer-social-icons">
						<img src={instagram} alt="" />
						<img className="footer-social-icon-two" src={linkedin} alt="" />
					</div>
				</div>
			</div>

			<div className="footer-grid">
				<div className="footer-grid-one">
					<div className="footer-section-one">
						<h3 className="footer-header">ABOUT</h3>
						<p className="footer-subtext">About Gulabo</p>
						<p className="footer-subtext">Team</p>
					</div>

					<div className="footer-section-two">
						<h3 className="footer-header">CONTACT</h3>
						<p className="footer-subtext">hello@gulabodesign.com</p>
						<p className="footer-subtext">+911294009373</p>
					</div>
				</div>

				<div className="footer-grid-two">
					<div className="footer-section-third">
						<h3 className="footer-header">SERVICES</h3>
						<p className="footer-subtext">Experience Design</p>
						<p className="footer-subtext">Uniform Design</p>
						<p className="footer-subtext">Branding</p>
					</div>

					<div className="footer-section-fourth">
						<h3 className="footer-header">ADDRESS</h3>
						<p className="footer-subtext">346, Sector 21A, Faridabad,</p>
						<p className="footer-subtext">Haryana 121002(Studio)</p>
            <p className="footer-subtext">24 A Sector - 10H, DLF Faridabad, Haryana 121006 (Registered Address)</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
