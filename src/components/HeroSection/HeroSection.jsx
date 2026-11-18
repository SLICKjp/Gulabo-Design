import { Link } from "react-router-dom";
import video from "../../assets/HeroSection/tailor.mp4";
import "./HeroSection.css";

const HeroSection = () => {
	return (
		<section id="top" className="container hero">
			<div className="hero-head">
				<h1 className="display hero-title">
					Design people <span>wear</span>, walk into, and remember.
				</h1>
				<div className="hero-side">
					<p>
						Gulabo Design is a studio in Faridabad shaping spaces, uniforms and brand
						identities for people who care how things feel.
					</p>
					<div className="hero-ctas">
						<a className="btn btn-dark" href="#work">
							See our work
						</a>
						<Link className="btn btn-ghost" to="/contact-form">
							Start a project
						</Link>
					</div>
				</div>
			</div>

			<div className="hero-media">
				{/* The notch is cut out with a CSS mask (see .hero-frame) */}
				<div className="hero-frame">
					<video autoPlay muted loop playsInline preload="metadata" src={video} />
				</div>

				<a className="hero-badge" href="#about" aria-label="About us">
					<svg className="hero-badge-text" aria-hidden="true" viewBox="0 0 120 120">
						<defs>
							<path id="hero-badge-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
						</defs>
						<text>
							<textPath href="#hero-badge-circle">ABOUT US • GULABO DESIGN • </textPath>
						</text>
					</svg>
					<svg aria-hidden="true" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
						<path d="M7 17L17 7" />
						<path d="M8 7h9v9" />
					</svg>
				</a>
			</div>
		</section>
	);
};

export default HeroSection;
