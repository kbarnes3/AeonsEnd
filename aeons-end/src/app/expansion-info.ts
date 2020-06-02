import { Expansion } from './expansion';
import { MarketCard } from './market-card';
import { Mage } from './mage';
import { Nemesis } from './nemesis';
import { BASE_CARDS } from './cards-data/base-cards-data';
import { BASE_MAGES } from './mages-data/base-mages-data';
import { BASE_NEMESES } from './nemeses-data/base-nemeses-data';
import { DEPTHS_CARDS } from './cards-data/depths-cards-data';
import { DEPTHS_MAGES } from './mages-data/depths-mages-data';
import { DEPTHS_NEMESES } from './nemeses-data/depths-nemeses-data';
import { NAMELESS_CARDS } from './cards-data/nameless-cards-data';
import { NAMELESS_MAGES } from './mages-data/nameless-mages-data';
import { NAMELESS_NEMESES } from './nemeses-data/nameless-nemeses-data';
import { WAR_ETERNAL_CARDS } from './cards-data/war-eternal-cards-data';
import { WAR_ETERNAL_MAGES } from './mages-data/war-eternal-mages-data';
import { WAR_ETERNAL_NEMESES } from './nemeses-data/war-eternal-nemeses-data';
import { VOID_CARDS } from './cards-data/void-cards-data';
import { VOID_MAGES } from './mages-data/void-mages-data';
import { VOID_NEMESES } from './nemeses-data/void-nemeses-data';
import { OUTER_DARK_CARDS } from './cards-data/outer-dark-cards-data';
import { OUTER_DARK_MAGES } from './mages-data/outer-dark-mages-data';
import { OUTER_DARK_NEMESES } from './nemeses-data/outer-dark-nemeses-data';
import { LEGACY_CARDS } from './cards-data/legacy-cards-data';
import { LEGACY_NEMESES } from './nemeses-data/legacy-nemeses-data';
import { LEGACY_PROMO_CARDS } from './cards-data/legacy-promo-cards-data';
import { BURIED_SECRETS_CARDS } from './cards-data/buried-secrets-cards-data';
import { DICE_TOWER_PROMO_CARDS } from './cards-data/dice-tower-promo-cards-data';
import { NEW_AGE_CARDS } from './cards-data/new-age-cards-data';
import { NEW_AGE_MAGES } from './mages-data/new-age-mages-data';
import { NEW_AGE_NEMESES } from './nemeses-data/new-age-nemeses-data';
import { NEW_AGE_PROMO_CARDS } from './cards-data/new-age-promo-cards-data';
import { SHATTERED_DREAMS_CARDS } from './cards-data/shattered-dreams-cards-data';
import { SHATTERED_DREAMS_MAGES } from './mages-data/shattered-dreams-mages-data';
import { SHATTERED_DREAMS_NEMESES } from './nemeses-data/shattered-dreams-nemeses-data';
import { ANCIENTS_CARDS } from './cards-data/ancients-cards-data';
import { ANCIENT_MAGES } from './mages-data/ancient-mages-data';
import { ANCIENTS_NEMESES } from './nemeses-data/ancients-nemeses-data';
import { INTO_THE_WILD_CARDS } from './cards-data/into-the-wild-cards-data';
import { INTO_THE_WILD_MAGES } from './mages-data/into-the-wild-mages-data';
import { INTO_THE_WILD_NEMESES } from './nemeses-data/into-the-wild-nemeses-data';

export class ExpansionInfo {
  expansion: Expansion;
  name: string;
  shortName: string;
  marketCards: MarketCard[];
  mages: Mage[];
  nemeses: Nemesis[];
}

export const EXPANSION_INFO: { [id: number]: ExpansionInfo } = {};

