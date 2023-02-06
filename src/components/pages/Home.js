import React from "react";

import { Button } from "reactstrap";

const Home = () => {
	return (
		<section className="home">
			<div className="home__hero">
				{" "}
				<img
					src="https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_60,q_80,fl_lossy,dpr_2.0,c_fit,f_auto,h_60/oziexidemdusplhs0uxy"
					alt=""
					srcset=""
				/>
			</div>

			<div id="btn__holder">
				<Button
					color="light"
					className="btn__order"
					href="https://direct.chownow.com/order/26927/locations/39877"
				>
					Order Now
				</Button>
				<Button className="btn__menu" color="light" href="/menu">
					See Menu
				</Button>
			</div>
		</section>
	);
};

export default Home;
