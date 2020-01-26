import {Expansion} from '../expansion';
import {MarketCard} from '../market-card';
import {MarketCardType} from '../market-card-type';

export const INTO_THE_WILD_CARDS: MarketCard[] = [
    {
        name: 'Jeweled Brain',
        type: MarketCardType.Gem,
        cost: 3,
        expansion: Expansion.IntoTheWild,
    },
    {
        name: 'Blast Sphere',
        type: MarketCardType.Relic,
        cost: 8,
        expansion: Expansion.IntoTheWild,
    },
    {
        name: 'Wound Mender',
        type: MarketCardType.Spell,
        cost: 8,
        expansion: Expansion.IntoTheWild,
    },
];