EXPANSION_INFO[Expansion.Base] = {
  expansion: Expansion.Base,
  name: 'Aeon\'s End',
  shortName: 'AE',
  marketCards: BASE_CARDS,
  mages: BASE_MAGES,
  nemeses: BASE_NEMESES
};
EXPANSION_INFO[Expansion.TheDepths] = {
  expansion: Expansion.TheDepths,
  name: 'The Depths',
  shortName: 'D',
  marketCards: DEPTHS_CARDS,
  mages: DEPTHS_MAGES,
  nemeses: DEPTHS_NEMESES
};
EXPANSION_INFO[Expansion.TheNameless] = {
  expansion: Expansion.TheNameless,
  name: 'The Nameless',
  shortName: 'N',
  marketCards: NAMELESS_CARDS,
  mages: NAMELESS_MAGES,
  nemeses: NAMELESS_NEMESES
};
EXPANSION_INFO[Expansion.WarEternal] = {
  expansion: Expansion.WarEternal,
  name: 'War Eternal',
  shortName: 'WE',
  marketCards: WAR_ETERNAL_CARDS,
  mages: WAR_ETERNAL_MAGES,
  nemeses: WAR_ETERNAL_NEMESES
};
EXPANSION_INFO[Expansion.TheVoid] = {
  expansion: Expansion.TheVoid,
  name: 'The Void',
  shortName: 'V',
  marketCards: VOID_CARDS,
  mages: VOID_MAGES,
  nemeses: VOID_NEMESES
};
EXPANSION_INFO[Expansion.TheOuterDark] = {
  expansion: Expansion.TheOuterDark,
  name: 'The Outer Dark',
  shortName: 'O',
  marketCards: OUTER_DARK_CARDS,
  mages: OUTER_DARK_MAGES,
  nemeses: OUTER_DARK_NEMESES
};
EXPANSION_INFO[Expansion.Legacy] = {
  expansion: Expansion.Legacy,
  name: 'Legacy III/IV',
  shortName: 'L',
  marketCards: LEGACY_CARDS,
  mages: null,
  nemeses: LEGACY_NEMESES
};
EXPANSION_INFO[Expansion.LegacyPromo] = {
  expansion: Expansion.LegacyPromo,
  name: 'Legacy Promo',
  shortName: 'LP',
  marketCards: LEGACY_PROMO_CARDS,
  mages: null,
  nemeses: null
};
EXPANSION_INFO[Expansion.BuriedSecrets] = {
  expansion: Expansion.BuriedSecrets,
  name: 'Buried Secrets',
  shortName: 'BS',
  marketCards: BURIED_SECRETS_CARDS,
  mages: null,
  nemeses: null
};
EXPANSION_INFO[Expansion.DiceTowerPromo] = {
  expansion: Expansion.DiceTowerPromo,
  name: 'Dice Tower Promo',
  shortName: 'DT',
  marketCards: DICE_TOWER_PROMO_CARDS,
  mages: null,
  nemeses: null
};
EXPANSION_INFO[Expansion.TheNewAge] = {
  expansion: Expansion.TheNewAge,
  name: 'The New Age',
  shortName: 'NA',
  marketCards: NEW_AGE_CARDS,
  mages: NEW_AGE_MAGES,
  nemeses: NEW_AGE_NEMESES
};
EXPANSION_INFO[Expansion.TheNewAgePromo] = {
  expansion: Expansion.TheNewAgePromo,
  name: 'The New Age Promo',
  shortName: 'NAP',
  marketCards: NEW_AGE_PROMO_CARDS,
  mages: null,
  nemeses: null
};
EXPANSION_INFO[Expansion.ShatteredDreams] = {
  expansion: Expansion.ShatteredDreams,
  name: 'Shattered Dreams',
  shortName: 'SD',
  marketCards: SHATTERED_DREAMS_CARDS,
  mages: SHATTERED_DREAMS_MAGES,
  nemeses: SHATTERED_DREAMS_NEMESES
};
EXPANSION_INFO[Expansion.TheAncients] = {
  expansion: Expansion.TheAncients,
  name: 'The Ancients',
  shortName: 'TA',
  marketCards: ANCIENTS_CARDS,
  mages: ANCIENT_MAGES,
  nemeses: ANCIENTS_NEMESES
};
EXPANSION_INFO[Expansion.IntoTheWild] = {
  expansion: Expansion.IntoTheWild,
  name: 'Into The Wild',
  shortName: 'ITW',
  marketCards: INTO_THE_WILD_CARDS,
  mages: INTO_THE_WILD_MAGES,
  nemeses: INTO_THE_WILD_NEMESES
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
