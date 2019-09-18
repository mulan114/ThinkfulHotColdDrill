import React from 'react';

export default function StartOver(props) {

    console.log('i am in startover');

    return (
        <div>
        	<button onClick={() => props.handleClick()}> Start Over </button>
        </div>
    )
}