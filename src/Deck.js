import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Deck = ({ deckId }) => {
    const [ card, setCard] = useState(null);
    useEffect(() => {
        async function getCard() {
            const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
            setCard(res.data.cards[0].image);
        }
        getCard()
    }, [card]);

    return (
        <div>
            <div>
                <button>Gimme a card!</button>
            </div>
            <div>
                <img src={card} />
            </div>  
        </div>
    )
}

export default Deck;


