import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: null,
      score: 0,
      gameOver: false,
      message: null
    };
  }
  
  render() {
    return (
      <div className="App">
      Hello
      </div>
    );
  }
}

export default App;
