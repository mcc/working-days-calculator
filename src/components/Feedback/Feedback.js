import React, { useState } from "react";

import moment from "moment";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";

import { STATUS_SUCCESS, STATUS_LOADING, STATUS_INIT } from "constants/Types";

import * as Icon from "components/Icons/Icons";

const icons = [
  { id: 1, name: "Terrible", icon: Icon.Terrible },
  { id: 2, name: "Bad", icon: Icon.Bad },
  { id: 3, name: "Okay", icon: Icon.Okay },
  { id: 4, name: "Good", icon: Icon.Good },
  { id: 5, name: "Great", icon: Icon.Great },
];

const Feedback = ({ onToggle }) => {
  const [selected, setSelected] = useState(null);
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState(STATUS_INIT);

  const sendFeedback = async () => {
    const url = new URL(
      `https://script.google.com/macros/s/${process.env.REACT_APP_GOOGLE_SHEET_ID}/exec`
    );

    const params = {
      date: moment().format("YYYY-MM-DD HH:mm:ss"),
      rating: selected,
      comment,
    };

    url.search = new URLSearchParams(params);
    setStatus(STATUS_LOADING);

    const request = await fetch(url.toString(), {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => {
        setStatus(STATUS_SUCCESS);
        showMessage(onToggle);
      })
      .catch((error) => console.error(error));

    initData();
  };

  const initData = () => {
    setSelected(null);
    setComment("");
  };

  const showMessage = (callback) => {
    callback();

    const message = document.getElementById("message");
    message.classList.toggle("fade");
    message.style.display = "block";

    setTimeout(() => {
      message.style.display = "none";
      message.classList.toggle("fade");
    }, 3000);
  };

  return (
    <div id="feedback">
      <div className="header">
        <span className="title"> SHARE YOUR FEEDBACK</span>
        <CloseIcon onClick={onToggle} />
      </div>
      <div className="ratings">
        {icons.map((i) => (
          <div
            key={i.id}
            className={`rate ${selected === i.id ? "selected" : ""}`}
            onClick={() => setSelected(i.id)}
          >
            {i.icon}
            <span className="label"> {i.name}</span>
          </div>
        ))}
      </div>
      <div className="comment">
        <textarea
          rows="5"
          placeholder="Leave a Comment ..."
          maxLength="250"
          spellCheck="false"
          autoComplete="false"
          required
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={sendFeedback}
        disabled={
          comment.length === 0 || status === STATUS_LOADING || !selected
        }
      >
        {status === STATUS_LOADING ? "SENDING ..." : "SEND"}
      </Button>
    </div>
  );
};

export default Feedback;
