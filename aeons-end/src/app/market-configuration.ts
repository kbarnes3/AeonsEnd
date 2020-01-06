import {Predicate, Predicates} from './predicates';

export class MarketConfiguration {
    name: string;
    cards: Predicate[];
}

export const SINGLE_GAME_MARKET_CONFIGURATIONS: MarketConfiguration[] = [
    {
        name: 'Market Setup 1',
        cards: [
            Predicates.GemLessThan(4),
            Predicates.GemEquals(4),
            Predicates.AnyGem(),
            Predicates.AnyRelic(),
            Predicates.AnyRelic(),
            Predicates.SpellLessThan(5),
            Predicates.SpellLessThan(5),
            Predicates.SpellGreaterThan(5),
            Predicates.SpellGreaterThan(5)
        ]
    },
    {
        name: 'Market Setup 2',
        cards: [
            Predicates.GemGreaterThan(3),
            Predicates.GemGreaterThan(3),
            Predicates.GemGreaterThan(3),
            Predicates.RelicGreaterThan(4),
            Predicates.AnyRelic(),
            Predicates.SpellLessThan(6),
            Predicates.SpellLessThan(6),
            Predicates.SpellLessThan(6),
            Predicates.SpellGreaterThan(6)
        ]
    },
    {
        name: 'Market Setup 3',
        cards: [
            Predicates.GemLessThan(4),
            Predicates.GemCostInRangeInclusive(4, 5),
            Predicates.GemCostInRangeInclusive(4, 5),
            Predicates.AnyRelic(),
            Predicates.SpellEquals(3),
            Predicates.SpellEquals(4),
            Predicates.SpellGreaterThan(5),
            Predicates.SpellGreaterThan(5),
            Predicates.SpellGreaterThan(5)
        ]
    },
    {
        name: 'Market Setup 4',
        cards: [
            Predicates.GemGreaterThan(4),
            Predicates.AnyGem(),
            Predicates.AnyGem(),
            Predicates.RelicLessThan(4),
            Predicates.RelicGreaterThan(4),
            Predicates.AnyRelic(),
            Predicates.SpellLessThan(5),
            Predicates.SpellGreaterThan(5),
            Predicates.AnySpell()
        ]
    },
    {
        name: 'Market Setup 5',
        cards: [
            Predicates.GemEquals(2),
            Predicates.GemEquals(3),
            Predicates.GemEquals(4),
            Predicates.RelicEquals(5),
            Predicates.AnyRelic(),
            Predicates.SpellEquals(4),
            Predicates.SpellEquals(5),
            Predicates.SpellEquals(6),
            Predicates.SpellGreaterThan(6)
      ]
    },
    {
        name: 'Market Setup 6',
        cards: [
            Predicates.GemEquals(3),
            Predicates.GemEquals(4),
            Predicates.RelicLessThan(4),
            Predicates.RelicGreaterThan(4),
            Predicates.AnyRelic(),
            Predicates.SpellCostInRangeInclusive(3, 4),
            Predicates.SpellCostInRangeInclusive(5, 6),
            Predicates.SpellCostInRangeInclusive(5, 6),
            Predicates.SpellGreaterThan(6)
        ]
      }
];

export const START_EXPEDITION_MARKET_CONFIGURATION: MarketConfiguration = {
  name: 'Start expedition',
  cards: [
    Predicates.AnyGem(),
    Predicates.AnyGem(),
    Predicates.AnyGem(),
    Predicates.AnyRelic(),
    Predicates.AnyRelic(),
    Predicates.AnySpell(),
    Predicates.AnySpell(),
    Predicates.AnySpell(),
    Predicates.AnySpell()
  ]
};

export const EXPEDITION_WIN_MARKET_CONFIGURATION: MarketConfiguration = {
  name: 'Won expedition battle',
  cards: [
    Predicates.AnyGem(),
    Predicates.AnyRelic(),
    Predicates.AnySpell()
  ]
}

export const EXPEDITION_LOSE_CHOOSE_GEM: MarketConfiguration = {
  name: 'Lost expedition battle and chose gem',
  cards: [
    Predicates.AnyGem(),
  ]
}

export const EXPEDITION_LOSE_CHOOSE_RELIC: MarketConfiguration = {
  name: 'Lost expedition battle and chose relic',
  cards: [
    Predicates.AnyRelic(),
  ]
}

export const EXPEDITION_LOSE_CHOOSE_SPELL: MarketConfiguration = {
  name: 'Lost expedition battle and chose spell',
  cards: [
    Predicates.AnySpell(),
  ]
}
