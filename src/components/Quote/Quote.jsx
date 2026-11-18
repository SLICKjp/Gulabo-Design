import "./quote.css";

const Quote = () => {
	return (
		<section className="container quote">
			<div className="display quote-mark" aria-hidden="true">
				“
			</div>
			<blockquote>
				<p className="display quote-text">If you can design one thing, you can design anything.</p>
				<footer className="quote-author">Massimo Vignelli</footer>
			</blockquote>
		</section>
	);
};

export default Quote;
