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

    return (
        <div>
            <Deck deckId={deckId} />
        </div>
    )
}

export default DeckWrapper;
