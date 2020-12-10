const akashi = extendContent (UnitType, "akashi", {});
akashi.constructor = () => extend(UnitWaterMove, {});
//ForceFieldAbility(radius, regen (hp/tick), maxHp, cooldown (ticks to come back after being dstroyed))
akashi.abilities.add(new ForceFieldAbility(48, 1, 3000, 60 * 15));
//RepairFieldAbility(Amount, Reload, Radius)
akashi.abilities.add(new RepairFieldAbility(50, 15, 46));