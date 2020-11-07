import React from "react";

import moment from "moment";

import { COLOR_BLUE, TYPE_START, TYPE_END } from "constants/Types";

import Card from "components/Card";
import Text from "components/Text";
import Input from 'components/Input'; 
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Calendar from "react-calendar";

const DateSelector = ({
  startDate,
  endDate,
  onDateChange,
  onCalculate,
  onOpenSettings,
}) => {
  const CalculateButton = withStyles({
    root: {
      backgroundColor: COLOR_BLUE,
    },
  })(Button);

  const toggleCalendar = (type) => {
    const calendars = document.getElementsByClassName("react-calendar");
    const [startCalendar, endCalendar] = calendars;

    if (type === TYPE_START) {
      const isHidden = startCalendar.classList.contains("hide");
      if (isHidden) {
        startCalendar.classList.remove("hide");
        endCalendar.classList.add("hide");
      } else {
        startCalendar.classList.add("hide");
      }
    }

    if (type === TYPE_END) {
      const isHidden = endCalendar.classList.contains("hide");

      isHidden
        ? endCalendar.classList.remove("hide")
        : endCalendar.classList.add("hide");
    }
  };

  return (
    <Card className="date-selector">
      <i className="icon-settings" onClick={onOpenSettings} />
      <Date
        id={TYPE_START}
        name="Start Date"
        value={startDate}
        onChange={onDateChange}
        onToggleCalendar={toggleCalendar}
      />
      <Date
        id={TYPE_END}
        name="End Date"
        value={endDate}
        onChange={onDateChange}
        onToggleCalendar={toggleCalendar}
      />
      <CalculateButton
        variant="contained"
        color="primary"
        onClick={onCalculate}
      >
        Calculate
      </CalculateButton>
    </Card>
  );
};

const Date = ({ id, name, value, onChange, onToggleCalendar }) => {
  const formattedValue = value && moment(value).format("YYYY/MM/DD");
  return (
    <div className="date-wrapper">
      <Text>{name} </Text> 
      <Input
        type="text"
        value={formattedValue}
        placeholder="YYYY/MM/DD"
        readOnly={true}
      />
      <i className="icon-calendar" onClick={() => onToggleCalendar(id)} />
      <Button
        variant="outlined"
        color="primary"
        onClick={() =>
          onChange(id, moment().set({ hour: 0, minute: 0, second: 0 }).toDate())
        }
      >
        Today
      </Button>
      <Calendar
        className="hide"
        value={value}
        locale="en-US"
        minDetail={"month"}
        showNeighboringMonth={false}
        onChange={(value) => {
          onChange(id, value);
          onToggleCalendar(id);
        }}
      />
    </div>
  );
};
export default DateSelector;
