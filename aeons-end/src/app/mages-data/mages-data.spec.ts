import { EXPANSION_INFO, ExpansionInfo } from '../expansion-info';

describe('MagesData', () => {
  it('should only contain mages with unique names', () => {
    const seenMages = {};
    for (const key in EXPANSION_INFO) {
      if (EXPANSION_INFO.hasOwnProperty(key)) {
        const info: ExpansionInfo = EXPANSION_INFO[key];
        if (info.mages) {
          for (const mage of info.mages) {
            expect(seenMages[mage.name]).toBeFalsy(mage.name + ' seen in both ' + seenMages[mage.name] + ' and ' + info.name);
            seenMages[mage.name] = info.name;
          }
        }
      }
    }
  });
});
