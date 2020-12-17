import React, { useEffect, useState } from "react";

import axios from "axios";
import Snowflakes from "magic-snowflakes";

import DateCalculator from "containers";

import Notification from "components/Notification";
import Feedback from "components/Feedback";
import Loader from "components/Loader";

import { NotificationProvider } from "utils/Notification";

import "styles/app.scss";
import "react-calendar/dist/Calendar.css";

function App() {
  const [imageLoading, setImageLoading] = useState(true);
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

  const onImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <div className="App christmas-theme">
      {imageLoading && <Loader />}
      <img className="background" alt="" onLoad={onImageLoad} />
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

export default App;
