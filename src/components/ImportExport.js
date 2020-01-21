import React from "react";

class ImportExport extends React.Component {
  render() {
    return (
      <div aria-label="Import team" role="region">
        <fieldset className="poke-import">
          <legend align="center">Import / Export</legend>
          <div id="import-1_wrapper" className="dataTables_wrapper no-footer">
            <form className="import-team">
              <textarea className="import-team-text"></textarea>
              {/* <!--<button style='position:absolute' class='bs-btn bs-btn-default'>Import</button>--> */}
            </form>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default ImportExport;
