import React, { Component } from "react";

class TableItem extends Component {
  state = {
    yOn: ""
  };

  Check = () => {
    if (this.props.data.private) return "Yes";
    else return "No";
  };

  Private = () => {
    if (this.props.data.private) return "Private";
    else return "Public";
  };
  render() {
    return (
      <>
        <td>{this.props.ID}</td>
        <td>{this.props.data.name}</td>
        <td>{this.Private()}</td>
        <td>
          <input type="checkBox" checked={this.props.data.private} disabled />
        </td>
        <td>{this.Check()}</td>
        <td>{this.props.data.language}</td>
        <td>
          <a href={this.props.data.clone_url}>
            <button>Repo</button>
          </a>
        </td>
      </>
    );
  }
}

export default TableItem;
