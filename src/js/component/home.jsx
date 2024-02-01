import React from "react";
import SimpleCard from "../../SimpleCard";
import SimpleNavbar from "../../SimpleNavbar";
import SimpleJumbotron from "../../SimpleJumbotron";

//include images into your bundle


//create your first component
const Home = () => {
	return (
	<div className="text-center">
		<SimpleCard />
		<SimpleJumbotron />

		<SimpleNavbar />
	</div>
	);
};

export default Home;
