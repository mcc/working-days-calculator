import React from "react";
import Card from "components/Card";

const TimeCounter = () => {
  return (
    <Card className="gradient time-counter">
      <TimeCard title={"DAYS"} value="24" />
      <Colon />
      <TimeCard title={"HOURS"} value="06" />
      <Colon />
      <TimeCard title={"MINUTES"} value="22" />
      <Colon />
      <TimeCard title={"SECONDS"} value="59" />
    </Card>
  );
};

const TimeCard = ({ title, value }) => (
  <div className="time-card">
    <div className="time"> {value}</div>
    <div className="type"> {title} </div>
  </div>
);

const Colon = () => (
  <div className="colon">
    <i className="icon-colon" />
  </div>
);

export default TimeCounter;
