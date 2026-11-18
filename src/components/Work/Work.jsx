import card1 from "../../assets/cards/card1.png";
import card2 from "../../assets/cards/card2.png";
import card3 from "../../assets/cards/card3.png";
import "./work.css";

// TODO: replace [Client name] with the real clients
const PROJECTS = [
	{ img: card1, alt: "Apollo Supply Chain signage on a glass building", category: "Branding", client: "Apollo Supply Chain" },
	{ img: card2, alt: "Restaurant team in custom aprons on stone steps", category: "Uniform Design", client: "[Client name]" },
	{ img: card3, alt: "Green interior wall with framed textile artwork", category: "Experience Design", client: "[Client name]" },
];

const Work = () => {
	return (
		<section id="work" className="work">
			<div className="container">
				<div className="section-head">
					<h2 className="display section-title">Selected work</h2>
					<a className="btn btn-ghost" href="#work">
						All projects
					</a>
				</div>

				{/* Each slide is sticky, so the next project slides over the previous one */}
				<div className="work-stack">
					{PROJECTS.map((p, i) => (
						<div className="work-slide" key={p.alt} style={{ zIndex: i + 1 }}>
							<a className="work-card" href="#work">
								<div className="work-media">
									<img src={p.img} alt={p.alt} loading="lazy" />
								</div>
								<div className="work-overlay">
									<div>
										<div className="work-category">{p.category}</div>
										<div className="display work-client">{p.client}</div>
									</div>
									<span className="btn btn-light">
										View project <span className="arrow">→</span>
									</span>
								</div>
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Work;
