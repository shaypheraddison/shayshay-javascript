// # create a deck of cards where the card is a string value

const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
const faces = ["Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "3", "2"];


var deck = [];
for (let suit of suits) {
    for (let face of faces) {
        deck.push(face + " of " + suit);
    }
}
console.log(deck);