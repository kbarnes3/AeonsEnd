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
