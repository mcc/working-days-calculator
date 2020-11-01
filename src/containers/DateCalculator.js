import React, { useState } from "react";

import moment from 'moment'; 

import DateSelector from "components/DateSelector";
import Card from "components/Card";
import ProgressBar from "components/ProgressBar";

const DateCalculator = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="main-content">
      <div className="content-wrapper">
        <DateSelector startDate={startDate} endDate={endDate} />
        <Card align="left">
          <i className="icon-work" />
          151 working days
        </Card>
        <Card align="left">
          <i className="icon-date" />
          178 calendar days
        </Card>
        <ProgressBar value={82} />
      </div>
    </div>
  );
};

export default DateCalculator;
