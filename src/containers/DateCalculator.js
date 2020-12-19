import React, { useState, useEffect, useRef } from "react";

import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import moment from "moment";

import {
  TYPE_START,
  TYPE_END,
  COLOR_BLUE,
  SETTINGS_KEY,
  DATE_FORMAT,
  COUNTRY_KEY,
} from "constants/Types";

import DateSelector from "components/DateSelector";
import Card from "components/Card";
import ProgressBar from "components/ProgressBar";
import SettingsModal from "components/SettingsModal";
import TimeCounter from "components/TimeCounter";
import CountrySelector from "components/CountrySelector";

import { getWorkingDaysCount } from "utils/Calculate";
import { getLocalStorage, setLocalStorage } from "utils/Storage";
import { getRandomMessage } from "utils/Message";

const AddEvent = ({ onClick }) => {
  const AddButton = withStyles({
    root: {
      backgroundColor: COLOR_BLUE,
      color: "white",
      justifySelf: "end",
    },
  })(Button);
  return (
    <AddButton
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
      onClick={onClick}
    >
      Add a new event
    </AddButton>
  );
};

const SettingsInfo = ({
  settings,
  countryCode,
  onLoadSettings,
  onOpenSettings,
  onSelectCountry,
}) => {
  return (
    <div className="settings-info">
      <CountrySelector code={countryCode} onSelect={onSelectCountry} />

      <Button variant="contained" color="primary" onClick={onLoadSettings}>
        {settings.title}
      </Button>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<EditIcon />}
        onClick={onOpenSettings}
      >
        Edit
      </Button>
    </div>
  );
};
const DateCalculator = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const prevEndDate = usePrevious(endDate);

  const [workDays, setWorkDays] = useState("-");
  const [calendarDays, setCalendarDays] = useState("-");
  const [percent, setPercent] = useState(0);
  const [message, setMessage] = useState("🎁");

  const [openSettings, setOpenSettings] = useState(false);
  const [settings, setSettings] = useState(null);
  const [countryCode, setCountryCode] = useState(null);

  const [showTimer, setTimer] = useState(false);

  useEffect(() => {
    loadFromLocalStorage();
  }, []);

  useEffect(() => {
    const isStartDateToday =
      moment(startDate).format(DATE_FORMAT) === moment().format(DATE_FORMAT);

    const isEndDateSame =
      moment(prevEndDate).format(DATE_FORMAT) ===
      moment(endDate).format(DATE_FORMAT);

    if (isStartDateToday && isEndDateSame) return;
    setTimer(false);
  }, [startDate, endDate]);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const loadFromLocalStorage = () => {
    const settings = getLocalStorage(SETTINGS_KEY);
    const countryCode = getLocalStorage(COUNTRY_KEY);
    if (!settings) return;

    const { endDate } = settings;
    const [year, month, date] = endDate.split("/");

    setStartDate(moment().set({ h: 0, m: 0, s: 0 }).toDate());
    setEndDate(moment({ year, month: month - 1, date }).toDate());
    setSettings(settings);
    setCountryCode(countryCode);
  };

  const toggleOpen = () => {
    setOpenSettings((prevState) => !prevState);
  };

  const handleDateChange = (type, value) => {
    if (type === TYPE_START) setStartDate(value);
    if (type === TYPE_END) setEndDate(value);
  };

  const handleCalculate = () => {
    if (
      !startDate ||
      !endDate ||
      endDate < startDate ||
      startDate === endDate
    ) {
      initData();
      return;
    }

    const calculated = getWorkingDaysCount(countryCode, startDate, endDate);

    if (!calculated) {
      const requiredMsg = document.querySelector(".required");
      requiredMsg.classList.toggle("show");

      setTimeout(() => {
        requiredMsg.classList.toggle("show");
      }, 2000);
      return;
    }

    const { calendarDays, workDays } = calculated;
    setCalendarDays(calendarDays || "-");
    setWorkDays(workDays || "-");

    const baseDate = moment(endDate).subtract(2, "years");
    const passedDates = moment(startDate).diff(moment(baseDate), "days") + 1;
    const percent = (passedDates / (365 * 2)) * 100;

    if (percent < 0 || percent > 100) {
      setPercent(0);
    } else {
      setPercent(Number.parseFloat(percent.toFixed(1)));
    }

    const isStartDateToday =
      moment(startDate).format(DATE_FORMAT) === moment().format(DATE_FORMAT);
    if (isStartDateToday) setTimer(true);

    const randomMessage = getRandomMessage(calendarDays);
    setMessage(randomMessage);
  };

  const handleSaveSettings = (data) => {
    const { title, date } = data;
    const ddaySettings = {
      title,
      endDate: moment(date).format(DATE_FORMAT),
    };

    setLocalStorage(SETTINGS_KEY, ddaySettings);
    toggleOpen();

    loadFromLocalStorage();
  };

  const handleSelectCountry = (code) => {
    console.log("code", code);

    if (typeof code !== "string") return;

    setLocalStorage(COUNTRY_KEY, code);

    initData();
    loadFromLocalStorage();
  };

  const initData = () => {
    setWorkDays("-");
    setCalendarDays("-");
    setPercent(0);
    setMessage("🎁");
  };

  const isKR = countryCode === "KR";

  return (
    <div className="main-content">
      <div className="content-wrapper">
        {settings ? (
          <SettingsInfo
            settings={settings}
            countryCode={countryCode}
            onOpenSettings={toggleOpen}
            onLoadSettings={loadFromLocalStorage}
            onSelectCountry={handleSelectCountry}
          />
        ) : (
          <AddEvent onClick={toggleOpen} />
        )}
        <DateSelector
          startDate={startDate}
          endDate={endDate}
          title={settings ? settings.title : ""}
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
        {isKR && <ProgressBar value={percent} />}
        <TimeCounter endDate={showTimer ? endDate : null} />

        {isKR && <Card outlined={true}>{message}</Card>}

        {openSettings && (
          <SettingsModal
            open={openSettings}
            settings={settings || {}}
            onClose={toggleOpen}
            onSave={handleSaveSettings}
          />
        )}
      </div>
    </div>
  );
};

export default DateCalculator;
