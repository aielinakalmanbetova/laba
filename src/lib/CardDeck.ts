import Card from './Card';

class CardDeck {
    public cards: Card[];

    constructor() {
        this.cards = [];
        const suits = ['diams', 'hearts' , 'clubs', 'spades'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        for (let suit of suits) {
            for (let rank of ranks) {
                this.cards.push(new Card(rank,suit));
            }
        }
    };

    public getCard(): Card {
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        return this.cards.splice(randomIndex,1) [0];
    }

    public getCards(howMany: number): Card[] {
        const cards: Card[] = [];
        for (let i = 0; i < howMany; i++) {
            cards.push(this.getCard());
        }
        return cards;
    }
}

export default CardDeck;