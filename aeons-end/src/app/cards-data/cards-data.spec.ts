import {BASE_CARDS} from './base-cards-data';
import {DEPTHS_CARDS} from './depths-cards-data';
import {NAMELESS_CARDS} from './nameless-cards-data';
import {WAR_ETERNAL_CARDS} from './war-eternal-cards-data';
import {VOID_CARDS} from './void-cards-data';
import {OUTER_DARK_CARDS} from './outer-dark-cards-data';
import {LEGACY_CARDS} from './legacy-cards-data';
import {LEGACY_PROMO_CARDS} from './legacy-promo-cards-data';
import {BURIED_SECRETS_CARDS} from './buried-secrets-cards-data';
import {DICE_TOWER_PROMO_CARDS} from './dice-tower-promo-cards-data';
import {Expansion} from '../expansion';
import {MarketCard} from '../market-card';
import { NEW_AGE_CARDS } from './new-age-cards-data';
import { SHATTERED_DREAMS_CARDS } from './shattered-dreams-cards-data';
import { NEW_AGE_PROMO_CARDS } from './new-age-promo-cards-data';
import { ANCIENTS_CARDS } from './ancients-cards-data';
import { INTO_THE_WILD_CARDS } from './into-the-wild-cards-data';

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
        { cards: OUTER_DARK_CARDS, expansion: Expansion.TheOuterDark, name: 'The Outer Dark' },
        { cards: LEGACY_CARDS, expansion: Expansion.Legacy, name: 'Legacy' },
        { cards: LEGACY_PROMO_CARDS, expansion: Expansion.LegacyPromo, name: 'Legacy Promo' },
        { cards: BURIED_SECRETS_CARDS, expansion: Expansion.BuriedSecrets, name: 'Buried Secrets'},
        { cards: DICE_TOWER_PROMO_CARDS, expansion: Expansion.DiceTowerPromo, name: 'Dice Tower Promo' },
        { cards: NEW_AGE_CARDS, expansion: Expansion.TheNewAge, name: 'The New Age' },
        { cards: SHATTERED_DREAMS_CARDS, expansion: Expansion.ShatteredDreams, name: 'Shattered Dreams' },
        { cards: ANCIENTS_CARDS, expansion: Expansion.TheAncients, name: 'The Ancients' },
        { cards: NEW_AGE_PROMO_CARDS, expansion: Expansion.TheNewAgePromo, name: 'The New Age Promo' },
        { cards: INTO_THE_WILD_CARDS, expansion: Expansion.IntoTheWild, name: 'Into The Wild'}
    ];

    expectedSets.forEach((cardSet: CardSet) => {
        it('"' + cardSet.name + '" card data should only contain cards from "' + cardSet.name + '" set', () => {
            cardSet.cards.forEach((card: MarketCard) => {
                expect(card.expansion).withContext(card.name + ' has expansion ' + card.expansion).toEqual(cardSet.expansion);
            });
        });
    });

    it('should only contain cards with unique names', () => {
      const seenCards = {};
      expectedSets.forEach((cardSet: CardSet) => {
        cardSet.cards.forEach((card: MarketCard) => {
          expect(seenCards[card.name]).toBeFalsy(card.name + ' seen in both ' + seenCards[card.name] + ' and ' + cardSet.name);
          seenCards[card.name] = cardSet.name;
        });
      });
    });
});
