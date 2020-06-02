import { EXPANSION_INFO, ExpansionInfo } from './expansion-info';

describe('ExpansionInfo', () => {
  it('should contain unique expansion names', () => {
    const seenNames: { [name: string]: boolean } = {};

    for (const key in EXPANSION_INFO) {
      if (EXPANSION_INFO.hasOwnProperty(key)) {
        const info: ExpansionInfo = EXPANSION_INFO[key];

        expect(seenNames[info.name]).withContext('"' + info.name + '" seen on two expansions').toBeFalsy();
        seenNames[info.name] = true;
      }
    }
  });

  it('should contain unique short names for each expansion', () => {
    const seenShortNames: { [shortName: string]: string } = {};

    for (const key in EXPANSION_INFO) {
      if (EXPANSION_INFO.hasOwnProperty(key)) {
        const info: ExpansionInfo = EXPANSION_INFO[key];

        expect(seenShortNames[info.shortName]).withContext('"' + info.shortName + '" shared between ' + seenShortNames[info.shortName] + ' and ' + info.name).toBeFalsy();
        seenShortNames[info.shortName] = info.name;
      }
    }
  });

  for (const key in EXPANSION_INFO) {
    if (EXPANSION_INFO.hasOwnProperty(key)) {
      const info: ExpansionInfo = EXPANSION_INFO[key];

      it(info.name + ' should only have market cards matching that expansion', () => {
        for (const card of info.marketCards) {
          expect(card.expansion).withContext('"' + card.name + '" is in the wrong expansion').toEqual(info.expansion);
        }
      });

      if (info.mages) {
        it(info.name + ' should only have mages matching that expansion', () => {
          for (const mage of info.mages) {
            expect(mage.expansion).withContext('"' + mage.name + '" is in the wrong expansion').toEqual(info.expansion);
          }
        });
      }

      if (info.nemeses) {
        it(info.name + ' should only have nemeses matching that expansion', () => {
          for (const nemesis of info.nemeses) {
            expect(nemesis.expansion).withContext('"' + nemesis.name + '" is in the wrong expansion').toEqual(info.expansion);
          }
        })
      }
    }
  }
});
