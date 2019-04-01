import {Expansion} from '../expansion';
import {MarketCard} from '../market-card';
import {MarketCardType} from '../martet-card-type';

export const DICE_TOWER_PROMO_CARDS: MarketCard[] = [
    {
        name: 'Thieving Spirit',
        type: MarketCardType.Spell,
        cost: 5,
        expansion: Expansion.DiceTowerPromo
    },
];
