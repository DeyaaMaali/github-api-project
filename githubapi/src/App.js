import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import axios from "axios";

import "./App.css";
class App extends Component {
  state = {
    data: [],
    msg: ""
  };

  search = (user, clear) => {
    this.setState({ msg: "" });
    console.log(user);
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then(response => {
        if (response.data.length === 0) this.setState({ msg: "No Repos" });
        this.setState({
          data: response.data.filter((elem, index) => index < 5)
        });
      })

      .catch(error => {
        this.setState({ msg: "No User" });
        console.log("error");
      });

    clear();
  };

  render() {
    if (this.state.msg === "No User")
      return (
        <>
          <div className="Search">
            <SearchBar search={this.search} />
          </div>
          <h2>Sorry, search dosnt match any user</h2>
        </>
      );
    if (this.state.msg === "No Repos")
      return (
        <>
          <div className="Search">
            <SearchBar search={this.search} />
          </div>
          <h2>Sorry, no Repos for this user</h2>
        </>
      );
    return (
      <>
        <div className="Search">
          <SearchBar search={this.search} />
        </div>
        <Table data={this.state.data} />
      </>
    );
  }
}

export default App;
