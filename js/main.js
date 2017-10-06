var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	}
];

var ranksInPlay = [];
var cardsInPlay = [];

var checkForMatch = function() {
	if (ranksInPlay[0] === ranksInPlay[1] && cardsInPlay[0] !== cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};

var shuffle = function(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i+1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
};

var flipCard = function() {
	var cardId = this.getAttribute('data-id');

	console.log("User flipped " + cards[cardId].rank);
	ranksInPlay.push(cards[cardId].rank);
	cardsInPlay.push(cards[cardId].cardImage);

	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	this.setAttribute('src', cards[cardId].cardImage);

	if (ranksInPlay.length === 2) {
		checkForMatch();
	}
};

var createBoard = function() {
	for (var i=0; i<cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.setAttribute('id', 'card_padding')
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
	shuffle(cards);
};

createBoard();

