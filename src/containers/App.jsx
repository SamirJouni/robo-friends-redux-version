import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			robots: [],
			searchField: "",
			uuid: []
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));
	}

	handleSearch = event => {
		this.setState({ searchField: event.target.value });
	};

	render() {
		const { robots, searchField } = this.state;

		const filteredRobots = robots.filter(robot => {
			return robot.name
				.toLocaleLowerCase()
				.includes(searchField.toLocaleLowerCase());
		});

		if (robots.length === 0) {
			return <h1 className="tc roboTitle">Loading...</h1>;
		} else {
			return (
				<div className="tc">
					<h1 className="roboTitle">RoboFriends</h1>
					<SearchBox onSearch={this.handleSearch} />
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobots} />
						</ErrorBoundry>
					</Scroll>
				</div>
			);
		}
	}
}

export default App;
