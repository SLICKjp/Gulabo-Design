
import "./HeroSection.css";
import video from "../../assets/HeroSection/tailor.mp4";
import aboutMe from "../../assets/HeroSection/aboutMe.png";
import arrow from "../../assets/HeroSection/redirectArrow.png";
import Navbar from "../Navbar/Navbar";

const HeroSection = () => {
	return (
		<>
			<div className="hero-parent">
			 <Navbar/>
				<div className="hero-container">
					<video autoPlay muted loop playsInline type="video/mp4">
						<source src={video}></source>
					</video>
				</div>
				{/* <div className="cutout-2"></div> */}
				<div className="cutout">
					<div className="svg-cutout">
						<svg
							width="55"
							height="33"
							viewBox="0 0 107 106"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M 0 104 Q 104 104 104 0 L104 104 Z"
								fill="white"
								stroke="black"
								stroke-width="0"
							/>
						</svg>
					</div>
					<div className="svg-cutout-2">
						<svg
							width="55"
							height="33"
							viewBox="0 0 107 106"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M 0 104 Q 104 104 104 0 L104 104 Z"
								fill="white"
								stroke="black"
								stroke-width="0"
							/>
						</svg>
					</div>
					<div className="filler"></div>
				</div>
				<div className="about-us-sphere">
					<img className="rotatingText" src={aboutMe} />
					<img className="arrow" src={arrow}></img>
				</div>
			</div>
		</>
	);
};

export default HeroSection;
