import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import countries from "data/Country";

const CountryButton = withStyles((theme) => ({
  root: {
    textTransform: "inherit",
  },
}))(Button);

const CountrySelector = ({ code, onSelect }) => {
  const [showList, setShowList] = useState(false);

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

  const handleSelectCountry = (e) => {
    const { nodeName, id } = e.target;
    if (nodeName !== "LI") return;

    onSelect(id);
    toggleList();
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
          {countries[code] ? countries[code].code : "Select"}
        </span>
      </CountryButton>

      {showList && (
        <ul onClick={handleSelectCountry}>
          {Object.values(countries).map((country) => (
            <li
              id={country.code}
              key={country.code}
              className={code === country.code ? "selected" : ""}
            >
              {country.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountrySelector;
