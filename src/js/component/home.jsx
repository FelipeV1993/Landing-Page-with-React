import React from "react";
import Card from "./card";
import Footer from "./footer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<div className="row m-3">
				<Card img= "http://placekitten.com/500/325" title="Card title" button="Find out more!" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo enim 
				venia" />
				<Card img= "http://placekitten.com/500/325"  title="Card title" button="Find out more!" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo enim veniam eos aspernatur eius possimus unde corporis dolorum maiores sed" />
				<Card img= "http://placekitten.com/500/325"  title="Card title" button="Find out more!" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo enim venia" />
				<Card img= "http://placekitten.com/500/325"  title="Card title" button="Find out more!" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo enim veniam eos aspernatur eius possimus unde corporis dolorum maiores sed" />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
