import React from "react";
import Card from "../../components/Card/Card";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import Clients from "../../components/Clients/Clients";
import Services from "../../components/Services/Services";
import Quote from "../../components/Quote/Quote";
import "./homepage.css";

const Homepage = () => {
	return (
		<>
			<div className="home-container">
				<HeroSection />
				<Quote />
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
