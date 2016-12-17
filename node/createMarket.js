"use strict";

const markets = require('./all_markets.js');
// Ideally this would be const
var cards = require('./all_cards.js');

function getMatchingCards(cardMatchFn, cards) {
    var matchingCards = [];
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        if (cardMatchFn(card)) {
            matchingCards.push(card);
        }
    }
    return matchingCards;
}

function getCardsInMarket(market) {
    var remainingCards = cards.ALL_CARDS;
    var retCards = [];
    for (var i = 0; i < market.cards.length; i++) {
        var cardFn = market.cards[i];
        var eligibleCards = getMatchingCards(cardFn, remainingCards);
        var card = eligibleCards[randNumber(eligibleCards.length)];
        retCards.push(card);
        var index = remainingCards.indexOf(card);
        remainingCards.splice(index, 1);
    }
    return retCards;
}

function randNumber(max) {
    return Math.floor(Math.random() * max);
}

function createRandomMarket() {
    var marketNumber = randNumber(6);
    return getCardsInMarket(markets.ALL_MARKETS[marketNumber]);
}

exports.createRandomMarket = createRandomMarket;
