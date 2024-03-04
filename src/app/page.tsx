import CreatePost from "@/Components/CreatePost/CreatePost";
import React from "react";

type Props = {};

const Home = (props: Props) => {
	return (
		<div className="w-full mt-20 lg:mt-3">
			<CreatePost />
		</div>
	);
};

export default Home;
