import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";
import Card from './Card'
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid px-0">
			<Navbar />

			<Jumbotron
				title="A Warm Welcome"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos, totam aspernatur hic soluta veritatis, quisquam ab dolores dolorum repellendus corrupti sint fugit illum quam minus sequi doloremque rem velit!"
				buttonLabel="Call to action!"
				buttonURL="https://reactjs.org/"
			/>

			<div className="container mt-4 px-0">
				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
					<Card
						cardTitle='Card 1'
						cardButtonURL='#'
						cardDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Numquam eos, totam aspernatur hic soluta veritatis, 
						quisquam ab dolores dolorum repellendus corrupti sint
						 fugit illum quam minus sequi doloremque rem velit!'
						cardButtonLabel='Inicio'
						cardImg='https://picsum.photos/200'
					/>
					<Card
						cardTitle='Card 2'
						cardButtonURL='#'
						cardDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Numquam eos, totam aspernatur hic soluta veritatis, 
						quisquam ab dolores dolorum repellendus corrupti sint
						 fugit illum quam minus sequi doloremque rem velit!'
						cardButtonLabel='Inicio 2'
						cardImg='https://picsum.photos/200'
					/>
					<Card
						cardTitle='Card 3'
						cardButtonURL='#'
						cardDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Numquam eos, totam aspernatur hic soluta veritatis, 
						quisquam ab dolores dolorum repellendus corrupti sint
						 fugit illum quam minus sequi doloremque rem velit!'
						cardButtonLabel='Inicio'
						cardImg='https://picsum.photos/200'
					/>
					<Card
						cardTitle='Card 4'
						cardButtonURL='#'
						cardDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Numquam eos, totam aspernatur hic soluta veritatis, 
						quisquam ab dolores dolorum repellendus corrupti sint
						 fugit illum quam minus sequi doloremque rem velit!'
						cardButtonLabel='Inicio'
						cardImg='https://picsum.photos/200'
					/>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Home;