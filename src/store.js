import { observable, autorun } from "mobx";
// import { computedFn } from "mobx-utils";
// import { Pokemon } from "@smogon/calc";
// import { validSpecies, gen } from "./utils";

//////1 TEAM STORE DEFINITIONS /////////////////////////////////////////////////////////////////////////////

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
  hits: "1",
  crit: false,
};

export let pokemon = {
  species: "",
  types: ["None", "None"],
  gender: "Genderless",
  baseVals: ["48", "48", "48", "48", "48", "48"],
  ivVals: ["31", "31", "31", "31", "31", "31"],
  evVals: ["0", "0", "0", "0", "0", "0"],
  boosts: ["0", "0", "0", "0", "0", "0"],
  nature: "Serious",
  ability: "",
  abilityOn: true,
  item: "",
  status: "",
  isMax: false,
  weight: "4",
  //OPTIONAL allow changing current hp to affect moves
  // curHP: "100"
  moves: Array(4)
    .fill(null)
    .map(() => ({ ...move })),
};

export let teamState = observable({
  field: field,
  level: "50",
  team: Array(6)
    .fill(null)
    .map(() => ({ ...pokemon })),
});

autorun(() => console.log(teamState.team[0].species));

//QUESTION mobx likes to use decorators, but is only supported by typescript and babel.
//what is babel? how do i incorporate it?
//QUESTION how do i get an observable object to pass state down to a nested object and update properly?
//QUESTION how to store previous versions of state? flip between them?
