import { Expansion } from './expansion';

export class ExpansionInfo {
  expansion: Expansion;
  name: string;
  shortName: string;
}

export const EXPANSION_INFO: { [id: number]: ExpansionInfo} = {};

EXPANSION_INFO[Expansion.Base] = { expansion: Expansion.Base, name: 'Aeon\'s End', shortName: 'AE' };
EXPANSION_INFO[Expansion.TheDepths] = { expansion: Expansion.TheDepths, name: 'The Depths', shortName: 'TD' };
EXPANSION_INFO[Expansion.TheNameless] = { expansion: Expansion.TheNameless, name: 'The Nameless', shortName: 'TN' };
EXPANSION_INFO[Expansion.WarEternal] = { expansion: Expansion.WarEternal, name: 'War Eternal', shortName: 'WE' };
EXPANSION_INFO[Expansion.TheVoid] = { expansion: Expansion.TheVoid, name: 'The Void', shortName: 'V' };
EXPANSION_INFO[Expansion.TheOuterDark] = { expansion: Expansion.TheOuterDark, name: 'The Outer Dark', shortName: 'OD' };
EXPANSION_INFO[Expansion.Legacy] = { expansion: Expansion.Legacy, name: 'Legacy III/IV', shortName: 'L' };
EXPANSION_INFO[Expansion.LegacyPromo] = { expansion: Expansion.LegacyPromo, name: 'Legacy Promo', shortName: 'LP' };
EXPANSION_INFO[Expansion.BuriedSecrets] = { expansion: Expansion.BuriedSecrets, name: 'Buried Secrets', shortName: 'BS' };
EXPANSION_INFO[Expansion.DiceTowerPromo] = { expansion: Expansion.DiceTowerPromo, name: 'Dice Tower Promo', shortName: 'DT' };
EXPANSION_INFO[Expansion.TheNewAge] = { expansion: Expansion.TheNewAge, name: 'The New Age', shortName: 'NA' };
EXPANSION_INFO[Expansion.TheNewAgePromo] = { expansion: Expansion.TheNewAgePromo, name: 'The New Age Promo', shortName: 'NAP' };
EXPANSION_INFO[Expansion.ShatteredDreams] = { expansion: Expansion.ShatteredDreams, name: 'Shattered Dreams', shortName: 'SD' };
EXPANSION_INFO[Expansion.TheAncients] = { expansion: Expansion.TheAncients, name: 'The Ancients', shortName: 'TA' };
EXPANSION_INFO[Expansion.IntoTheWild] = { expansion: Expansion.IntoTheWild, name: 'Into The Wild', shortName: 'ITW' };

export class ExpansionDependency {
  expansion: Expansion;
  requiredExpansion: Expansion;
}

export const EXPANSION_DEPENDENCIES: ExpansionDependency[] = [
  {
    expansion: Expansion.TheNewAgePromo,
    requiredExpansion: Expansion.DiceTowerPromo
  }
];

export const EXPANSION_ORDER: Expansion[] = [
  Expansion.Base,
  Expansion.TheDepths,
  Expansion.TheNameless,
  Expansion.WarEternal,
  Expansion.TheVoid,
  Expansion.TheOuterDark,
  Expansion.Legacy,
  Expansion.LegacyPromo,
  Expansion.BuriedSecrets,
  Expansion.DiceTowerPromo,
  Expansion.TheNewAge,
  Expansion.TheNewAgePromo,
  Expansion.ShatteredDreams,
  Expansion.TheAncients,
  Expansion.IntoTheWild,
];
