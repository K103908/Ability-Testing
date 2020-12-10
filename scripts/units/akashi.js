const akashi = extendContent (UnitType, "akashi", {});
akashi.constructor = () => extend(UnitWaterMove, {});
akashi.abilities.add(new ForceFieldAbility(60 * 9, 60 * 9, 46));
akashi.abilities.add(new RepairFieldAbility(60 * 9, 60 * 9, 46));
