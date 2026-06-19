import { EXPANSION_INFO, ExpansionInfo } from '../expansion-info';

describe('MagesData', () => {
  it('should only contain mages with unique names', () => {
    const seenMages: Record<string, string> = {};
    for (const key in EXPANSION_INFO) {
      if (Object.prototype.hasOwnProperty.call(EXPANSION_INFO, key)) {
        const info: ExpansionInfo = EXPANSION_INFO[Number(key)];
        if (info.mages) {
          for (const mage of info.mages) {
            expect(seenMages[mage.name],
              mage.name + ' seen in both ' + seenMages[mage.name] + ' and ' + info.name).toBeFalsy();
            seenMages[mage.name] = info.name;
          }
        }
      }
    }
  });
});
