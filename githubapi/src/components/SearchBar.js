import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    User: ""
  };

  handleChange = e => {
    console.log(e.target.value);
    this.setState({ User: e.target.value });
  };

  clear = () => {
    this.setState({ User: "" });
  };

  render() {
    return (
      <>
        <div className="SearchBar">
          <input
            type="text"
            placeholder="Search"
            onChange={this.handleChange}
            value={this.state.User}
          />
          <button
            type="submit"
            onClick={this.props.search.bind(this, this.state.User, this.clear)}
          >
            Search
          </button>
        </div>
      </>
    );
  }
}

export default SearchBar;
