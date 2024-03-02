import React from "react";

const Button = ({ btnName }: any) => {
	return (
		<div>
			<button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow">
				{btnName}
			</button>
		</div>
	);
};

export default Button;
