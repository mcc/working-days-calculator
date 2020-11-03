import React, { useState } from "react";

import moment from 'moment';

import { TYPE_START, TYPE_END } from "constants/Types";

import DateSelector from "components/DateSelector";
import Card from "components/Card";
import ProgressBar from "components/ProgressBar";

import { getWorkingDaysCount } from "utils/Calculate";

const DateCalculator = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [workDays, setWorkDays] = useState("-");
  const [calendarDays, setCalendarDays] = useState("-");
  const [percent, setPercent] = useState(0);

  const handleDateChange = (type, value) => {
    if (type === TYPE_START) setStartDate(value);
    if (type === TYPE_END) setEndDate(value);
  };

  const handleCalculate = () => { 

    if(!startDate || !endDate || endDate < startDate) return; 

    const days = getWorkingDaysCount(startDate, endDate);
    setCalendarDays(days.calendarDays || '-');
    setWorkDays(days.workDays || '-'); 

    const baseDate = moment(endDate).subtract(2,'years');
    const passedDates = moment(startDate).diff(moment(baseDate),'days') + 1 ; 
    const percent = ((passedDates/ (365*2)) *100); 

    setPercent(Number.parseFloat(percent.toFixed(1))); 
  };

  return (
    <div className="main-content">
      <div className="content-wrapper">
        <DateSelector
          startDate={startDate}
          endDate={endDate}
          onDateChange={handleDateChange}
          onCalculate={handleCalculate}
        />
        <Card align="left">
          <i className="icon-work" />
          {workDays} working days
        </Card>
        <Card align="left">
          <i className="icon-date" />
          {calendarDays} calendar days
        </Card>
        <ProgressBar value={percent} />
      </div>
    </div>
  );
};

export default DateCalculator;
