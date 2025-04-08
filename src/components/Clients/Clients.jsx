import React from "react";
import bnc from "../../assets/clients/bnc.png";
import dayalOptics from "../../assets/clients/dayalOpticals.png";
import fashionTV from "../../assets/clients/fashionTV.png";
import gaurs from "../../assets/clients/gaurs.png";
import google from "../../assets/clients/google.png";
import HeroCycle from "../../assets/clients/Hero_Cycles.png";
import jawa from "../../assets/clients/jawa.png";
import KC from "../../assets/clients/Khan_chacha.png";
import kylin from "../../assets/clients/kylin.png";
import PA from "../../assets/clients/public_affair.png";
import RE from "../../assets/clients/RE.png";
import SH from "../../assets/clients/shahnaz_hussain.png";
import townhall from "../../assets/clients/Townhall.png";
import "./Clients.css";
const Clients = () => {
	return (
		<div className="clientSection ">
			<div className="clientHeader">OUR CLIENTS</div>
			<div className="logos">
				<div className="logos-slider">
					<img className="clientLogo" id="bnc" src={bnc} />
					<img className="clientLogo" id="dayalOptics" src={dayalOptics} />
					<img className="clientLogo" id="fashionTV" src={fashionTV} />
					<img className="clientLogo" id="gaurs" src={gaurs} />
					<img className="clientLogo" id="google" src={google} />
					<img className="clientLogo" id="HeroCycle" src={HeroCycle} />
					<img className="clientLogo" id="jawa" src={jawa} />
					<img className="clientLogo" id="KC" src={KC} />
					<img className="clientLogo" id="kylin" src={kylin} />
					<img className="clientLogo" id="PA" src={PA} />
					<img className="clientLogo" id="RE" src={RE} />
					<img className="clientLogo" id="SH" src={SH} />
					<img className="clientLogo" id="townhall" src={townhall} />
				</div>

				<div className="logos-slider">
					<img className="clientLogo" id="bnc" src={bnc} />
					<img className="clientLogo" id="dayalOptics" src={dayalOptics} />
					<img className="clientLogo" id="fashionTV" src={fashionTV} />
					<img className="clientLogo" id="gaurs" src={gaurs} />
					<img className="clientLogo" id="google" src={google} />
					<img className="clientLogo" id="HeroCycle" src={HeroCycle} />
					<img className="clientLogo" id="jawa" src={jawa} />
					<img className="clientLogo" id="KC" src={KC} />
					<img className="clientLogo" id="kylin" src={kylin} />
					<img className="clientLogo" id="PA" src={PA} />
					<img className="clientLogo" id="RE" src={RE} />
					<img className="clientLogo" id="SH" src={SH} />
					<img className="clientLogo" id="townhall" src={townhall} />
				</div>
			</div>
		</div>
	);
};

export default Clients;
