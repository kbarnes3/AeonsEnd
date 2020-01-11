import { BASE_NEMESES } from './base-nemeses-data';
import { NAMELESS_NEMESES } from './nameless-nemeses-data';
import { WAR_ETERNAL_NEMESES } from './war-eternal-nemeses-data';
import { VOID_NEMESES } from './void-nemeses-data';
import { OUTER_DARK_NEMESES } from './outer-dark-nemeses-data';
import { LEGACY_NEMESES } from './legacy-nemeses-data';
import { NEW_AGE_NEMESES } from './new-age-nemeses-data';
import { SHATTERED_DREAMS_NEMESES } from './shattered-dreams-nemeses-data';
import { Expansion } from '../expansion';
import { Nemesis } from '../nemesis';
import { ANCIENTS_NEMESES } from './ancients-nemeses-data';

describe('NemesesData', () => {
    class NemesisSet {
        cards: Nemesis[];
        expansion: Expansion;
        name: string;
    }

    const expectedSets: NemesisSet[] = [
        { cards: BASE_NEMESES, expansion: Expansion.Base, name: 'Base' },
        { cards: NAMELESS_NEMESES, expansion: Expansion.TheNameless, name: 'The Nameless' },
        { cards: WAR_ETERNAL_NEMESES, expansion: Expansion.WarEternal, name: 'War Eternal' },
        { cards: VOID_NEMESES, expansion: Expansion.TheVoid, name: 'The Void' },
        { cards: OUTER_DARK_NEMESES, expansion: Expansion.TheOuterDark, name: 'The Outer Dark' },
        { cards: LEGACY_NEMESES, expansion: Expansion.Legacy, name: 'Legacy' },
        { cards: NEW_AGE_NEMESES, expansion: Expansion.TheNewAge, name: 'The New Age' },
        { cards: SHATTERED_DREAMS_NEMESES, expansion: Expansion.ShatteredDreams, name: 'Shattered Dreams' },
        { cards: ANCIENTS_NEMESES, expansion: Expansion.TheAncients, name: 'The Ancients' },
    ];

    expectedSets.forEach((nemesisSet: NemesisSet) => {
        it('"' + nemesisSet.name + '" nemesis data should only contain nemeses from "' + nemesisSet.name + '" set', () => {
            nemesisSet.cards.forEach((nemesis: Nemesis) => {
                expect(nemesis.expansion).toEqual(nemesisSet.expansion);
            });
        });
    });

    it('should only contain nemeses with unique names', () => {
      const seenNemeses = {};
      expectedSets.forEach((nemesisSet: NemesisSet) => {
        nemesisSet.cards.forEach((nemesis: Nemesis) => {
          expect(seenNemeses[nemesis.name]).toBeFalsy(
            nemesis.name + ' seen in both ' + seenNemeses[nemesis.name] + ' and ' + nemesisSet.name);
            seenNemeses[nemesis.name] = nemesisSet.name;
        });
      });
    });
});
