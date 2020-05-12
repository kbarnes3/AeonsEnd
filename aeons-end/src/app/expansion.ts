export enum Expansion {
  Base,
  TheDepths,
  TheNameless,
  WarEternal,
  TheVoid,
  TheOuterDark,
  Legacy,
  LegacyPromo,
  BuriedSecrets,
  DiceTowerPromo,
  TheNewAge,
  ShatteredDreams,
  TheNewAgePromo,
  TheAncients,
  IntoTheWild,
}

export class ExpansionDependency {
  expansion: Expansion;
  requiredExpansion: Expansion;
}

export const DEPENDENCIES: ExpansionDependency[] = [
  {
    expansion: Expansion.TheNewAgePromo,
    requiredExpansion: Expansion.DiceTowerPromo
  }
];
