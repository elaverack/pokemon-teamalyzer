import React from "react";

// TODO pass weight in from pokemon input as prop
// OPTIONAL make weight interactable for input and target to accurately calc low kick, grass knot, heat crash and heavy slam

function Weight(props) {
  return (
    <div className="hide">
      <label>Weight (kg):</label>
      <output className="weight">{props.weight}</output>
    </div>
  );
}

export default Weight;
