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
