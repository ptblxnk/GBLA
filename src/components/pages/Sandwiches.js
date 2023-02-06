import React from "react";

const Sandwiches = () => {
	return (
		<section className="menu">
			<div className="menu_title_sandwiches">
				<div className="menu_overlay"></div>
				<div className="menu_overlay--title"></div>
				<p className="menu_title--main">Sandwiches</p>
			</div>
			<div className="menu_sandwiches">
				<div className="sandwich_item_1">
					<p className="item_title">SANDWICH CUBANO</p>
					<p className="item_description">
						Sweet ham, roasted pork, Swiss cheese, homemade pickles, house
						mustard on grilled Cuban bread. Served with plantain chips.
					</p>
				</div>

				<div className="sandwich_item_2">
					<p className="item_title">MEDIA NOCHE SANDWICH</p>
					<p className="item_description">
						Sweet ham, roasted pork, Swiss cheese, homemade pickles, house
						mustard on grilled sweet Cuban bread. Served with plantain chips.
					</p>
				</div>
				<div className="sandwich_item_3">
					<p className="item_title">PAN CON LECHON</p>
					<p className="item_description">
						Roasted pork, grilled onions and mojo sauce on grilled Cuban bread.
						Served with plantain chips
					</p>
				</div>
				<div className="sandwich_item_4">
					<p className="item_title">ROPA VIEJA</p>
					<p className="item_description">
						Shredded beef in a seasoned tomato sauce with onions and bell
						peppers on Cuban bread. Served with plantain chips.
					</p>
				</div>
				<div className="sandwich_item_5">
					<p className="item_title">POLLO AL AIJILLO</p>
					<p className="item_description">
						Garlic chicken steak, Swiss cheese, lettuce, tomatoes and grilled
						onions on Cuban bread. Served with plantain chips.
					</p>
				</div>
				<div className="sandwich_item_6">
					<p className="item_title">PAN CON BISTEC</p>
					<p className="item_description">
						Top sirloin steak topped with grilled onions, Swiss cheese, lettuce
						and tomatoes on Cuban bread. Served with plantain chips.
					</p>
				</div>
				<div className="sandwich_item_7">
					<p className="item_title">TORTA DE CARNITAS</p>
					<p className="item_description">
						Roasted pork, Cotija cheese, lettuce, tomato, onions, avocado and
						beans on grilled torta bread. Served with plantain chips.
					</p>
				</div>
				<div className="sandwich_item_8">
					<p className="item_title">TORTA DE POLLO</p>
					<p className="item_description">
						Chicken breast, Cotija cheese, lettuce, tomato, onions, avocado and
						beans on grilled torta bread. Served with plantain chips.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Sandwiches;
