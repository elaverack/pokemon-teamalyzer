import { observable, autorun } from "mobx";
import { computedFn } from "mobx-utils";
import { Pokemon } from "@smogon/calc";
import { validSpecies, gen } from "./utils";

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
  hits: "5",
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
  //TODO OPTIONAL allow changing current hp to affect moves
  // curHP: "100"
  moves: Array(4)
    .fill(null)
    .map(() => ({ ...move })),
  stat: computedFn(function stat(index) {
    let species = this.species;
    if (!validSpecies(this.species)) {
      species = "Ditto";
    }
    let currPokemon = new Pokemon(gen, species, {
      nature: this.nature,
      isDynamaxed: this.isMax,
      ivs: {
        hp: +this.ivVals[0],
        atk: +this.ivVals[1],
        def: +this.ivVals[2],
        spa: +this.ivVals[3],
        spd: +this.ivVals[4],
        spe: +this.ivVals[5],
      },
      evs: {
        hp: +this.evVals[0],
        atk: +this.evVals[1],
        def: +this.evVals[2],
        spa: +this.evVals[3],
        spd: +this.evVals[4],
        spe: +this.evVals[5],
      },
    });
    if (index === 0) {
      return currPokemon.maxHP();
    } else {
      let statOut = [...Object.values(currPokemon.rawStats)];
      return statOut[index];
    }
  }),
};

export var teamState = observable({
  field: field,
  level: "50",
  team: Array(6)
    .fill(null)
    .map(() => ({ ...pokemon })),
});

autorun(() => console.log(teamState.team[1].stat(1)));
