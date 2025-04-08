import React from "react";
import Card from "../../components/Card";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import "./Homepage.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import Clients from "../../components/Clients/Clients";
import Services from "../../components/Services/Services";

const Homepage = () => {
	return (
		<>
			<div className="home-container">
				<HeroSection />
			</div>
			<Services />
			<Card />
			<Clients />
			<div className="home-container">
				<ContactUs />
				<Footer />
			</div>
		</>
	);
};

export default Homepage;
