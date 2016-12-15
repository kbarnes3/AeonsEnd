function GemCostInRangeInclusive(lower, upper) {
  var itemType = "Gem";
  return itemMatchesRangeCost(itemType, lower, upper);
};

function GemLessThan(cost) {
  var itemType = "Gem";
  return itemMatchesLessThanCost(itemType, cost);
};

function GemEquals(cost) {
  var itemType = "Gem";
  return itemMatchesEqualsCost(itemType, cost);
};

function GemGreaterThan(cost) {
  var itemType = "Gem";
  return itemMatchesGreaterThanCost(itemType, cost);
};

function AnyGem() {
  var itemType = "Gem";
  return itemMatchesAnyCost(itemType);
};

function RelicCostInRangeInclusive(lower, upper) {
  var itemType = "Relic";
  return itemMatchesRangeCost(itemType, lower, upper);
};

function RelicLessThan(cost) {
  var itemType = "Relic";
  return itemMatchesLessThanCost(itemType, cost);
};

function RelicEquals(cost) {
  var itemType = "Relic";
  return itemMatchesEqualsCost(itemType, cost);
};

function RelicGreaterThan(cost) {
  var itemType = "Relic";
  return itemMatchesGreaterThanCost(itemType, cost);
};

function AnyRelic() {
  var itemType = "Relic";
  return itemMatchesAnyCost(itemType);
};

function SpellCostInRangeInclusive(lower, upper) {
  var itemType = "Spell";
  return itemMatchesRangeCost(itemType, lower, upper);
};

function SpellLessThan(cost) {
  var itemType = "Spell";
  return itemMatchesLessThanCost(itemType, cost);
};

function SpellEquals(cost) {
  var itemType = "Spell";
  return itemMatchesEqualsCost(itemType, cost);
};

function SpellGreaterThan(cost) {
  var itemType = "Spell";
  return itemMatchesGreaterThanCost(itemType, cost);
};

function AnySpell() {
  var itemType = "Spell";
  return itemMatchesAnyCost(itemType);
};

/* Private functions below */

function itemMatchesRangeCost(itemType, lower, upper) {
  var costPredicate = function(itemCost) {
    return itemCost >= lower && itemCost <= upper;
  };
  return itemMatchesCostPredicate(itemType, costPredicate);
};

function itemMatchesEqualsCost(itemType, cost) {
  var costPredicate = function(itemCost) {
    return itemCost == cost;
  };
  return itemMatchesCostPredicate(itemType, costPredicate);
};

function itemMatchesLessThanCost(itemType, cost) {
  var costPredicate = function(itemCost) {
    return itemCost < cost;
  };
  return itemMatchesCostPredicate(itemType, costPredicate);
};

function itemMatchesGreaterThanCost(itemType, cost) {
  var costPredicate = function(itemCost) {
    return itemCost > cost;
  };
  return itemMatchesCostPredicate(itemType, costPredicate);
};

function itemMatchesAnyCost(itemType) {
  var costPredicate = function(itemCost) {
  	return true;
  };
  return itemMatchesCostPredicate(itemType, costPredicate);
};

function itemMatchesCostPredicate(itemType, costPredicate) {
  return function(card) {
    return card.type == itemType && costPredicate(card.cost);
  };
};