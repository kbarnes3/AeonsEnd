import { EXPANSION_INFO, ExpansionInfo } from '../expansion-info';

describe('CardsData', () => {
    it('should only contain cards with unique names', () => {
      const seenCards = {};
      for (const key in EXPANSION_INFO) {
        if (Object.prototype.hasOwnProperty.call(EXPANSION_INFO, key)) {
          const info: ExpansionInfo = EXPANSION_INFO[key];
          if (info.marketCards) {
            for (const card of info.marketCards) {
              expect(seenCards[card.name]).withContext(
                card.name + ' seen in both ' + seenCards[card.name] + ' and ' + info.name).toBeFalsy();
              seenCards[card.name] = info.name;
            }
          }
        }
      }
    });
});
