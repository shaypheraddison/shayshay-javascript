// # create a deck of cards where the cards are a dictionary


const faces = ["Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];

var newDeck = [];
for (let face of faces) {
    for (let suit of suits) {
        newDeck.push({Face: face, Suit: suit});
    }
} console.log(newDeck);