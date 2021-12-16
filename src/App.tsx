import "./App.css";
import React from "react";

import CountryDropdown from "./CountryDropdown";

function App() {
  return (
    <div className="App">
      <h1>Country Dropdown</h1>
      <p>
        Uses iso-3166-2 and fuse.js to create a simple searchable dropdown for
        countries which supports fuzzy matching.
      </p>
      <p>
        Navigate options with arrow keys and select with Enter/Tab or mouse.
        Escape or click outside to close the dropdown.
      </p>
      <div className="py">
        <CountryDropdown />
      </div>
      <p>
        In a real project I'd probably use an existing component{" "}
        <a href="https://mui.com/components/autocomplete/">like this</a>
      </p>
    </div>
  );
}

export default App;
