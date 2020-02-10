import React from "react";
import { TYPE_CHART, MOVES, SPECIES, ITEMS, ABILITIES } from "@smogon/calc";

const gen = 8;

// SECTION OPTION GENERATORS
export function genTypeOptions() {
  return Object.keys(TYPE_CHART[gen]).map(name => (
    <option value={name} key={name}>
      {name}
    </option>
  ));
}

export function genMoveOptions() {
  return Object.keys(MOVES[gen]).map(name => (
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
