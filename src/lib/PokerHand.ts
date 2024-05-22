import Card from './Card';

class PokerHand {
    private cards: Card[];

    constructor(cards: Card[]) {
        this.cards = cards;
    }

    public getOutcome(): string {
        if (this.isFlush()) {
            return 'Флеш';
        } else if (this.hasPair()) {
            return '';
        } else if (this.hasTwoPairs()) {
            return 'Две пары';
        } else if (this.hasThree()) {
            return 'Тройка';
        } else {
            return 'Старшая карта';
        }
    }

    private isFlush(): boolean {
        const suits = this.cards.map(card => card.suit);
        return new Set(suits).size === 1;
    }

    private hasPair(): boolean {
        const ranks = this.cards.map(card => card.rank);
        return ranks.some((rank, index) => ranks.indexOf(rank) !== index);
    }

    private hasTwoPairs(): boolean {
        const ranks = this.cards.map(card => card.rank);
        const uniqueRanks = new Set(ranks);
        return uniqueRanks.size === 3 && ranks.length === 3;
    }

    private hasThree(): boolean {
        const ranks = this.cards.map(card => card.rank);
        return ranks.some(rank => ranks.filter(r => r === rank).length === 3);
    }
}

export default PokerHand;