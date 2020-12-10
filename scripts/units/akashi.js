const akashi = extendContent (UnitType, "akashi", {});
akashi.constructor = () => extend(UnitWaterMove, {});
akashi.abilities.add(new ForceFieldAbility(48, 1, 3000, 60 * 10));
akashi.abilities.add(new RepairFieldAbility(60 * 9, 60 * 9, 46));
