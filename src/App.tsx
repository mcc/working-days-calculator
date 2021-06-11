import React, { useEffect, useState, useContext } from "react";

// import Snowflakes from "magic-snowflakes";
import MenuIcon from "@material-ui/icons/Menu";

import DateCalculator from "containers";

import Feedback from "components/Feedback";
import Loader from "components/Loader";
import SideNav from "components/SideNav";

import { createRipple } from "utils/Ripple";

import { ThemeContext } from "context/ThemeContext";

import "styles/app.scss";
import "react-calendar/dist/Calendar.css";

function App() {
  const { isCustomMode } = useContext(ThemeContext);
  const [imageLoading, setImageLoading] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  // useEffect(() => {
  //   Snowflakes({
  //     color: "white",
  //     count: 40,
  //     speed: 1,
  //     minSize: 13,
  //     maxSize: 18,
  //     minOpacity: 0.5,
  //   });
  // }, []);

  const toggleFeedback = () => {
    const element = document.getElementById("feedback");
    element.classList.toggle("show");
  };

  const toggleSideNav = (e) => {
    if (e) createRipple(e);

    const sideNav = document.getElementById("sideNav");
    sideNav.classList.toggle("show");

    setOpenMenu((prevState) => !prevState);
  };

  const onImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <div className="App">
      {imageLoading && <Loader />}
      <img
        className="background"
        alt=""
        onLoad={onImageLoad}
        style={{ display: isCustomMode ? "block" : "none" }}
      />
      <MenuButton onToggle={toggleSideNav} />
      <SideNav open={openMenu} onToggle={toggleSideNav} />

      <DateCalculator />

      <div className="feedback-icon" onClick={toggleFeedback}>
        <i className="icon-feedback" />
        <Message />
      </div>
      <Feedback onToggle={toggleFeedback} />

      <CopyRight />
    </div>
  );
}

const Message = () => <div id="message">Thanks for your feedback ! 💖</div>;

const CopyRight = () => (
  <div className="copyright"> Copyright © 2020 jylee. All rights reserved.</div>
);

const MenuButton: React.FC<Props> = ({ onToggle }) => (
  <span className="menu" onClick={onToggle}>
    <MenuIcon />
  </span>
);
export default App;
