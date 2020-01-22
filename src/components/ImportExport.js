import React from "react";

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
