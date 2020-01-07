import {Expansion} from './expansion';
import {MarketCardType} from './market-card-type';

export class MarketCard {
    name: string;
    type: MarketCardType;
    cost: number;
    expansion: Expansion;
}
