import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class AddComment extends Component {
  render() {
    return (
      <div className="Add-Comment-wrap">
      <textarea></textarea>
      <input type="submit" className="Submit" />
      </div>
    );
  }
}

export default AddComment;
