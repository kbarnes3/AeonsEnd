import {Expansion} from '../expansion';
import {MarketCard} from '../market-card';
import {MarketCardType} from '../market-card-type';

export const RETURN_TO_GRAVEHOLD_CARDS: MarketCard[] = [
    {
        name: 'Glass-Eyed Oracle',
        type: MarketCardType.Relic,
        cost: 1,
        expansion: Expansion.ReturnToGravehold
    },
    {
        name: 'Cleanse Oracle',
        type: MarketCardType.Spell,
        cost: 4,
        expansion: Expansion.ReturnToGravehold
    },
    {
        name: 'Memory Break',
        type: MarketCardType.Spell,
        cost: 6,
        expansion: Expansion.ReturnToGravehold
    },
];
