import {Expansion} from '../expansion';
import {MarketCard} from '../market-card';
import {MarketCardType} from '../market-card-type';

export const OUTCASTS_PROMO_CARDS: MarketCard[] = [
    {
        name: 'Coruscating Sapal',
        type: MarketCardType.Gem,
        cost: 4,
        expansion: Expansion.OutcastsPromo,
    },
    {
        name: 'Force Catalyst',
        type: MarketCardType.Spell,
        cost: 4,
        expansion: Expansion.OutcastsPromo,
    },
    {
        name: 'Humming Shell',
        type: MarketCardType.Relic,
        cost: 7,
        expansion: Expansion.OutcastsPromo,
    },
];
