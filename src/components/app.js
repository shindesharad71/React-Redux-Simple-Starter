import React, { Component } from 'react';

export default class App extends Component {
  render() {
    const myStyle = { marginTop: '60px' }
    return (
      <div style={myStyle} className="text-center text-primary">
        <h3>React & Redux Simple Starter</h3>
      </div>
    );
  }
}
