import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comments from './Comments.js';
import myData from './api.json';

class App extends Component {
  render() {
    var myDatas = myData;
    console.log(myData);
    return (
      <div className="App">
        <div className="App-header">
          <Comments  myData={myDatas}/>
        </div>
      </div>
    );
  }
}

export default App;
