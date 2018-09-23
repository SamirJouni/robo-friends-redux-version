import React from "react";

const SearchBox = ({ onSearch }) => {
	const placeholder = "Search Robots";


	return (
		<div className="pa2 ">
			<input
				className="pa3 ba b--green bg-lightest-blue"
				type="search"
				placeholder={placeholder}
				onFocus={event => (event.target.placeholder = "")}
				onBlur={event => (event.target.placeholder = placeholder)}
				onChange={onSearch}
			/>
		</div>
	);
};

export default SearchBox;
