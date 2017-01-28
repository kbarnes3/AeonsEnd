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

function getCardsInMarket(market, expansions) {
    var deck = cards.ALL_CARDS;
    var retCards = [];
    for (var i = 0; i < market.cards.length; i++) {
        var cardFn = market.cards[i];
        var eligibleCards = getMatchingCards(cardFn, deck, retCards);
        var card = eligibleCards[randNumber(eligibleCards.length)];
        retCards.push(card);
    }
    sortCards(retCards);
    return retCards;
}

// Sorts first by type, then cost, and finally by name.
function sortCards(deck) {
    var compareFn = function(c1, c2) {
        var typeOrder = ['Gem', 'Relic', 'Spell'];
        if (c1.type == c2.type) {
            if (c1.cost == c2.cost) {
                return c1.name.localeCompare(c2.name);
            }
            return c1.cost - c2.cost;
        }
        var c1TypeIndex = typeOrder.indexOf(c1.type);
        var c2TypeIndex = typeOrder.indexOf(c2.type);
        return c1TypeIndex - c2TypeIndex;
    };
    deck.sort(compareFn);
}

function randNumber(max) {
    return Math.floor(Math.random() * max);
}

function createRandomMarket(expansions) {
    var marketNumber = randNumber(6);
    return getCardsInMarket(markets.ALL_MARKETS[marketNumber], expansions);
}

exports.createRandomMarket = createRandomMarket;
