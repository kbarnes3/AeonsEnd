import { TestBed } from '@angular/core/testing';
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
    }
  }
});
