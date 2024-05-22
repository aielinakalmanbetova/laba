import './App.css'
import React, {useState} from 'react';
import CardDeck from './lib/CardDeck';
import MyCard from './components/Card/MyCard';
import Card from './lib/Card';
import PokerHand from './lib/PokerHand';


const App: React.FC = () => {
    const [dealtCards, setDealtCards] = useState<Card[]>([]);
    const [deck, setDeck] = useState<CardDeck>(new CardDeck());

    const dealCards = () => {
       if (deck.cards.length < 5) {
           setDeck(new CardDeck());
           setDealtCards([]);
       } else {
           const newDealtCards = deck.getCards(5);
           setDealtCards(newDealtCards);
       }
    };

    const determineOutcome = () => {
      const hand = new PokerHand(dealtCards);
        return hand.getOutcome();
    }

    const outcome = determineOutcome();

    return (
        <>
            <div className='playingCards faceImages'>
                <p>Количество карт: {deck.cards.length}</p>
                <p>Результат раунда: {outcome}</p>
                <button onClick={dealCards}>Раздать карты</button>
                {dealtCards.length > 0 ?
                    <div>
                        <p>Карты есть</p>
                        {dealtCards.map((card, index) => (
                            <MyCard key={index} rank={card.rank} suit={card.suit}/>
                        ))}
                    </div>
                 :
                    <p>Карты нет</p>
                }
            </div>
        </>
    );
};

export default App;
