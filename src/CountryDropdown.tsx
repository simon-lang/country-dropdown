import "./Flags.css";
import "./CountryDropdown.css";
import Fuse from "fuse.js";
import React from "react";
import countries from "iso-3166-2";
import orderBy from "lodash/orderBy";

interface Country {
  name: string;
  code: string;
}

const _countries: Array<Country> = orderBy(
  Object.keys(countries.data).map((code) => {
    const { name } = countries.data[code];
    return { code, name };
  }),
  "name"
);

function CountryDropdown() {
  const [countries, setCountries] = React.useState<any[]>([]);
  const [showDropdown, setShowDropdown] = React.useState<boolean>(true);
  const [selected, setSelected] = React.useState<Country | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  const node = React.useRef<HTMLElement>();

  const onChange = (e: any) => {
    const name = e.target.value;
    if (name) {
      const fuse = new Fuse(_countries, { keys: ["name"], threshold: 0.3 });
      const results = fuse.search(name);
      setCountries(results.map((d) => d.item));
    } else {
      setCountries(_countries);
    }
    setSelected(null);
    setSelectedIndex(null);
  };

  const clickItem = (country: Country) => {
    setSelected(country);
    setShowDropdown(true);
    setCountries([]);
  };

  const onBlur = () => {
    setTimeout(() => {
      setShowDropdown(true);
      setCountries([]);
    }, 100);
  };

  const clickDropdown = () => {
    setShowDropdown(false);
    setCountries(_countries);
    setTimeout(() => {
      const el: HTMLInputElement | null = document.querySelector(".input");
      if (el) {
        el.focus(); // use ref
      }
    }, 100);
  };

  const onKeyDown = (e: any) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex(
        selectedIndex === null
          ? 0
          : Math.min(countries.length - 1, selectedIndex + 1)
      );
    } else if (e.key === "ArrowUp") {
      setSelectedIndex(
        selectedIndex === null ? null : Math.max(0, selectedIndex - 1)
      );
    } else if (e.key === "Escape") {
      onBlur();
    } else if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      const country = countries[selectedIndex || 0];
      if (country) {
        setSelected(country);
        onBlur();
      }
    }
  };

  // Handle click outside to close dropdown
  const handleClick = (e: Event) => {
    if (node && node.current && node.current.contains(e.target as Node)) {
      return;
    }
    onBlur();
  };
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  return (
    <div className="CountryDropdown" ref={node as any}>
      {showDropdown ? (
        <div className="dropdown" onClick={clickDropdown}>
          {selected ? (
            <div className="selected-item">
              <div className={`flag flag-${selected.code.toLowerCase()}`}></div>
              <span className="selected-item-text">{selected.name}</span>
            </div>
          ) : (
            "Select"
          )}
        </div>
      ) : (
        ""
      )}
      {!showDropdown ? (
        <input
          className="input"
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder="Search"
        />
      ) : (
        ""
      )}
      {countries.length ? (
        <div className="autocomplete">
          <ul className="autocomplete-inner">
            {countries.map((country, i) => {
              return (
                <li
                  key={country.code}
                  className={
                    "autocomplete-item " +
                    (selectedIndex === i ? "selected" : "")
                  }
                  onClick={() => clickItem(country)}
                >
                  <div
                    className={`flag flag-${country.code.toLowerCase()}`}
                  ></div>
                  {country.name}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CountryDropdown;
