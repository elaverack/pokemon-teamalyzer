import React from "react";

// TODO pass weight in from pokemon input as prop
// OPTIONAL make weight interactable for input and target to accurately calc low kick, grass knot, heat crash and heavy slam

function Weight() {
  return (
    <div className="hide">
      <label id="weightL1">Weight (kg):</label>
      <output className="weight" id="weightL1">
        10.0
      </output>
    </div>
  );
}

export default Weight;
