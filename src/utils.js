import React from "react";
import { TYPE_CHART, MOVES, SPECIES, ITEMS, ABILITIES } from "@smogon/calc";

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

export function validSpecies(input) {
  //let names = Object.keys(SPECIES[gen]); let i = 0; i < names.length; i++
  let key;
  for (key in SPECIES[gen]) {
    if (input === key) {
      console.log("valid");
      return true;
    }
  }
  return false;
}

export function validMove(input) {
  let key;
  for (key in MOVES[gen]) {
    if (input === key) {
      console.log("valid");
      return true;
    }
  }
  return false;
}
