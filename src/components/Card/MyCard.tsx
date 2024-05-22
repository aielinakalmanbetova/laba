import React from "react";

interface Props {
    rank: string;
    suit: string;
}
const MyCard: React.FC<Props> = ({rank, suit}) => {

    const getRankSymbol = (rank: string) => {
       switch (rank) {
           case '2':
               return '2';
           case '3':
               return '3';
           case '4':
               return '4';
           case '5':
               return '5';
           case '6':
               return '6';
           case '7':
               return '7';
           case '8':
               return '8';
           case '9':
               return '9';
           case '10':
               return '10';
           case 'J':
               return 'J';
           case 'Q':
               return 'Q';
           case 'K':
               return 'K';
           case 'A':
               return 'A';
           default:
               return '';
       }
    };
    const getSuitSymbol = (suit: string) => {
        switch (suit) {
            case 'diams':
                return '♦';
            case 'hearts':
                return '♥';
            case 'clubs':
                return '♣';
            case 'spades':
                return '♠';
            default:
                return '';
        }
    };

    return (
        <span className={`card rank-${rank} ${suit}`}>
            <span className="rank">{getRankSymbol(rank)}</span>
            <span className="suit">{getSuitSymbol(suit)}</span>
        </span>

    );
};

export default MyCard;