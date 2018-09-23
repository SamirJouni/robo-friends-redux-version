import React from "react";

const Scroll = props => {
	return (
		<div
			style={{
				height: "100%",
				width: "100%",
				overflow: "hidden"
			}}
		>
			{props.children}
		</div>
	);
};

export default Scroll;
