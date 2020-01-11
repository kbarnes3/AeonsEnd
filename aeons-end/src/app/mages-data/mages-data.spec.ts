import { BASE_MAGES } from './base-mages-data';
import { DEPTHS_MAGES } from './depths-mages-data';
import { NAMELESS_MAGES } from './nameless-mages-data';
import { WAR_ETERNAL_MAGES } from './war-eternal-mages-data';
import { VOID_MAGES } from './void-mages-data';
import { OUTER_DARK_MAGES } from './outer-dark-mages-data';
import { NEW_AGE_MAGES } from './new-age-mages-data';
import { SHATTERED_DREAMS_MAGES } from './shattered-dreams-mages-data';
import { Expansion } from '../expansion';
import { Mage } from '../mage';
import { ANCIENT_MAGES } from './ancient-mages-data';

describe('MagesData', () => {
  class MageSet {
      cards: Mage[];
      expansion: Expansion;
      name: string;
  }

  const expectedSets: MageSet[] = [
      { cards: BASE_MAGES, expansion: Expansion.Base, name: 'Base' },
      { cards: DEPTHS_MAGES, expansion: Expansion.TheDepths, name: 'The Depths' },
      { cards: NAMELESS_MAGES, expansion: Expansion.TheNameless, name: 'The Nameless' },
      { cards: WAR_ETERNAL_MAGES, expansion: Expansion.WarEternal, name: 'War Eternal' },
      { cards: VOID_MAGES, expansion: Expansion.TheVoid, name: 'The Void' },
      { cards: OUTER_DARK_MAGES, expansion: Expansion.TheOuterDark, name: 'The Outer Dark' },
      { cards: NEW_AGE_MAGES, expansion: Expansion.TheNewAge, name: 'The New Age' },
      { cards: SHATTERED_DREAMS_MAGES, expansion: Expansion.ShatteredDreams, name: 'Shattered Dreams' },
      { cards: ANCIENT_MAGES, expansion: Expansion.TheAncients, name: 'The Ancients' },
  ];

  expectedSets.forEach((mageSet: MageSet) => {
      it('"' + mageSet.name + '" mage data should only contain mages from "' + mageSet.name + '" set', () => {
        mageSet.cards.forEach((mage: Mage) => {
              expect(mage.expansion).toEqual(mageSet.expansion);
          });
      });
  });

  it('should only contain mages with unique names', () => {
    const seenMages = {};
    expectedSets.forEach((mageSet: MageSet) => {
      mageSet.cards.forEach((mage: Mage) => {
        expect(seenMages[mage.name]).toBeFalsy(mage.name + ' seen in both ' + seenMages[mage.name] + ' and ' + mageSet.name);
        seenMages[mage.name] = mageSet.name;
      });
    });
  });
});
