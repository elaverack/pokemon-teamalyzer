import React from "react";

/* TODO
create functions needed to convert showdown export into pokemon class
update the team state using the inputted pokemon
don't store sets like in the damage calc? do users want to rapidly switch between potential sets/spreads? STRETCH FEATURE
what happens when someone inputs less than 6 pokemon, who gets replaced? probably last pokemon gets replaced
user selects which pokemon to replace? STRETCH FEATURE
*/

class ImportExport extends React.Component {
  render() {
    return (
      <div style={{ border: "1px solid" }}>
        <fieldset>
          <legend>Import / Export</legend>
          <form>
            <textarea></textarea>
          </form>
          <button style={{ position: "static", bottom: 0 }}>Import</button>
          <button style={{ position: "static", bottom: 0 }}>Export</button>
        </fieldset>
      </div>
    );
  }
}

export default ImportExport;