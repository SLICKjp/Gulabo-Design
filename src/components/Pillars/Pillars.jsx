import branding from "../../assets/cards/card1.png";
import uniform from "../../assets/cards/card2.png";
import experience from "../../assets/cards/card3.png";
import "./pillars.css";

const PILLARS = [
	{
		num: "01",
		title: "Experience Design",
		img: experience,
		position: "center 30%",
		desc: "Restaurants, retail and workspaces with a story you can walk through, from concept decor to art installations.",
		tags: ["Spatial", "Interiors", "Art"],
	},
	{
		num: "02",
		title: "Uniform Design",
		img: uniform,
		position: "center 20%",
		desc: "Workwear your team is proud to wear, designed around the brand, the space and the work itself.",
		tags: ["Uniforms", "Textiles", "Fit"],
	},
	{
		num: "03",
		title: "Branding",
		img: branding,
		position: "70% 30%",
		desc: "Identities, logos, menus and signage that stay recognisable from the business card to the building.",
		tags: ["Identity", "Logo", "Signage"],
	},
];

const Pillars = () => {
	return (
		<section id="services" className="container pillars">
			<div className="section-head">
				<h2 className="display section-title">What we do</h2>
				<p className="section-lede">Three disciplines, one studio. Most of our projects use all three.</p>
			</div>

			<div className="pillars-grid">
				{PILLARS.map((p) => (
					<a key={p.num} className="pillar" href="#work">
						<div className="pillar-media">
							<img src={p.img} alt="" loading="lazy" style={{ objectPosition: p.position }} />
						</div>
						<div className="pillar-body">
							<span className="pillar-num">{p.num}</span>
							<h3 className="display pillar-title">{p.title}</h3>
							<p className="pillar-desc">{p.desc}</p>
							<ul className="pillar-tags">
								{p.tags.map((t) => (
									<li key={t}>{t}</li>
								))}
							</ul>
							<span className="pillar-cta">
								Explore <span className="arrow">→</span>
							</span>
						</div>
					</a>
				))}
			</div>
		</section>
	);
};

export default Pillars;
