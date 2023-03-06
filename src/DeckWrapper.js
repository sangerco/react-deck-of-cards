import React, { useState, useEffect } from 'react';
import Deck from './Deck';
import axios from 'axios';

const DeckWrapper = () => {
    const [ deckVisible, setDeckVisible ] = useState(true);
    const [ deckId, setDeckId ] = useState('f1678z6x12j7');
    useEffect(() => {
        async function getDeckId() {
            const res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
            setDeckId(res.data.deck_id);
        }
        getDeckId()
    }, [])

    async function getCard(deckId) {
        const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        const newCard = res.data.cards[0].image;
        return newCard;
        
    }

    return (
        <div>
            <Deck deckId={deckId} getCard={getCard} newCard={newCard}/>
        </div>
    )
}

export default DeckWrapper;
