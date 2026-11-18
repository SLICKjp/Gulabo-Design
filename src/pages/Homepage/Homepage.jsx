import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import Services from "../../components/Services/Services";
import Quote from "../../components/Quote/Quote";
import Pillars from "../../components/Pillars/Pillars";
import Work from "../../components/Work/Work";
import Clients from "../../components/Clients/Clients";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
	return (
		<>
			<Navbar />
			<main>
				<HeroSection />
				<Services />
				<Quote />
				<Pillars />
				<Work />
				<Clients />
				<ContactUs />
			</main>
			<Footer />
		</>
	);
};

export default Homepage;
