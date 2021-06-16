import React, { useEffect, useState } from "react";

import { COLOR_BLUE } from "constants/Types";

import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

type ProgressBarProps = {
  value: number;
};
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: "1.5rem",
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: "white",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: COLOR_BLUE,
  },
}))(LinearProgress);

function ProgressBar({ value }: ProgressBarProps) {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= value ? value : prevProgress + 5
      );
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [value]);

  return (
    <div className="progress-bar">
      <BorderLinearProgress variant="determinate" value={progress} />
      <span> {value || 0}%</span>
    </div>
  );
}

export default ProgressBar;
