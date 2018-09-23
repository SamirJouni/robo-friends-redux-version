import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
	return (
		<div
			style={{
				height: "55vh",
				width: "110vw",
				overflowY: "scroll",
				paddingRight: "10vw"
			}}
		>
			{robots.map(user => {
				return (
					<Card
						key={user.id}
						id={user.id}
						name={user.name}
						email={user.email}
					/>
				);
			})}
		</div>
	);
};

export default CardList;
