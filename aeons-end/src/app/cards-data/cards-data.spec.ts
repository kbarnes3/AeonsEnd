import { EXPANSION_INFO, ExpansionInfo } from '../expansion-info';

describe('CardsData', () => {
    it('should only contain cards with unique names', () => {
      const seenCards = {};
      for (const key in EXPANSION_INFO) {
        if (EXPANSION_INFO.hasOwnProperty(key)) {
          const info: ExpansionInfo = EXPANSION_INFO[key];
          if (info.marketCards) {
            for (const card of info.marketCards) {
              expect(seenCards[card.name]).toBeFalsy(card.name + ' seen in both ' + seenCards[card.name] + ' and ' + info.name);
              seenCards[card.name] = info.name;
            }
          }
        }
      }
    });
});
