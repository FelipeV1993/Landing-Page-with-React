import React from "react";
import Card from "./card";
import Footer from "./footer";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar
				tittle="Start Bootstrap"
			/>
			<Jumbotron
				title="A Warm Welcome"
				descripcion="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nam quasi fugiat? Dolore aperiam eius doloribus nesciunt nisi rem magnam, autem sit, reprehenderit quaerat laborum mollitia! Expedita eum laborum accusantium!"
				button="Call to action!"
			/>

			<div className="row m-3">
				<Card img="http://placekitten.com/500/325" title="Card title" button="Find out more!" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo enim 
				venia" />
				<Card img="http://placekitten.com/500/325" title="Card title" button="Find out more!" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo enim veniam eos aspernatur eius possimus unde corporis dolorum maiores sed" />
				<Card img="http://placekitten.com/500/325" title="Card title" button="Find out more!" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo enim venia" />
				<Card img="http://placekitten.com/500/325" title="Card title" button="Find out more!" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo enim veniam eos aspernatur eius possimus unde corporis dolorum maiores sed" />
			</div>
			<Footer />



		</>
	);
};

export default Home;
