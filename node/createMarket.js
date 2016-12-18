"use strict";

const markets = require('./all_markets.js');
const cards = require('./all_cards.js');

function getMatchingCards(cardMatchFn, deck, skipCards) {
    var matchingCards = [];
    for (var i = 0; i < deck.length; i++) {
        var card = deck[i];
        if (cardMatchFn(card)) {
            if (skipCards.indexOf(card) == -1) {
                matchingCards.push(card);
            }
        }
    }
    return matchingCards;
}

function getCardsInMarket(market) {
    var deck = cards.ALL_CARDS;
    var retCards = [];
    for (var i = 0; i < market.cards.length; i++) {
        var cardFn = market.cards[i];
        var eligibleCards = getMatchingCards(cardFn, deck, retCards);
        var card = eligibleCards[randNumber(eligibleCards.length)];
        retCards.push(card);
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
