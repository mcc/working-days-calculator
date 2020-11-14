import React, { useState } from "react";

import moment from "moment";

import { COLOR_BLUE, TYPE_START, TYPE_END, DATE_FORMAT} from "constants/Types";

import Card from "components/Card";
import Text from "components/Text";
import Input from "components/Input";
import CalendarModal from "components/DateSelector/CalendarModal";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const DateSelector = ({
  startDate,
  endDate,
  onDateChange,
  onCalculate,
  onOpenSettings,
  title,
}) => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [calendarId, setCalendarId] = useState(null);

  const CalculateButton = withStyles({
    root: {
      backgroundColor: COLOR_BLUE,
    },
  })(Button);

  // const toggleCalendar = (type) => {
  //   const calendars = document.getElementsByClassName("react-calendar");
  //   const [startCalendar, endCalendar] = calendars;

  //   if (type === TYPE_START) {
  //     const isHidden = startCalendar.classList.contains("hide");
  //     if (isHidden) {
  //       startCalendar.classList.remove("hide");
  //       endCalendar.classList.add("hide");
  //     } else {
  //       startCalendar.classList.add("hide");
  //     }
  //   }

  //   if (type === TYPE_END) {
  //     const isHidden = endCalendar.classList.contains("hide");

  //     isHidden
  //       ? endCalendar.classList.remove("hide")
  //       : endCalendar.classList.add("hide");
  //   }
  // };

  const toggleCalendar = (id) => {
    setOpenCalendar((prevState) => !prevState);
    setCalendarId(id);
  };
  
  return (
    <Card className="date-selector">
      <Info title={title} onClick={onOpenSettings} />
      <Date
        id={TYPE_START}
        name="Start Date"
        value={startDate}
        onChange={onDateChange}
        onOpenCalendar={toggleCalendar}
      />
      <Date
        id={TYPE_END}
        name="End Date"
        value={endDate}
        onChange={onDateChange}
        onOpenCalendar={toggleCalendar}
      />
      <CalculateButton
        variant="contained"
        color="primary"
        onClick={onCalculate}
      >
        Calculate
      </CalculateButton>

      {openCalendar && (
        <CalendarModal
          open={openCalendar}
          onClose={toggleCalendar}
          id={calendarId}
          value={calendarId === TYPE_START ? startDate : endDate}
          onChange={(id, value) => {
            onDateChange(id, value);
            toggleCalendar(null);
          }}
        />
      )}
    </Card>
  );
};

const Info = ({ title, onClick }) => (
  <div className="info">
    <Text> {title}</Text>
    <i className="icon-settings" onClick={onClick} />
  </div>
);

const Date = ({ id, name, value, onChange, onOpenCalendar }) => {
  const formattedValue = value && moment(value).format(DATE_FORMAT);
  return (
    <div className="date-wrapper">
      <Text>{name} </Text>
      <div className="date">
        <Input
          type="text"
          value={formattedValue}
          placeholder={DATE_FORMAT}
          readOnly={true}
        />
        <i className="icon-calendar" onClick={() => onOpenCalendar(id)} />
        <Button
          variant="outlined"
          color="primary"
          onClick={() =>
            onChange(
              id,
              moment().set({ hour: 0, minute: 0, second: 0 }).toDate()
            )
          }
        >
          Today
        </Button>
      </div>
    </div>
  );
};
export default DateSelector;
