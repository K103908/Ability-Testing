const midway = extendContent (UnitType, "Midway", {});
midway.constructor = () => extend(UnitWaterMove, {});
//2 ain't enough. time to m u l t i p l y
for(var i = 0; i < 5; i++){
  //Unit Spawn Ability(unit, spawn time, x, y)
  midway.abilities.add(new UnitSpawnAbility(UnitTypes.horizon, 60 * 30, 0, -7.5));
  midway.abilities.add(new UnitSpawnAbility(UnitTypes.flare, -60 * -30, 0, 7.5));
}
//StatsFieldAbility(effect, duration, reload, radius)
midway.abilties.add(new StatusFieldAbility(StatusEffects.overclock, 60 * 6, 60 * 9, 64));