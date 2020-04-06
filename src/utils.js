import React from "react";
import { TYPE_CHART, MOVES, SPECIES, ITEMS, ABILITIES } from "@smogon/calc";

export const gen = 8;

// SECTION OPTION GENERATORS
export function genTypeOptions() {
  return Object.keys(TYPE_CHART[gen]).map(name => (
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

  return Object.keys(moves).map(name => (
    <option value={name} key={name}>
      {name}
    </option>
  ));
}

export function genSpeciesOptions() {
  return Object.keys(SPECIES[gen]).map(name => (
    <option value={name} key={name}>
      {name}
    </option>
  ));
}

export function genItemOptions() {
  return Object.values(ITEMS[gen]).map(name => (
    <option value={name} key={name}>
      {name}
    </option>
  ));
}

export function genAbilityOptions() {
  return Object.values(ABILITIES[gen]).map(name => (
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
