import React from 'react';
import './Quote.scss'

function Quote(props) {
    return (
        <div className='quote'>
            <div className="the-quote">"The studio took us to a smarter, right and of course beautiful area."</div>
            <div className="author">Aviv Rosenblum, Cobwebs</div>
        </div>
    );
}

export default Quote;