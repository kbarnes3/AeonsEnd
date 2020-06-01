import { Expansion } from './expansion';
import { MarketCard } from './market-card';
import { BASE_CARDS } from './cards-data/base-cards-data';
import { DEPTHS_CARDS } from './cards-data/depths-cards-data';
import { NAMELESS_CARDS } from './cards-data/nameless-cards-data';
import { WAR_ETERNAL_CARDS } from './cards-data/war-eternal-cards-data';
import { VOID_CARDS } from './cards-data/void-cards-data';
import { OUTER_DARK_CARDS } from './cards-data/outer-dark-cards-data';
import { LEGACY_CARDS } from './cards-data/legacy-cards-data';
import { LEGACY_PROMO_CARDS } from './cards-data/legacy-promo-cards-data';
import { BURIED_SECRETS_CARDS } from './cards-data/buried-secrets-cards-data';
import { DICE_TOWER_PROMO_CARDS } from './cards-data/dice-tower-promo-cards-data';
import { NEW_AGE_CARDS } from './cards-data/new-age-cards-data';
import { NEW_AGE_PROMO_CARDS } from './cards-data/new-age-promo-cards-data';
import { SHATTERED_DREAMS_CARDS } from './cards-data/shattered-dreams-cards-data';
import { ANCIENTS_CARDS } from './cards-data/ancients-cards-data';
import { INTO_THE_WILD_CARDS } from './cards-data/into-the-wild-cards-data';

export class ExpansionInfo {
  expansion: Expansion;
  name: string;
  shortName: string;
  marketCards: MarketCard[];
}

export const EXPANSION_INFO: { [id: number]: ExpansionInfo } = {};

EXPANSION_INFO[Expansion.Base] = {
  expansion: Expansion.Base,
  name: 'Aeon\'s End',
  shortName: 'AE',
  marketCards: BASE_CARDS
};
EXPANSION_INFO[Expansion.TheDepths] = {
  expansion: Expansion.TheDepths,
  name: 'The Depths',
  shortName: 'TD',
  marketCards: DEPTHS_CARDS
};
EXPANSION_INFO[Expansion.TheNameless] = {
  expansion: Expansion.TheNameless,
  name: 'The Nameless',
  shortName: 'TN',
  marketCards: NAMELESS_CARDS
};
EXPANSION_INFO[Expansion.WarEternal] = {
  expansion: Expansion.WarEternal,
  name: 'War Eternal',
  shortName: 'WE',
  marketCards: WAR_ETERNAL_CARDS
};
EXPANSION_INFO[Expansion.TheVoid] = {
  expansion: Expansion.TheVoid,
  name: 'The Void',
  shortName: 'TV',
  marketCards: VOID_CARDS
};
EXPANSION_INFO[Expansion.TheOuterDark] = {
  expansion: Expansion.TheOuterDark,
  name: 'The Outer Dark',
  shortName: 'OD',
  marketCards: OUTER_DARK_CARDS
};
EXPANSION_INFO[Expansion.Legacy] = {
  expansion: Expansion.Legacy,
  name: 'Legacy III/IV',
  shortName: 'L',
  marketCards: LEGACY_CARDS
};
EXPANSION_INFO[Expansion.LegacyPromo] = {
  expansion: Expansion.LegacyPromo,
  name: 'Legacy Promo',
  shortName: 'LP',
  marketCards: LEGACY_PROMO_CARDS
};
EXPANSION_INFO[Expansion.BuriedSecrets] = {
  expansion: Expansion.BuriedSecrets,
  name: 'Buried Secrets',
  shortName: 'BS',
  marketCards: BURIED_SECRETS_CARDS
};
EXPANSION_INFO[Expansion.DiceTowerPromo] = {
  expansion: Expansion.DiceTowerPromo,
  name: 'Dice Tower Promo',
  shortName: 'DT',
  marketCards: DICE_TOWER_PROMO_CARDS
};
EXPANSION_INFO[Expansion.TheNewAge] = {
  expansion: Expansion.TheNewAge,
  name: 'The New Age',
  shortName: 'NA',
  marketCards: NEW_AGE_CARDS
};
EXPANSION_INFO[Expansion.TheNewAgePromo] = {
  expansion: Expansion.TheNewAgePromo,
  name: 'The New Age Promo',
  shortName: 'NAP',
  marketCards: NEW_AGE_PROMO_CARDS
};
EXPANSION_INFO[Expansion.ShatteredDreams] = {
  expansion: Expansion.ShatteredDreams,
  name: 'Shattered Dreams',
  shortName: 'SD',
  marketCards: SHATTERED_DREAMS_CARDS
};
EXPANSION_INFO[Expansion.TheAncients] = {
  expansion: Expansion.TheAncients,
  name: 'The Ancients',
  shortName: 'TA',
  marketCards: ANCIENTS_CARDS
};
EXPANSION_INFO[Expansion.IntoTheWild] = {
  expansion: Expansion.IntoTheWild,
  name: 'Into The Wild',
  shortName: 'ITW',
  marketCards: INTO_THE_WILD_CARDS
};

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
