import "./Services.css";

const SERVICES = [
	"Logo Design",
	"Branding",
	"Interior Styling",
	"Art Installation",
	"Menu Design",
	"Spatial Design",
	"Concept Decor",
	"Uniform Design",
	"Product Design",
];

// The list is rendered twice so the -50% loop is seamless
const Services = () => {
	return (
		<div className="marquee" aria-hidden="true">
			<div className="marquee-track display">
				{[...SERVICES, ...SERVICES].map((service, i) => (
					<span className="marquee-item" key={i}>
						{service}
						<span className="marquee-dot" />
					</span>
				))}
			</div>
		</div>
	);
};

export default Services;
