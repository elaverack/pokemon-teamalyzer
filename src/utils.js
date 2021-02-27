import React from 'react';
import { TYPE_CHART, MOVES, SPECIES, ITEMS, ABILITIES } from '@smogon/calc';

// GLOBAL CONSTANTS
export const statNames = ['HP', 'Attack', 'Defense', 'Sp-Attack', 'Sp-Defense', 'Speed'];

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
  return Object.values(ITEMS[gen]).map((name, index) => (
    <option value={name} key={index}>
      {name}
    </option>
  ));
}

export function genAbilityOptions() {
  return Object.values(ABILITIES[gen]).map((name, index) => (
    <option value={name} key={index}>
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
    if (input == key) {
      return true;
    }
  }
  return false;
}

export function validItem(input) {
  let key;
  for (key in ITEMS[gen]) {
    if (input == ITEMS[gen][key] || input == '') {
      return true;
    }
  }
  return false;
}

// HANDLE RANGE FUNCTION

export function handleRange(event) {
  const input = event.target;
  if (input.value < parseInt(input.min, 10)) {
    input.value = input.min;
  } else if (input.value > parseInt(input.max, 10)) {
    input.value = input.max;
  }
  return input.value;
}
