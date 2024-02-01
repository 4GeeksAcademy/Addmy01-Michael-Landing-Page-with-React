import React from "react";
import SimpleCard from "../../SimpleCard";
import SimpleNavbar from "../../SimpleNavbar";
import SimpleJumbotron from "../../SimpleJumbotron";
import SimpleFooter from "../../SimpleFooter";

//include images into your bundle


//create your first component
const Home = () => {
	return (
	<>
	<div className="text-center">
			<SimpleNavbar />
	</div>
	<div className="container">
			<SimpleJumbotron />
			<SimpleCard />
	</div>
	<div className="text-center">
		<SimpleFooter />
	</div>
	</>
	);
};

export default Home;
