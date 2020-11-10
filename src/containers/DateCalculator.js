import React, { useState, useEffect } from "react";

import moment from "moment";

import { TYPE_START, TYPE_END, SETTINGS_KEY } from "constants/Types";

import DateSelector from "components/DateSelector";
import Card from "components/Card";
import ProgressBar from "components/ProgressBar";
import SettingsModal from "components/SettingsModal";
import TimeCounter from "components/TimeCounter";

import { getWorkingDaysCount } from "utils/Calculate";
import { getLocalStorage, setLocalStorage } from "utils/Storage";

const DateCalculator = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [workDays, setWorkDays] = useState("-");
  const [calendarDays, setCalendarDays] = useState("-");
  const [percent, setPercent] = useState(0);

  const [openSettings, setOpenSettings] = useState(false);
  const [settings, setSettings] = useState({});

  useEffect(() => {
    loadFromLocalStorage();
  }, []);

  const loadFromLocalStorage = () => {
    const settings = getLocalStorage(SETTINGS_KEY);
    if (!settings) return;

    const { endDate } = settings;
    const [year, month, date] = endDate.split("/");

    setStartDate(moment().toDate());
    setEndDate(moment({ year, month: month - 1, date }).toDate());
    setSettings(settings);
  };

  const toggleOpen = () => {
    setOpenSettings((prevState) => !prevState);
  };

  const handleDateChange = (type, value) => {
    if (type === TYPE_START) setStartDate(value);
    if (type === TYPE_END) setEndDate(value);
  };

  const handleCalculate = () => {
    if (!startDate || !endDate || endDate < startDate) return;

    const days = getWorkingDaysCount(startDate, endDate);
    setCalendarDays(days.calendarDays || "-");
    setWorkDays(days.workDays || "-");

    const baseDate = moment(endDate).subtract(2, "years");
    const passedDates = moment(startDate).diff(moment(baseDate), "days") + 1;
    const percent = (passedDates / (365 * 2)) * 100;

    setPercent(Number.parseFloat(percent.toFixed(1)));
  };

  const handleSaveSettings = (data) => {
    const { title, date } = data;
    const ddaySettings = {
      title,
      endDate: moment(date).format("YYYY/MM/DD"),
    };

    setLocalStorage(SETTINGS_KEY, ddaySettings);
    toggleOpen();

    loadFromLocalStorage();
  };

  return (
    <div className="main-content">
      <div className="content-wrapper">
        <DateSelector
          startDate={startDate}
          endDate={endDate}
          title={settings.title}
          onDateChange={handleDateChange}
          onCalculate={handleCalculate}
          onOpenSettings={toggleOpen}
        />
        <Card align="left">
          <i className="icon-work" />
          {workDays} working days
        </Card>
        <Card align="left">
          <i className="icon-date" />
          {calendarDays} calendar days
        </Card> 
        <TimeCounter />
        <ProgressBar value={percent} /> 

        {openSettings && (
          <SettingsModal
            open={openSettings}
            settings={settings}
            onClose={toggleOpen}
            onSave={handleSaveSettings}
          />
        )}
        {/* <div> message..</div> */}
      </div>
    </div>
  );
};

export default DateCalculator;
