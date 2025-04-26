import React from "react";
import img1 from "../../assets/cards/card1.png";
import img2 from "../../assets/cards/card2.png";
import img3 from "../../assets/cards/card3.png";
import "./card.css";

const Card = () => {
	return (
		<div>
			<div className="card-container">
				<div className="card">
					<img className="card-img card-img-one" src={img1} alt="" />
				</div>
				<div className="card">
					<img className="card-img card-img-two" src={img2} alt="" />
				</div>
				<div className="card">
					<img className="card-img card-img-three" src={img3} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Card;
