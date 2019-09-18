
import React from 'react';

export default function GuessSection(props) {

    return (
      <div>
      <h2>What is your guess? </h2>
         <input type="number" onChange={(e) => props.handleChange(e)}/>
         <button onClick={() => props.handleClick()}> Enter </button>
      </div>
    )
}


