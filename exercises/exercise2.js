// # create a deck of cards where the card is a string value

// # king_of_hearts = "King of Hearts"
// # king_of_clubs = "King of Clubs"
// # king_of_diamonds = "King of Diamonds"
// # king_of_spades = "King of Spades"
// # print(king_of_clubs)
// # print(king_of_diamonds)
// # print(king_of_hearts)
// # print(king_of_spades)

const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
const faces = ["Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
console.log(suits);
console.log(faces);
for (let suit of suits) {
    for (let face of faces) {
        console.log(face + " of " + suit);
    }
}