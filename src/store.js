import { observable, autorun } from "mobx";

////// OBJECT DEFINITIONS /////////////////////////////////////////////////////////////////////////////

export let fieldSide = {
  stealthRock: false,
  steelsurge: false,
  spikes: "0",
  reflect: false,
  lightscreen: false,
  protect: false,
  leechseed: false,
  foresight: false,
  helpinghand: false,
  tailwind: false,
  friendguard: false,
  auroraveil: false,
  allboost: false,
  battery: false,
  switch: false,
};

export let field = {
  format: "Doubles",
  terrain: "None",
  weather: "None",
  gravity: false,
  sides: Array(2)
    .fill(null)
    .map(() => ({ ...fieldSide })),
};

export let move = {
  name: "",
  bp: "",
  type: "None",
  category: "Physical",
  hits: "5",
  crit: false,
};

export let pokemon = {
  species: "",
  types: ["None", "None"],
  gender: "Genderless",
  baseVals: ["100", "100", "100", "100", "100", "100"],
  ivVals: ["31", "31", "31", "31", "31", "31"],
  evVals: ["0", "0", "0", "0", "0", "0"],
  boosts: ["0", "0", "0", "0", "0", "0"],
  nature: "Serious",
  ability: "",
  abilityOn: true,
  item: "",
  status: "",
  isMax: false,
  //TODO OPTIONAL allow changing current hp to affect moves
  // curHP: "100"
  moves: Array(4)
    .fill(null)
    .map(() => ({ ...move })),
};

export var teamState = observable({
  field: field,
  level: "50",
  team: Array(6)
    .fill(null)
    .map(() => ({ ...pokemon })),
});

autorun(() => console.log(teamState.team[0].species));