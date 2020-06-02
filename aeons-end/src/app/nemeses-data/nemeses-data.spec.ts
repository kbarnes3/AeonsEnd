import { EXPANSION_INFO, ExpansionInfo } from '../expansion-info';

describe('NemesesData', () => {
    it('should only contain nemeses with unique names', () => {
      const seenNemeses = {};
      for (const key in EXPANSION_INFO) {
        if (EXPANSION_INFO.hasOwnProperty(key)) {
          const info: ExpansionInfo = EXPANSION_INFO[key];
          if (info.nemeses) {
            for (const nemesis of info.nemeses) {
              expect(seenNemeses[nemesis.name]).toBeFalsy(
                nemesis.name + ' seen in both ' + seenNemeses[nemesis.name] + ' and ' + info.name);
                seenNemeses[nemesis.name] = info.name;
            }
          }
        }
      }
    });
});
