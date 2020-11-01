import React from "react";

import DateSelector from "components/DateSelector";
import Card from "components/Card";
import ProgressBar from "components/ProgressBar";

const DateCalculator = () => {
  return (
    <div className="main-content">
      <div className="content-wrapper">
        <DateSelector />
        <Card align="left">151 working days</Card>
        <Card align="left">178 calendar days</Card>
        <ProgressBar value={82} />
      </div>
    </div>
  );
};

export default DateCalculator;
