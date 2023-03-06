import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Deck = ({ getCard }) => {


    return (
        <div>
            <div>
                <button onClick={getCard}>Gimme a card!</button>
            </div>
            <div>
                <img src={card} />
            </div>  
        </div>
    )
}

export default Deck;


