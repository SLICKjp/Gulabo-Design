import "./Clients.css";

// Every logo in assets/clients, keyed by file name
const LOGO_FILES = import.meta.glob("../../assets/clients/*.png", { eager: true, import: "default" });
const logo = (file) => LOGO_FILES[`../../assets/clients/${file}.png`];

// [file name, display name], in display order
const CLIENTS = [
	["google", "Google"],
	["apollo", "Apollo"],
	["heroCycles", "Hero Cycles"],
	["jawa", "Jawa"],
	["hamdard", "Hamdard"],
	["dayalOpticals", "Dayal Opticals"],
	["heritage", "Heritage"],
	["gaurs", "Gaurs"],
	["Townhall", "Town Hall"],
	["fashionTV", "FashionTV"],
	["lixil", "LIXIL"],
	["chaayos", "Chaayos"],
	["brookeCarter", "Brooke & Carter"],
	["bobis", "Bobis"],
	["fig", "Fig"],
	["happyRatio", "Happy Ratio"],
	["selectCitywalk", "Select Citywalk"],
	["jaipuria", "Jaipuria"],
	["RE", "Royal Enfield"],
	["asper", "Asper"],
	["asianPaints", "Asian Paints"],
	["ayouthVeda", "AyouthVeda"],
	["sleeep", "Sleeep"],
	["bonita", "Bonita"],
	["happyAlien", "Happy Alien"],
	["kakapo", "Kakapo"],
	["artsRoom", "Arts Room"],
	["chorBazaar", "Chor Bazaar"],
	["mahindra", "Mahindra"],
	["boya", "Boya"],
	["dsgroup", "DS Group"],
	["amourBistro", "Amour Bistro"],
	["middleby", "Middleby"],
	["itc", "ITC"],
	["fourPoint", "Four Point"],
	["rsp", "RSP"],
	["pallMall", "Pall Mall"],
	["tossin", "Tossin"],
];

const Clients = () => {
	return (
		<section className="container clients">
			<div className="section-head">
				<h2 className="display section-title">Brands we’ve worked with</h2>
				<p className="section-lede">From global names to neighbourhood favourites.</p>
			</div>

			<ul className="clients-grid">
				{CLIENTS.map(([file, name]) => (
					<li key={file}>
						<img className="client-logo" src={logo(file)} alt={name} loading="lazy" />
					</li>
				))}
			</ul>
		</section>
	);
};

export default Clients;
