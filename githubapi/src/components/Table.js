import React, { Component } from "react";
import TableItem from "./TableItem";

class Table extends Component {
  state = {};

  render() {
    const { data } = this.props;

    return (
      <>
        <div className="Table">
          <table border="1">
            <thead>
              <tr>
                <th>number</th>
                <th>name</th>
                <th>repo state</th>
                <th>check</th>
                <th>private</th>
                <th>language</th>
                <th>url</th>
              </tr>
            </thead>
            <tbody>
              {data.map((e, index) => (
                <tr>
                  <TableItem data={e} ID={index + 1} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Table;
