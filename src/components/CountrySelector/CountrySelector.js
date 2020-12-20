import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import WarningIcon from "@material-ui/icons/Warning";

import countries from "data/Country";

const CountryButton = withStyles((theme) => ({
  root: {
    textTransform: "inherit",
  },
}))(Button);

const CountrySelector = ({ code, onSelect }) => {
  const [showList, setShowList] = useState(false);
  const [countryList, setCountryList] = useState(countries);
  let timer = null;

  useEffect(() => {
    if (!showList) return;
    const list = document.querySelector(".country-selector ul");
    const items = list.getElementsByTagName("li");

    const selected = Array.from(items).find((el) =>
      el.className.includes("selected")
    );

    if (!selected) return;

    list.scrollIntoView({ behavior: "smooth" });
    list.scrollTop = selected.offsetTop - list.clientHeight / 2;
  }, [showList]);

  const toggleList = () => {
    setShowList((prevState) => !prevState);
  };

  /**
   *
   * @description Select a country in the list
   * @param {Event} e
   */
  const handleSelectCountry = (e) => {
    const { nodeName, id } = e.target;
    if (nodeName !== "LI") return;

    onSelect(id);
    toggleList();
    setCountryList(countries);
  };

  /**
   *
   * @description Search for matching country names
   * @param {Event} e
   */
  const handleSearch = (e) => {
    if (timer) return;
    timer = setTimeout(() => {
      const { value } = e.target;
      const filtered = Object.values(countries).filter((country) =>
        country.name.toLowerCase().includes(value.trim().toLowerCase())
      );

      setCountryList(filtered);
    }, 500);
  };

  return (
    <div className="country-selector">
      <CountryButton
        variant="contained"
        color="primary"
        className="country"
        endIcon={<ExpandMoreIcon />}
        onClick={toggleList}
      >
        <span className="pc-text">
          {countries[code] ? countries[code].name : "Select Country"}
        </span>
        <span className="mobile-text">
          {countries[code] ? countries[code].code : "Country"}
        </span>
      </CountryButton>
      <RequiredMessage />

      {showList && (
        <div className="list">
          <div className="search">
            <input
              type="text"
              placeholder="Search"
              onChange={handleSearch}
              maxLength="20"
              spellCheck="false"
              autoComplete="false"
            />
            <SearchIcon />
          </div>
          <ul onClick={handleSelectCountry}>
            {Object.values(countryList).map((country) => (
              <li
                id={country.code}
                key={country.code}
                className={code === country.code ? "selected" : ""}
              >
                {country.name}
              </li>
            ))}
            {countryList.length === 0 && (
              <div className="empty"> No matching results found.</div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

const RequiredMessage = () => (
  <div className="required">
    <WarningIcon />
    Please select your country
  </div>
);

export default CountrySelector;
