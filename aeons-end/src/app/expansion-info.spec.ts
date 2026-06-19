import { EXPANSION_INFO, ExpansionInfo } from './expansion-info';

describe('ExpansionInfo', () => {
  it('should contain unique expansion names', () => {
    const seenNames: Record<string, boolean> = {};

    for (const key in EXPANSION_INFO) {
      if (Object.prototype.hasOwnProperty.call(EXPANSION_INFO, key)) {
        const info: ExpansionInfo = EXPANSION_INFO[Number(key)];

        expect(seenNames[info.name], '"' + info.name + '" seen on two expansions').toBeFalsy();
        seenNames[info.name] = true;
      }
    }
  });

  it('should contain unique short names for each expansion', () => {
    const seenShortNames: Record<string, string> = {};

    for (const key in EXPANSION_INFO) {
      if (Object.prototype.hasOwnProperty.call(EXPANSION_INFO, key)) {
        const info: ExpansionInfo = EXPANSION_INFO[Number(key)];

        expect(seenShortNames[info.shortName], '"' + info.shortName + '" shared between ' + seenShortNames[info.shortName] + ' and ' + info.name).toBeFalsy();
        seenShortNames[info.shortName] = info.name;
      }
    }
  });

  for (const key in EXPANSION_INFO) {
    if (Object.prototype.hasOwnProperty.call(EXPANSION_INFO, key)) {
      const info: ExpansionInfo = EXPANSION_INFO[Number(key)];

      if (info.marketCards) {
        const marketCards = info.marketCards;
        it(info.name + ' should only have market cards matching that expansion', () => {
          for (const card of marketCards) {
            expect(card.expansion, '"' + card.name + '" is in the wrong expansion').toEqual(info.expansion);
          }
        });
      }

      if (info.mages) {
        const mages = info.mages;
        it(info.name + ' should only have mages matching that expansion', () => {
          for (const mage of mages) {
            expect(mage.expansion, '"' + mage.name + '" is in the wrong expansion').toEqual(info.expansion);
          }
        });
      }

      if (info.nemeses) {
        const nemeses = info.nemeses;
        it(info.name + ' should only have nemeses matching that expansion', () => {
          for (const nemesis of nemeses) {
            expect(nemesis.expansion, '"' + nemesis.name + '" is in the wrong expansion').toEqual(info.expansion);
          }
        });
      }
    }
  }
});
