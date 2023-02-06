import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<footer className="footer">
			<div class="footer__social">
				<a href="#" class="footer__social--link">
					<FontAwesomeIcon icon={faInstagram} />
				</a>
				<a href="#" class="footer__social--link">
					<FontAwesomeIcon icon={faTwitter} />
				</a>
				<a href="#" class="footer__social--link">
					<FontAwesomeIcon icon={faFacebook} />
				</a>
				<p className="footer__copyright">All Rights Reserved. &copy;GBLA</p>
			</div>
		</footer>
	);
};

export default Footer;
