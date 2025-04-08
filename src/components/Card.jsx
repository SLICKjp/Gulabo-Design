import React from "react";
import img1 from "../assets/cards/card 1.png";
import img2 from "../assets/cards/card 2.png";
import img3 from "../assets/cards/card 3.png";

const Card = () => {
	return (
		<div>
			<div className="card-container">
				<div className="card">
					<img className="card-img" src={img1} alt="" />
				</div>
				<div className="card">
					<img className="card-img" src={img2} alt="" />
				</div>
				<div className="card">
					<img className="card-img" src={img3} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Card;
