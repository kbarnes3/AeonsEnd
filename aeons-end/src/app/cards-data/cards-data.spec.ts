import {BASE_CARDS} from './base-cards-data';
import {DEPTHS_CARDS} from './depths-cards-data';
import {NAMELESS_CARDS} from './nameless-cards-data';
import {WAR_ETERNAL_CARDS} from './war-eternal-cards-data';
import {VOID_CARDS} from './void-cards-data';
import {OUTER_DARK_CARDS} from './outer-dark-cards-data';
import {Expansion} from '../expansion';
import {MarketCard} from '../market-card';

describe('CardsData', () => {
    class CardSet {
        cards: MarketCard[];
        expansion: Expansion;
        name: string;
    }

    const expectedSets: CardSet[] = [
        { cards: BASE_CARDS, expansion: Expansion.Base, name: 'Base' },
        { cards: DEPTHS_CARDS, expansion: Expansion.TheDepths, name: 'The Depths' },
        { cards: NAMELESS_CARDS, expansion: Expansion.TheNameless, name: 'The Nameless' },
        { cards: WAR_ETERNAL_CARDS, expansion: Expansion.WarEternal, name: 'War Eternal' },
        { cards: VOID_CARDS, expansion: Expansion.TheVoid, name: 'The Void' },
        { cards: OUTER_DARK_CARDS, expansion: Expansion.TheOuterDark, name: 'The Outer Dark' }
    ];

    expectedSets.forEach((cardSet:CardSet) => {
        it('"' + cardSet.name + '" card data should only contain cards from "' + cardSet.name + '" set', () => {
            cardSet.cards.forEach((card: MarketCard) => {
                expect(card.expansion).toEqual(cardSet.expansion);
            });
        });
    });
});