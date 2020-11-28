import React, { useEffect } from "react";

import DateCalculator from "containers";
import Snowflakes from 'magic-snowflakes';
import "styles/app.scss";
import "react-calendar/dist/Calendar.css";
// import ReactGA from "react-ga";

function App() {
  
  useEffect(() => {
    Snowflakes({
      color : 'white',
      count : 40,
      speed : 1, 
      minSize : 13, 
      maxSize :18, 
      minOpacity : 0.5
    });
  },[]);

  return (
    <div className="App christmas-theme">
      <DateCalculator />
    </div>
  );
}

export default App;
