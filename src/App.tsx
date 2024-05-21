import './App.css'
import Card from "./components/Card/Card";
import CardDeck from './lib/CardDeck';
import React, { useState } from 'react';

const App: React.FC = () => {
    const [cards, setCards] = useState<Card[]>([]);

    const dealCards = () => {
        const deck = new CardDeck();
        const dealtCards = deck.getCards(5);
        setCards(dealtCards);
    };


    return (
        <>
            <div className='playingCards faceImages'>
                <button onClick={dealCards}>Раздать карты</button>
                {cards.length > 0 ? (
                    <>
                    <p>Карты есть</p>
                        {cards.map((card, index) => (
                            <Card key={index} rank={card.rank} suit={card.suit}/>
                        ))}
                    </>
                ) : (
                    <p>Карты нет</p>
                )}
            </div>
        </>
    );
};

export default App
