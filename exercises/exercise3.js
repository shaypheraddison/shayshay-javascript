// # create a deck of cards where the cards are a dictionary

const cards = {
    faces: ["Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "3", "2"],
    suits: ["Hearts", "Clubs", "Diamonds", "Spades"]
};

for (card in cards) {
    for (let face of cards.suits) {
        for (let suit of cards.faces) {
            console.log(suit + " of " + face);
        }
    }
}
