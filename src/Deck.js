import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Deck = ({ newCard, getCard }) => {


    return (
        <div>
            <div>
                <button onClick={getCard}>Gimme a card!</button>
            </div>
            <div>
                <img src={newCard} />
            </div>  
        </div>
    )
}

export default Deck;


