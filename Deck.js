import React, { useState, useEffect } from 'react';
import './Deck.css';

const Deck = ({ image }) => {

    return (
        <div className='Deck-card'>
            <img src={image} />
        </div>

    )
}

export default Deck;


