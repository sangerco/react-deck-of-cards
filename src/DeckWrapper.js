import React, { useState, useEffect, useRef } from 'react';
import Deck from './Deck';
import './DeckWrapper.css';
import axios from 'axios';

const DeckWrapper = () => {
    // const [ currentCard, setCurrentCard ] = useState(null)
    const [ autoDraw, setAutoDraw ] = useState(false);
    const [ drawnCards, setDrawnCards ] = useState([]);
    const [ deck, setDeck ] = useState('f1678z6x12j7');
    const timer = useRef(null);


    useEffect(() => {
        async function getDeck() {
            const res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
            setDeck(res.data);
        }
        getDeck()
    }, [setDeck])

    useEffect(() => {
        async function getCard() {
            let deckId = deck.deck_id;
            console.log(deckId)

            try {
                let res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);

                if (res.data.remaining === 0) {
                    setAutoDraw(false);
                    throw new Error("End of the deck!");
                }

                const card = res.data.cards[0];

                setDrawnCards(c => [...c, { id: card.code, image: card.image }]);

            } catch(e) {
                alert(e)
            }
        }

        if (autoDraw && !timer.current) {
            timer.current = setInterval( async () => {
                await getCard();
            }, 1000);
        }
            
        return () => {
            clearInterval(timer.current);
            timer.current = null;
        };
    }, [autoDraw, setAutoDraw, deck])
    
    const toggleAutoDraw = () => {
        setAutoDraw(auto => !auto);
    };

    const cards = drawnCards.map(c => (<Deck key={c.id} image={c.image}/>));



    return (
        <div className='DeckWrapper-deck'>
            {deck ? (<button onClick={toggleAutoDraw}>
                {autoDraw ? 'Stop drawing for me.' : 'Draw for me!'} 
                </button>
            ) : null}
            <div className='DeckWrapper-card'>{cards}</div>
        </div>
    );
}

export default DeckWrapper;
