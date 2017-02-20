import React, { Component } from 'react';

class Contacts extends Component {
  render() {
    const {
      name,
      email,
    } = this.props;

    return (
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    );
  }
}

export default Contacts;
