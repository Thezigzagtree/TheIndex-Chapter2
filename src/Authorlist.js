import React, { Component } from "react";

import AuthorCard from "./AuthorCard";
class Authorlist extends Component {
  render() {
    return (
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">
          {this.props.authors.map((author, index) => {
            return (
              <AuthorCard author={author} key={author.first_name + index} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Authorlist;
