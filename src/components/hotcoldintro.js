import React from 'react';

export default class HotColdIntro extends React.Component {

  render() {
    return (
      <div className="HotColdIntro">
        <h1>Welcome to Mulan's Random Number Guessing Game!</h1>
        <h2>In this game, I'll select a random number between 1 and 100.</h2>
        <h2>Your role is to guess the number based on clues that I give you.</h2>
        <h2>If you are close to the number, I'll tell you "HOT;" if not, I'll tell you "COLD."</h2>
        <h1>OK?  Let's Play!</h1>
      </div>
    );
  }
}

