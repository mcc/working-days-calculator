import React, { useEffect, useState } from "react";

import moment from "moment";

import Card from "components/Card";

const TimeCounter = ({ endDate }) => {
  const [timeleft, setTimeleft] = useState({});
  let timer = null;

  useEffect(() => {
    timer = setInterval(() => {
      const end = moment(endDate);
      const now = moment();
      const diff = end.diff(now);

      const seconds = Math.floor((diff / 1000) % 60);
      const minutes = Math.floor(diff / 1000 / 60) % 60;
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      setTimeleft({
        days: isNaN(days) ? "-" : days,
        hours: isNaN(hours) ? "-" : hours,
        minutes: isNaN(minutes) ? "-" : minutes,
        seconds: isNaN(seconds) ? "-" : seconds,
      });
    }, 1000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [endDate]);

  const { days = '-', hours = '-', minutes = '-', seconds = '-' } = timeleft;
  return (
    <Card className="gradient time-counter">
      <TimeCard title={"DAYS"} value={days} />
      <Colon />
      <TimeCard title={"HOURS"} value={hours} />
      <Colon />
      <TimeCard title={"MINUTES"} value={minutes} />
      <Colon />
      <TimeCard title={"SECONDS"} value={seconds} />
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
