import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar 
			tittle="Start Bootstrap" 
			/>
			<Jumbotron 
			title="A Warm Welcome" 
			descripcion= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nam quasi fugiat? Dolore aperiam eius doloribus nesciunt nisi rem magnam, autem sit, reprehenderit quaerat laborum mollitia! Expedita eum laborum accusantium!" 
			button="Call to action!" 
			/>


		</div>
	);
};

export default Home;
