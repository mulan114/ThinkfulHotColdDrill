import React from 'react';

export default function ShowGuesses(props) {

    return (
        <div>
        	<div>
        		<h2>Total guesses so far: {props.guesses.length} </h2>
        	</div>
        	<div>
	          {
	            props.guesses.map((item, index) => {
	              return <p key={index}> {item} </p>
	            })
	          }
	        </div>
        </div>
    )
}