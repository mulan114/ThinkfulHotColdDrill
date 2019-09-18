import React from 'react';
import StartOver from './components/startover';
import HotColdIntro from './components/hotcoldintro';
import GuessSection from './components/guesssection';
import ShowGuesses from './components/showguesses';
import GuessFeedback from './components/guessfeedback';

import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      rand: Math.floor(Math.random()*101),
      curGuess:0,
      guesses:[],
      clue: "COLD"
    };
    console.log(this.state);
  }

  setCurNum(evt) {
    console.log(evt.currentTarget.value);
    this.setState({
      curGuess: parseInt(evt.currentTarget.value)
    });
    console.log(this.state.curGuess);
  }

  prevGuess(pg) {
    if (this.state.curGuess === pg) {
      alert('You already guessed this number');
    }
  }

  guess() {
    console.log(this.state.curGuess);
    const cg = (this.state.curGuess);
    const rn = (this.state.rand);
 //   this.state.guesses.map(prevGuess());
    if (cg === rn) {
      this.setState({
        clue: "CORRECT"
      });
    }
    else if ((Math.abs(cg-rn)) <= 5) {
      this.setState({
        clue: "HOT"
      });
    }
    else if (((Math.abs(cg-rn)) > 5) && ((Math.abs(cg-rn) <=10))) {
      this.setState({
        clue: "sorta hot"
      });
    }
    else if (((Math.abs(cg-rn)) > 10) && ((Math.abs(cg-rn) <=15))) {
      this.setState({
        clue: "sorta cold"
      });
    }
    else if ((Math.abs(cg-rn)) > 15) {
      this.setState({
        clue: "COLD"
      });
    }
    this.setState({
      guesses: [...this.state.guesses, cg]
    });
  }

  restart() {
    window.location.reload();
  }

  render() {
    
    return (
      <div className="App">
        <StartOver handleClick ={() => this.restart()} />
        {
          this.state.guesses.length === 0 ?<HotColdIntro />: null 
        }
        <GuessSection handleChange = {(event) => this.setCurNum(event)} handleClick = {() => this.guess()} />
        <ShowGuesses guesses={this.state.guesses} />
        {
          this.state.guesses.length !== 0 ?<GuessFeedback curClue={this.state.clue}/>: null
        }
      </div>
    );
  }
}

//import RandomNumber from './components/randomnumber';
//        <RandomNumber rn={this.state.rand} />

