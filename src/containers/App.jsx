import React, {Component} from "react";
import {connect} from "react-redux";
import {setSearchField} from "../actions";
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
      uuid: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({robots: users}));
  }

  render() {
		const { robots } = this.state;
		const { searchField, handleSearch } = this.props;

    const filteredRobots = robots.filter(robot => {
      return robot
        .name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });

    if (robots.length === 0) {
      return <h1 className="tc roboTitle">Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="roboTitle">RoboFriends</h1>
          <SearchBox onSearch={handleSearch}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {searchField: state.searchField};
};

const madDispatchToProps = dispatch => {
  return {handleSearch : e => dispatch(setSearchField(e.target.value))};
};

export default connect(mapStateToProps, madDispatchToProps)(App);
