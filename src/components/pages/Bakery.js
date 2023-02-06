import React from "react";

const Menu = () => {
	return (
		<section className="menu">
			<div className="menu_title_bakery">
				<div className="menu_overlay"></div>
				<div className="menu_overlay--title"></div>
				<p className="menu_title--main">Bakery</p>
			</div>

			<div className="menu_bakery">
				<div className="bake_cat_dulce">
					<p className="dulce--title">Pan Dulce</p>

					<div className="bake_item_1">
						<p className="item_title">SALVADOR</p>
						<p className="item_description">
							Bread Pudding Cheesecake Cuernitos Maria Luisa Marquesote
							Peperecha Pegaditos Picudas Pastelito De Leche & Piña Quesadilla
							Semitas Torta Alemana Viejitas
						</p>
					</div>
					<div className="bake_item_2">
						<p className="item_title">MEXICO</p>
						<p className="item_description">
							Conchas Cuerno Elotes Orejas Cono de Crema Bigote Danes Rebanada
							con Mantequilla Empanada Piña, Manzana, Leche
						</p>
					</div>
					<div className="bake_item_3">
						<p className="item_title">TRADITIONAL</p>
						<p className="item_description">
							Danishes - Cheese, Guava Cheese Muffins - Vanilla, Chocolate,
							Banana, Blueberry, Cheese Turnovers - Apple, Pineapple Cookies &
							Canapes
						</p>
					</div>
				</div>

				<div className="bake_cat_cake">
					<p className="cake--title">Cakes</p>

					<div className="bake_item_4">
						<p className="item_title">Tres Leches</p>
						<p className="item_description">Ham croquette</p>
					</div>
					<div className="bake_item_5">
						<p className="item_title">Pina Colada</p>
						<p className="item_description">Guava and Sweet Cheese Pie </p>
					</div>
					<div className="bake_item_6">
						<p className="item_title">Dulce de Leche</p>
						<p className="item_description"></p>
					</div>
					<div className="bake_item_7">
						<p className="item_title">Horchata</p>
						<p className="item_description"></p>
					</div>
					<div className="bake_item_8">
						<p className="item_title">Chocolate</p>
						<p className="item_description">Guava pie </p>
					</div>
					<div className="bake_item_9">
						<p className="item_title">Red Velvet</p>
						<p className="item_description">Guava and Sweet Cheese Pie </p>
					</div>
					<p className="cake--footer">Slices & Whole Cakes Available</p>
				</div>
				<div className="bake_cat_flan">
					<p className="flan--title">Flan</p>

					<div className="bake_item_10">
						<p className="item_title">Flan de Leche</p>
						<p className="item_description">Milk Flan</p>
					</div>
					<div className="bake_item_11">
						<p className="item_title">Flan de Coco</p>
						<p className="item_description">Coconut Flan</p>
					</div>
					<div className="bake_item_12">
						<p className="item_title">Chocoflan</p>
						<p className="item_description">Chocolate Flan</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Menu;
