import React, { Component } from "react";
import "./App.css";
import { fetchSmurfs } from '../Actions/MainActions'

import Form from './Form'
import SmurfList from './Smurfs'
class App extends Component {
  render() {
    
    fetchSmurfs()
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <Form/>
        <SmurfList/>
      </div>
    );
  }
}

export default App;
