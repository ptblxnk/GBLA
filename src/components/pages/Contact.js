import React from "react";
import front from "../../img/front.png";
import Map from "../layout/Map";
import Footer from "../layout/Footer";

const Contact = () => {
	return (
		<section className="contact">
			<div className="logo">
				<img src={front} alt="" srcset="" />
			</div>
			<div className="contact__title">
				<h4>Come visit us!</h4>{" "}
			</div>

			<div className="contact__info">
				<div className="contact__info--name">Gigi's Bakery</div>
				<div className="contact__info--street">2200 Temple St</div>
				<div className="contact__info--zip">Los Angeles, CA 90026</div>

				<div className="contact__info--phone">(213) 483-6152</div>
				<div className="contact__info--email">
					<a href="mailto:info@gigibakery.com">info@gigibakery.com</a>
				</div>
			</div>
			<div className="contact__message">
				<p className="contact__item--description">
					Thanks for supporting small businesses!{" "}
				</p>
			</div>
			<div className="contact__map">
				<Map />
			</div>
			<Footer />
		</section>
	);
};

export default Contact;
