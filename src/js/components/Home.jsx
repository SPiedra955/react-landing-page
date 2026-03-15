import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./Jumbotron";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Jumbotron
				title="A Warm Welcome"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos, totam aspernatur hic soluta veritatis, quisquam ab dolores dolorum repellendus corrupti sint fugit illum quam minus sequi doloremque rem velit!"
				buttonLabel="Call to action!"
				buttonURL="https://reactjs.org/"
			/>
		</div>
	);
};

export default Home;