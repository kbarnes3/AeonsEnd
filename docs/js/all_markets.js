var ALL_MARKETS = [
  {
  	"name": "Market Setup 1",
  	"cards": [
  	  GemLessThan(4),
  	  GemEquals(4),
  	  AnyGem(),
  	  AnyRelic(),
  	  AnyRelic(),
  	  SpellLessThan(5),
  	  SpellLessThan(5),
  	  SpellGreaterThan(5),
  	  SpellGreaterThan(5)
  	]
  },
  {
  	"name": "Market Setup 2",
  	"cards": [
  	  GemGreaterThan(3),
  	  GemGreaterThan(3),
  	  GemGreaterThan(3),
  	  RelicGreaterThan(4),
  	  AnyRelic(),
  	  SpellLessThan(6),
  	  SpellLessThan(6),
  	  SpellLessThan(6),
  	  SpellGreaterThan(6)
  	],
  },
  {
  	"name": "Market Setup 3",
  	"cards": [
  	  GemLessThan(4),
  	  GemCostInRangeInclusive(4, 5),
  	  GemCostInRangeInclusive(4, 5),
  	  AnyRelic(),
  	  SpellEquals(3),
  	  SpellEquals(4),
  	  SpellGreaterThan(5),
  	  SpellGreaterThan(5),
  	  SpellGreaterThan(5)
  	],
  },
  {
  	"name": "Market Setup 4",
  	"cards": [
  	  GemGreaterThan(4),
  	  AnyGem(),
  	  AnyGem(),
  	  RelicLessThan(4),
  	  RelicGreaterThan(4),
  	  AnyRelic(),
  	  SpellLessThan(5),
  	  SpellGreaterThan(5),
  	  AnySpell()
  	],
  },
  {
  	"name": "Market Setup 5",
  	"cards": [
  	  GemEquals(2),
  	  GemEquals(3),
  	  GemEquals(4),
  	  RelicEquals(5),
  	  AnyRelic(),
  	  SpellEquals(4),
  	  SpellEquals(5),
  	  SpellEquals(6),
  	  SpellGreaterThan(6)
  	],
  },
  {
  	"name": "Market Setup 6",
  	"cards": [
  	  GemEquals(3),
  	  GemEquals(4),
  	  RelicLessThan(4),
  	  RelicGreaterThan(4),
  	  AnyRelic(),
  	  SpellCostInRangeInclusive(3, 4),
  	  SpellCostInRangeInclusive(5, 6),
  	  SpellCostInRangeInclusive(5, 6),
  	  SpellGreaterThan(6)
  	]
  }
]