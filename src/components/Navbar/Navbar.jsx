
import { useEffect, useState } from "react";

import "./navbar.css";
const Navbar = () => {
    const [navBarFlag, toggleFlag] = useState(false);
	useEffect(() => {});
	const navbarTrigger = () => {
		toggleFlag((navBarFlag) => !navBarFlag);
	};
  return (
    <div className="navbar">
    <li className="navbar-item navbar-trigger">
        <div className="navbar-btn" onClick={navbarTrigger}>
            <span>{navBarFlag ? "HOME" : "EXPLORE"}</span>
        </div>
    </li>

    <div className={`navbar-hidden ${navBarFlag ? "navbar-open" : ""}`}>
        <li className="navbar-item">ABOUT US </li>
        <li className="navbar-item">EXPERIENCE DESIGN</li>
        <li className="navbar-item">UNIFORM DESIGN</li>
        <li className="navbar-item">BRANDING</li>
    </div>
</div>
  )
}

export default Navbar