import React from "react";
import SimpleCard from "../../SimpleCard";
import SimpleNavbar from "../../SimpleNavbar";
import SimpleJumbotron from "../../SimpleJumbotron";
import SimpleFooter from "../../SimpleFooter";

//include images into your bundle


//create your first component
function Home() {
	return (
	<>
	<div className="text-center">
		<SimpleNavbar />
	</div>
	<div className="d-flex justify-content-center flex-column align-items-center mx-auto ">
		<SimpleJumbotron  className="mx-auto" />
		<div className="container-flex">
			<div className="row justify-content-center">
				<div className="col">
					<SimpleCard  className="mx-auto"
						image="https://picsum.photos/id/237/250/250"
						title="Coolest Card ever"
						description="React is the most popular rendering library in the world"
						buttonLabel="Go to the official website"
						buttonURL="https://reactjs.org/"
					/>
				</div>
				<div className="col">
					<SimpleCard  className="mx-auto"
						image="https://picsum.photos/id/233/250/250"
						title="Worst Card Ever"
						description="React is the most popular rendering library in the world"
						buttonLabel="Go to the official website"
						buttonURL="https://reactjs.org/"
					/>
				</div>
				<div className="col">
					<SimpleCard  className="mx-auto"
						image="https://picsum.photos/id/232/250/250"
						title="Better then BEST"
						description="React is the most popular rendering library in the world"
						buttonLabel="Go to the official website"
						buttonURL="https://reactjs.org/"
					/>
				</div>
				<div className="col">
					<SimpleCard  className="mx-auto"
						image="https://picsum.photos/id/231/250/250"
						title="Uncool Card "
						description="React is the most popular rendering library in the world"
						buttonLabel="Go to the official website"
						buttonURL="https://reactjs.org/"
					/>
				</div>
			</div>
		</div>
	</div>
	<div className="text-center">
		<SimpleFooter />
	</div>
	</>
	);
}

export default Home;
