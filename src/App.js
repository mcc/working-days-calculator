import React, { useEffect, useState } from "react";

import axios from "axios";
import Snowflakes from "magic-snowflakes";
import MenuIcon from "@material-ui/icons/Menu";

import DateCalculator from "containers";

import Feedback from "components/Feedback";
import Loader from "components/Loader";
import SideNav from "components/SideNav";

import { createRipple } from "utils/Ripple";

import "styles/app.scss";
import "react-calendar/dist/Calendar.css";

function App() {
  const [imageLoading, setImageLoading] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    fetchImage();
  }, []);

  useEffect(() => {
    Snowflakes({
      color: "white",
      count: 40,
      speed: 1,
      minSize: 13,
      maxSize: 18,
      minOpacity: 0.5,
    });
  }, []);

  const fetchImage = async () => {
    const url = `https://images.unsplash.com/photo-1482517967863-00e15c9b44be?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80`;
    const imgRequest = await axios
      .get(url)
      .then((res) => (res.status === 200 ? res : { error: res }))
      .catch((error) => ({ error }));

    if (!imgRequest || imgRequest.error) {
      setImageLoading(false);
    } else {
      const img = document.querySelector(".background");
      img.src = url;
    }
  };

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
    <div className="App christmas-theme">
      {imageLoading && <Loader />}
      <img className="background" alt="" onLoad={onImageLoad} />
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

const MenuButton = ({ onToggle }) => (
  <span className="menu" onClick={onToggle}>
    <MenuIcon />
  </span>
);
export default App;
