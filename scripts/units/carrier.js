const SuNavT3 =
extendContent (UnitType,
"Carrier", {}) ;
SuNavT3.constructor = () =>
extend(UnitWaterMove, {});
SuNavT3.abilities.add(new
UnitSpawnAbility(UnitTypes.horizon,
60 * 30, 0, -7.5));
SuNavT3.abilities.add(new
UnitSpawnAbility(UnitTypes.flare,
-60 * -30, 0, 7.5));
SuNavT3.abilties.add(new
StatusFieldAbility(StatusEffects
.overclock, 60 * 6, 60 * 9, 
64));
