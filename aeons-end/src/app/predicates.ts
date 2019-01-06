import {MarketCard} from "./market-card";
import {MarketCardType} from "./martet-card-type";

export type Predicate = (card:MarketCard) => boolean;

export class Predicates {
    static GemCostInRangeInclusive(lower:number, upper:number): Predicate {
        return this.ItemMatchesRangeCost(MarketCardType.Gem, lower, upper);
    }

    static GemLessThan(cost:number): Predicate {
        return this.ItemMatchesLessThanCost(MarketCardType.Gem, cost);
    }

    static GemEquals(cost:number): Predicate {
        return this.ItemMatchesEqualCost(MarketCardType.Gem, cost);
    }

    static GemGreaterThan(cost:number): Predicate {
        return this.ItemMatchesGreaterThanCost(MarketCardType.Gem, cost);
    }

    static AnyGem(): Predicate {
        return this.ItemMatchesAnyCost(MarketCardType.Gem);
    }

    private static ItemMatchesRangeCost(type:MarketCardType, lower:number, upper:number) : Predicate {
        let costPredicate = function(itemCost: number): boolean {
            return itemCost >= lower && itemCost <= upper;
        };
        return this.ItemMatchesCostPredicate(type, costPredicate);
    }

    private static ItemMatchesEqualCost(type:MarketCardType, cost:number): Predicate {
        let costPredicate = function(itemCost: number): boolean {
            return itemCost === cost;
        };
        return this.ItemMatchesCostPredicate(type, costPredicate);
    }

    private static ItemMatchesLessThanCost(type:MarketCardType, cost:number): Predicate {
        let costPredicate = function(itemCost: number): boolean {
            return itemCost < cost;
        };
        return this.ItemMatchesCostPredicate(type, costPredicate);
    }

    private static ItemMatchesGreaterThanCost(type:MarketCardType, cost:number): Predicate {
        let costPredicate = function(itemCost: number): boolean {
            return itemCost > cost;
        };
        return this.ItemMatchesCostPredicate(type, costPredicate);
    }

    private static ItemMatchesAnyCost(type:MarketCardType): Predicate {
        return function(card:MarketCard): boolean {
            return card.type === type;
        }
    }

    private static ItemMatchesCostPredicate(type:MarketCardType, costPredicate:(itemCost: number) => boolean) : Predicate {
        return function(card:MarketCard): boolean {
            return card.type === type && costPredicate(card.cost);
        }
    }
}
