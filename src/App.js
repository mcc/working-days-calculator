import React, { useEffect } from "react";

import DateCalculator from "containers";
import Snowflakes from "magic-snowflakes";

import Feedback from "components/Feedback";

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
    <div className="App">
      {/* <div className="App christmas-theme"> */}
      <DateCalculator />

      <div className="feedback-icon" onClick={toggleFeedback}>
        <i className="icon-feedback" />
      </div>
      <Feedback onToggle={toggleFeedback}/>
    </div>
  );
}

export default App;
