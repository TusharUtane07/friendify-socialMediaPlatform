"use client";
import Button from "@/Components/Button/button";
import React, { useState } from "react";

const Explore = () => {
	const [searchInput, setSearchInput] = useState<string>("");

	return (
		<div className="mt-20 lg:mt-10 text-center">
			<div className="text-xl md:text-2xl lg:text-4xl  uppercase font-bold">
				Explore
			</div>
			<div className="mt-10">
				<input
					type="text"
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
					placeholder="Search for Friends..."
					className="h-10 w-[200px] md:w-[600px] lg:w-[800px] pl-3 outline-none rounded-md mx-auto"
				/>
			</div>
			<div className="mt-4 ">
				<Button btnName={"Search"} />
			</div>
		</div>
	);
};

export default Explore;
