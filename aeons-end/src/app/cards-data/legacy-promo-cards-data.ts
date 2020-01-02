import {Expansion} from '../expansion';
import {MarketCard} from '../market-card';
import {MarketCardType} from '../market-card-type';

export const LEGACY_PROMO_CARDS: MarketCard[] = [
    {
        name: 'Drown In Flames',
        type: MarketCardType.Spell,
        cost: 6,
        expansion: Expansion.LegacyPromo
    },
    {
        name: 'Fleeting Vision',
        type: MarketCardType.Spell,
        cost: 3,
        expansion: Expansion.LegacyPromo
    },
    {
        name: 'Splinter Missile',
        type: MarketCardType.Spell,
        cost: 5,
        expansion: Expansion.LegacyPromo
    },
    {
        name: 'Echo Stone',
        type: MarketCardType.Gem,
        cost: 4,
        expansion: Expansion.LegacyPromo
    },
];
