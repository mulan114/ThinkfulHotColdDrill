import React from 'react';

export default function GuessFeedback(props) {
    console.log('i am in guessfeedback')
    console.log(props);
    return (
        <div>
        	<div>
        		<h2>Your guess is currently {props.curClue}! </h2>
        	</div>
        </div>
    )
}