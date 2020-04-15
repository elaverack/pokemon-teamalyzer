import React from "react";
import { TYPE_CHART, MOVES, SPECIES, ITEMS, ABILITIES } from "@smogon/calc";

// GLOBAL CONSTANTS

export const gen = 8;

////// OBJECT DEFINITIONS /////////////////////////////////////////////////////////////////////////////
export const statNames = [
  "HP",
  "Attack",
  "Defense",
  "Sp-Attack",
  "Sp-Defense",
  "Speed",
];

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

export let inputData = {
  field: field,
  level: "50",
  team: Array(6)
    .fill(null)
    .map(() => ({ ...pokemon })),
};

// SECTION OPTION GENERATORS
export function genTypeOptions() {
  return Object.keys(TYPE_CHART[gen]).map((name) => (
    <option value={name} key={name}>
      {name}
    </option>
  ));
}

export function genMoveOptions() {
  //Filter out Z moves and Max moves
  let moves = {},
    key;
  for (key in MOVES[gen]) {
    if (!MOVES[gen][key].isMax && !MOVES[gen][key].isZ) {
      moves[key] = MOVES[gen][key];
    }
  }

  return Object.keys(moves).map((name) => (
    <option value={name} key={name}>
      {name}
    </option>
  ));
}

export function genSpeciesOptions() {
  return Object.keys(SPECIES[gen]).map((name) => (
    <option value={name} key={name}>
      {name}
    </option>
  ));
}

export function genItemOptions() {
  return Object.values(ITEMS[gen]).map((name) => (
    <option value={name} key={name}>
      {name}
    </option>
  ));
}

export function genAbilityOptions() {
  return Object.values(ABILITIES[gen]).map((name) => (
    <option value={name} key={name}>
      {name}
    </option>
  ));
}

// VALIDATION CHECK FUNCTIONS
export function validSpecies(input) {
  let key;
  for (key in SPECIES[gen]) {
    if (input === key) {
      return true;
    }
  }
  return false;
}

export function validMove(input) {
  let key;
  for (key in MOVES[gen]) {
    if (input === key) {
      return true;
    }
  }
  return false;
}
