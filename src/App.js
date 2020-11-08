import React, { useEffect } from "react";
import "styles/app.scss";
import "react-calendar/dist/Calendar.css";
import DateCalculator from "containers";
import ReactGA from "react-ga";
import DobbyIcon from "assets/images/dobby.png";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-HXVX2W66FB");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <DateCalculator />
      {/* <div className="dobby-wrapper">
        <img src={DobbyIcon} alt="dobby"/>
      </div> */}
    </div>
  );
}

export default App;
