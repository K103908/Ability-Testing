const midway = extendContent (UnitType, "Midway", {});
midway.constructor = () => extend(UnitWaterMove, {});
//2 ain't enough. time to m u l t i p l y
var sides = [-8, 8];
for(var i = 0; i < 5; i++){
  //Unit Spawn Ability(unit, spawn time, x, y)
  midway.abilities.add(new UnitSpawnAbility(UnitTypes.horizon, 60 * 30 + 60 * i, sides[i % 2], 32 - i * 16));
  midway.abilities.add(new UnitSpawnAbility(UnitTypes.flare, 60 * 30 + 60 * i, sides[(i + 2) % 2], 32 - i * 16));
}
//StatsFieldAbility(effect, duration, reload, radius)
midway.abilties.add(new StatusFieldAbility(StatusEffects.overclock, 60 * 6, 60 * 9, 64));

//UnitFactory.UnitPlan(unit, time, cost)
Blocks.navalFactory.plans.add(new UnitFactory.UnitPlan(midway, 60 * 25, ItemStack.with(Items.silicon, 69, Items.metaglass, 69, Items.titanium, 69)));