import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/footer/gulabo_logo.png";
import "./navbar.css";

const LINKS = [
	{ label: "Work", href: "/#work" },
	{ label: "Services", href: "/#services" },
	{ label: "About", href: "/#about" },
	{ label: "Contact", to: "/contact-form" },
];

const NavItem = ({ item, className, onClick }) =>
	item.to ? (
		<Link className={className} to={item.to} onClick={onClick}>
			{item.label}
		</Link>
	) : (
		<a className={className} href={item.href} onClick={onClick}>
			{item.label}
		</a>
	);

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const close = () => setOpen(false);

	// Lock page scroll and allow Escape to close while the mobile menu is open
	useEffect(() => {
		if (!open) return;
		const onKey = (e) => e.key === "Escape" && setOpen(false);
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKey);
		};
	}, [open]);

	return (
		<>
			<header className="nav">
				<nav className="container nav-inner" aria-label="Main">
					<Link to="/" className="nav-logo" aria-label="Gulabo Design home" onClick={close}>
						<img src={logo} alt="Gulabo Design" />
					</Link>

					<div className="nav-links">
						{LINKS.map((item) => (
							<NavItem key={item.label} item={item} className="nav-link" />
						))}
					</div>

					<div className="nav-actions">
						<Link className="btn btn-dark" to="/contact-form" onClick={close}>
							Let’s talk
						</Link>
						<button
							type="button"
							className="nav-toggle"
							aria-label={open ? "Close menu" : "Open menu"}
							aria-expanded={open}
							aria-controls="mobile-menu"
							onClick={() => setOpen((o) => !o)}
						>
							<svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
								{open ? (
									<path d="M6 6l12 12M18 6L6 18" />
								) : (
									<path d="M4 7h16M4 12h16M4 17h16" />
								)}
							</svg>
						</button>
					</div>
				</nav>
			</header>

			{/* Kept outside <header>: its backdrop-filter would trap position: fixed */}
			<div id="mobile-menu" className={`nav-mobile ${open ? "is-open" : ""}`}>
				{LINKS.map((item) => (
					<NavItem key={item.label} item={item} onClick={close} />
				))}
				<a className="nav-mobile-email" href="mailto:hello@gulabodesign.com">
					hello@gulabodesign.com
				</a>
			</div>
		</>
	);
};

export default Navbar;
