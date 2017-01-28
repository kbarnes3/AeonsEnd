require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.ALL_CARDS = [
    {
        "name": "Jade",
        "type": "Gem",
        "cost": 2,
        "expansion": "Base"
    },
    {
        "name": "Leeching Agate",
        "type": "Gem",
        "cost": 3,
        "expansion": "The Nameless"
    },
    {
        "name": "Sifter's Pearl",
        "type": "Gem",
        "cost": 3,
        "expansion": "Base"
    },
    {
        "name": "V'riswood Amber  ",
        "type": "Gem",
        "cost": 3,
        "expansion": "Base"
    },
    {
        "name": "Diamond Cluster",
        "type": "Gem",
        "cost": 4,
        "expansion": "Base"
    },
    {
        "name": "Searing Ruby",
        "type": "Gem",
        "cost": 4,
        "expansion": "Base"
    },
    {
        "name": "Banishing Topaz",
        "type": "Gem",
        "cost": 5,
        "expansion": "The Depths"
    },
    {
        "name": "Burning Opal",
        "type": "Gem",
        "cost": 5,
        "expansion": "Base"
    },
    {
        "name": "Clouded Sapphire",
        "type": "Gem",
        "cost": 6,
        "expansion": "Base"
    },
    {
        "name": "Flexing Dagger",
        "type": "Relic",
        "cost": 2,
        "expansion": "Base"
    },
    {
        "name": "Bottled Vortex",
        "type": "Relic",
        "cost": 3,
        "expansion": "Base"
    },
    {
        "name": "Unstable Prism",
        "type": "Relic",
        "cost": 3,
        "expansion": "Base"
    },
    {
        "name": "Blasting Staff",
        "type": "Relic",
        "cost": 4,
        "expansion": "Base"
    },
    {
        "name": "Focusing Orb",
        "type": "Relic",
        "cost": 4,
        "expansion": "Base"
    },
    {
        "name": "Transmogrifier",
        "type": "Relic",
        "cost": 4,
        "expansion": "The Depths"
    },
    {
        "name": "Vim Dynamo",
        "type": "Relic",
        "cost": 4,
        "expansion": "The Depths"
    },
    {
        "name": "Mage's Talisman",
        "type": "Relic",
        "cost": 5,
        "expansion": "Base"
    },
    {
        "name": "Molten Hammer",
        "type": "Relic",
        "cost": 5,
        "expansion": "The Nameless"
    },
    {
        "name": "Temporal Helix",
        "type": "Relic",
        "cost": 7,
        "expansion": "The Nameless"
    },
    {
        "name": "Phoenix Flame",
        "type": "Spell",
        "cost": 3,
        "expansion": "Base"
    },
    {
        "name": "Spectral Echo",
        "type": "Spell",
        "cost": 3,
        "expansion": "Base"
    },
    {
        "name": "Amplify Vision",
        "type": "Spell",
        "cost": 4,
        "expansion": "Base"
    },
    {
        "name": "Blaze",
        "type": "Spell",
        "cost": 4,
        "expansion": "The Nameless"
    },
    {
        "name": "Ignite",
        "type": "Spell",
        "cost": 4,
        "expansion": "Base"
    },
    {
        "name": "Lava Tendril",
        "type": "Spell",
        "cost": 4,
        "expansion": "Base"
    },
    {
        "name": "Void Bond",
        "type": "Spell",
        "cost": 4,
        "expansion": "The Depths"
    },
    {
        "name": "Combustion",
        "type": "Spell",
        "cost": 5,
        "expansion": "The Depths"
    },
    {
        "name": "Dark Fire",
        "type": "Spell",
        "cost": 5,
        "expansion": "Base"
    },
    {
        "name": "Essence Theft",
        "type": "Spell",
        "cost": 5,
        "expansion": "Base"
    },
    {
        "name": "Feral Lightning",
        "type": "Spell",
        "cost": 5,
        "expansion": "Base"
    },
    {
        "name": "Oblivion Swell",
        "type": "Spell",
        "cost": 5,
        "expansion": "Base"
    },
    {
        "name": "Chaos Arc",
        "type": "Spell",
        "cost": 6,
        "expansion": "Base"
    },
    {
        "name": "Devouring Shadow",
        "type": "Spell",
        "cost": 6,
        "expansion": "The Depths"
    },
    {
        "name": "Planar Insight",
        "type": "Spell",
        "cost": 6,
        "expansion": "Base"
    },
    {
        "name": "Scrying Bolt",
        "type": "Spell",
        "cost": 6,
        "expansion": "The Nameless"
    },
    {
        "name": "Wildfire Whip",
        "type": "Spell",
        "cost": 6,
        "expansion": "Base"
    },
    {
        "name": "Arcane Nexus",
        "type": "Spell",
        "cost": 7,
        "expansion": "Base"
    },
    {
        "name": "Consuming Void",
        "type": "Spell",
        "cost": 7,
        "expansion": "Base"
    },
    {
        "name": "Disintegrating Scythe",
        "type": "Spell",
        "cost": 7,
        "expansion": "The Depths"
    },
    {
        "name": "Sage's Brand",
        "type": "Spell",
        "cost": 7,
        "expansion": "The Nameless"
    },
    {
        "name": "Monstrous Inferno",
        "type": "Spell",
        "cost": 8,
        "expansion": "The Depths"
    },
    {
        "name": "Radiance",
        "type": "Spell",
        "cost": 8,
        "expansion": "The Nameless"
    }
];

},{}],2:[function(require,module,exports){
"use_strict";

const predicates = require('./matchingPredicates.js');

exports.ALL_MARKETS = [
    {
        "name": "Market Setup 1",
        "cards": [
            predicates.GemLessThan(4),
            predicates.GemEquals(4),
            predicates.AnyGem(),
            predicates.AnyRelic(),
            predicates.AnyRelic(),
            predicates.SpellLessThan(5),
            predicates.SpellLessThan(5),
            predicates.SpellGreaterThan(5),
            predicates.SpellGreaterThan(5)
        ]
    },
    {
        "name": "Market Setup 2",
        "cards": [
            predicates.GemGreaterThan(3),
            predicates.GemGreaterThan(3),
            predicates.GemGreaterThan(3),
            predicates.RelicGreaterThan(4),
            predicates.AnyRelic(),
            predicates.SpellLessThan(6),
            predicates.SpellLessThan(6),
            predicates.SpellLessThan(6),
            predicates.SpellGreaterThan(6)
        ]
    },
    {
        "name": "Market Setup 3",
        "cards": [
            predicates.GemLessThan(4),
            predicates.GemCostInRangeInclusive(4, 5),
            predicates.GemCostInRangeInclusive(4, 5),
            predicates.AnyRelic(),
            predicates.SpellEquals(3),
            predicates.SpellEquals(4),
            predicates.SpellGreaterThan(5),
            predicates.SpellGreaterThan(5),
            predicates.SpellGreaterThan(5)
        ]
    },
    {
        "name": "Market Setup 4",
        "cards": [
            predicates.GemGreaterThan(4),
            predicates.AnyGem(),
            predicates.AnyGem(),
            predicates.RelicLessThan(4),
            predicates.RelicGreaterThan(4),
            predicates.AnyRelic(),
            predicates.SpellLessThan(5),
            predicates.SpellGreaterThan(5),
            predicates.AnySpell()
        ]
    },
    {
        "name": "Market Setup 5",
        "cards": [
            predicates.GemEquals(2),
            predicates.GemEquals(3),
            predicates.GemEquals(4),
            predicates.RelicEquals(5),
            predicates.AnyRelic(),
            predicates.SpellEquals(4),
            predicates.SpellEquals(5),
            predicates.SpellEquals(6),
            predicates.SpellGreaterThan(6)
      ]
    },
    {
        "name": "Market Setup 6",
        "cards": [
            predicates.GemEquals(3),
            predicates.GemEquals(4),
            predicates.RelicLessThan(4),
            predicates.RelicGreaterThan(4),
            predicates.AnyRelic(),
            predicates.SpellCostInRangeInclusive(3, 4),
            predicates.SpellCostInRangeInclusive(5, 6),
            predicates.SpellCostInRangeInclusive(5, 6),
            predicates.SpellGreaterThan(6)
        ]
      }
];

},{"./matchingPredicates.js":3}],3:[function(require,module,exports){
"use strict";

exports.GemCostInRangeInclusive = function (lower, upper) {
    var itemType = "Gem";
    return itemMatchesRangeCost(itemType, lower, upper);
};

exports.GemLessThan = function (cost) {
    var itemType = "Gem";
    return itemMatchesLessThanCost(itemType, cost);
};

exports.GemEquals = function (cost) {
    var itemType = "Gem";
    return itemMatchesEqualsCost(itemType, cost);
};

exports.GemGreaterThan = function (cost) {
    var itemType = "Gem";
    return itemMatchesGreaterThanCost(itemType, cost);
};

exports.AnyGem = function () {
    var itemType = "Gem";
    return itemMatchesAnyCost(itemType);
};

exports.RelicCostInRangeInclusive = function (lower, upper) {
    var itemType = "Relic";
    return itemMatchesRangeCost(itemType, lower, upper);
};

exports.RelicLessThan = function (cost) {
    var itemType = "Relic";
    return itemMatchesLessThanCost(itemType, cost);
};

exports.RelicEquals = function (cost) {
    var itemType = "Relic";
    return itemMatchesEqualsCost(itemType, cost);
};

exports.RelicGreaterThan = function (cost) {
    var itemType = "Relic";
    return itemMatchesGreaterThanCost(itemType, cost);
};

exports.AnyRelic = function () {
    var itemType = "Relic";
    return itemMatchesAnyCost(itemType);
};

exports.SpellCostInRangeInclusive = function (lower, upper) {
    var itemType = "Spell";
    return itemMatchesRangeCost(itemType, lower, upper);
};

exports.SpellLessThan = function (cost) {
    var itemType = "Spell";
    return itemMatchesLessThanCost(itemType, cost);
};

exports.SpellEquals = function (cost) {
    var itemType = "Spell";
    return itemMatchesEqualsCost(itemType, cost);
};

exports.SpellGreaterThan = function (cost) {
    var itemType = "Spell";
    return itemMatchesGreaterThanCost(itemType, cost);
};

exports.AnySpell = function () {
    var itemType = "Spell";
    return itemMatchesAnyCost(itemType);
};

/* Private functions below */

function itemMatchesRangeCost(itemType, lower, upper) {
    var costPredicate = function(itemCost) {
        return itemCost >= lower && itemCost <= upper;
    };
    return itemMatchesCostPredicate(itemType, costPredicate);
}

function itemMatchesEqualsCost(itemType, cost) {
    var costPredicate = function(itemCost) {
        return itemCost == cost;
    };
    return itemMatchesCostPredicate(itemType, costPredicate);
}

function itemMatchesLessThanCost(itemType, cost) {
    var costPredicate = function(itemCost) {
        return itemCost < cost;
    };
    return itemMatchesCostPredicate(itemType, costPredicate);
}

function itemMatchesGreaterThanCost(itemType, cost) {
    var costPredicate = function(itemCost) {
        return itemCost > cost;
    };
    return itemMatchesCostPredicate(itemType, costPredicate);
}

function itemMatchesAnyCost(itemType) {
    var costPredicate = function(itemCost) {
        return true;
    };
    return itemMatchesCostPredicate(itemType, costPredicate);
}

function itemMatchesCostPredicate(itemType, costPredicate) {
    return function(card) {
        return card.type == itemType && costPredicate(card.cost);
    };
}

},{}],"market":[function(require,module,exports){
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

function  getCardsInExpansions(expansions) {
    var all_cards = cards.ALL_CARDS;
    var all_cards_length = all_cards.length;
    var matchingCards = [];
    for (var i = 0; i < all_cards_length; i++) {
        var card = all_cards[i];
        if (expansions.indexOf(card.expansion) != -1) {
            matchingCards.push(card);
        }
    }

    return matchingCards;
}

function getCardsInMarket(market, expansions) {
    var deck = getCardsInExpansions(expansions);
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

},{"./all_cards.js":1,"./all_markets.js":2}]},{},[]);
