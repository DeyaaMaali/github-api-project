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
    this.state.msg = ""; //instead of using setState(to prevent re render App component to prevent the table to show(for a bit) while searching for somthing not exist or have no repos)
    console.log(user);
    let u = encodeURIComponent(user);
    axios.get(`http://localhost:8600/search/${u}`).then(response => {
      console.log(response);
      console.log(response.data);

      if (response.data.length === 0) {
        this.setState({ msg: "No Repos" });
        return;
      }
      if (response.data === "errors") {
        this.setState({ msg: "No User" });
        return;
      }
      this.setState({
        data: response.data.filter((elem, index) => index < 5)
      });
    });

    // .catch(error => {
    //   this.setState({ msg: "No User" });
    //   console.log("error");
    // });

    clear();
  };

  render() {
    if (this.state.msg === "No User")
      return (
        <>
          <div className="Search">
            <SearchBar search={this.search} />
          </div>
          <h2 style={{ textAlign: "center" }}>
            Sorry, search dosnt match any user
          </h2>
        </>
      );
    if (this.state.msg === "No Repos")
      return (
        <>
          <div className="Search">
            <SearchBar search={this.search} />
          </div>
          <h2 style={{ textAlign: "center" }}>Sorry, no Repos for this user</h2>
        </>
      );
    return (
      <>
        <div className="Search">
          <SearchBar search={this.search} />
        </div>
        {this.state.data.length !== 0 ? <Table data={this.state.data} /> : ""}
      </>
    );
  }
}

export default App;
