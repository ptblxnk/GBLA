import React from "react";

const Menu = () => {
	return (
		<section className="menu">
			<div className="menu_title_menu">
				<div className="menu_overlay"></div>
				<div className="menu_overlay--title"></div>
				<p className="menu_title--main">Breakfast</p>
				<p className="menu_title--sub">* Served All Day *</p>
			</div>

			<div className="menu_breakfast">
				<div className="menu_item_1">
					<p className="item_title">HUEVOS RANCHEROS</p>
					<p className="item_description">
						Eggs over medium served on corn tortillas with beans, salsa and a
						blend of cheeses. Served with beans, sweet plantains and Cuban
						bread.
					</p>
				</div>
				<div className="menu_item_2">
					<p className="item_title">HUEVOS REVUELTOS</p>
					<p className="item_description">
						Eggs with green peppers, onions, and tomatoes. Served with beans,
						sweet plantains and Cuban bread.
					</p>
				</div>
				<div className="menu_item_3">
					<p className="item_title">HUEVOS CON JAMON</p>
					<p className="item_description">
						Ham, eggs, green peppers, tomatoes, and onions. Served with beans,
						sweet plantains and Cuban bread.
					</p>
				</div>
				<div className="menu_item_4">
					<p className="item_title">HUEVOS Y TOCINO</p>
					<p className="item_description">
						Bacon, eggs, green peppers, tomatoes and onions. Served with beans,
						sweet plantains and Cuban bread.
					</p>
				</div>
				<div className="menu_item_5">
					<p className="item_title">TORTA DE HEVUOS</p>
					<p className="item_description">
						Egg Sandwich with veggies, ham or chorizo sausage. Served on Torta
						bread with plantain chips.
					</p>
				</div>
				<div className="menu_item_6">
					<p className="item_title">HUEVOS CON CHORIZO</p>
					<p className="item_description">
						Chorizo, eggs, green peppers, tomatoes, and onions. Served with
						beans, sweet plantains and Cuban bread.
					</p>
				</div>
				<div className="menu_item_7">
					<p className="item_title">PLATANO, FRIJOL Y CREMA</p>
					<p className="item_description">
						Sweet plantains Served with beans, cream and Cuban bread.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Menu;
