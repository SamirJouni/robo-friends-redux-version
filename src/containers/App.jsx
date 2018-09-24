import React, {Component} from "react";
import {connect} from "react-redux";
import {setSearchField, requestRobots} from "../actions";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.handleRequestRobots();
  }

  render() {
		const { searchField, handleSearch, robots, isPending } = this.props;

    const filteredRobots = robots.filter(robot => {
      return robot
        .name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });

    if (isPending) {
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
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSearch : e => dispatch(setSearchField(e.target.value)),
    handleRequestRobots: () => dispatch(requestRobots())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
