import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddComment from './AddComment.js'
import myData from './api.json';

class Comments extends Component {
  constructor (props) {
    super(props);
    this.ReplyOpen = this.ReplyOpen.bind(this);

  }
  ReplyOpen(){
      return(
        <AddComment />
        )
  }
  render() {
    console.log(this.props.myData);
    var myData = this.props.myData;
    return (
      <div className="Outer-wrap">
        <div className="Profile-pic">
          <img src={'https://organicthemes.com/demo/profile/files/2012/12/profile_img.png'} />
        </div>
        <div className="Details">
          <div className="Name-Card">
            <span className="Profile-name">{myData[0].name}</span> > <span className="Replied-to">{myData[0].repliedto}</span> - <span className="Submitted-date"> {myData[0].postedon}</span>
          </div>
          <div className="Comments">
            <span> A good exercise.</span>
          </div>
          <div className="Actions">
            <button className="Upvote">+{myData[0].upvote}</button> | <button className="Downvote">-{myData[0].downvote}</button> | <button onClick={this.ReplyOpen} className="Reply"> Reply </button> 
          </div>
        {this.ReplyOpen()}  

        </div>
      </div>
    );
  }
}

export default Comments;
