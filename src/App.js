import React, { useEffect } from "react";

import DateCalculator from "containers";
import Snowflakes from "magic-snowflakes";

import Notification from "components/Notification";
import Feedback from "components/Feedback";

import { NotificationProvider } from "utils/Notification";

import "styles/app.scss";
import "react-calendar/dist/Calendar.css";

function App() {
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

  const toggleFeedback = () => {
    const element = document.getElementById("feedback");
    element.classList.toggle("show");
  };

  return (
    // <div className="App">
    <div className="App christmas-theme">
      <DateCalculator />

      <div className="feedback-icon" onClick={toggleFeedback}>
        <i className="icon-feedback" />
        <Message />
      </div>
      <Feedback onToggle={toggleFeedback} />

      {/* <Notification />
      <NotificationProvider /> */}
    </div>
  );
}

const Message = () => <div id="message">Thanks for your feedback ! 💖</div>;

export default App;
