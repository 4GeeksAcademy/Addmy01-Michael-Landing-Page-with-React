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
			<>
				<SimpleNavbar />
			</>
			<div className="d-flex justify-content-center flex-column align-items-center mx-auto">
				<SimpleJumbotron className="mx-auto" />
			</div>
			<div className="container">
				<div className="row d-flex justify-content-center">
					<SimpleCard
						image="https://picsum.photos/id/237/250/250"
						title="Coolest Card ever"
						description="React is the most popular rendering library in the world"
						buttonLabel="Go to the official website"
						buttonURL="https://reactjs.org/"
					/>
					<SimpleCard
						image="https://picsum.photos/id/233/250/250"
						title="Worst Card Ever"
						description="React is a wonderful tool"
						buttonLabel="Learn more"
						buttonURL="https://reactjs.org/"
					/>
					<SimpleCard
						image="https://picsum.photos/id/232/250/250"
						title="Better than BEST"
						description="Explore React components"
						buttonLabel="Discover"
						buttonURL="https://reactjs.org/"
					/>
					<SimpleCard
						image="https://picsum.photos/id/231/250/250"
						title="Uncool Card"
						description="Understand React basics"
						buttonLabel="Start learning"
						buttonURL="https://reactjs.org/"
					/>
				</div>
			</div>
			<div className="text-center">
				<SimpleFooter />
			</div>
		</>
	);
}

export default Home;
