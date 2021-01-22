import React, { useState } from "react";

import moment from "moment";
import Calendar from "react-calendar";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import Input from "components/Input";
const SettingsModal = ({ open, settings, onClose, onSave }) => {
  const [date, setDate] = useState(settings ? moment(settings.endDate).toDate() : null);
  const [title, setTitle] = useState(settings ? settings.title : '');
  const [showCalendar, setShowCalendar] = useState(false);

  const handleChangeDate = (value) => {
    setDate(value);
  };

  const handleChange = (type, value) => {
    if (type === "title") setTitle(value);
  };

  const toggleCalendar = () => {
    setShowCalendar((prevState) => !prevState);
  };

  const formattedValue = date && moment(date).format("YYYY/MM/DD");
  return (
    <Dialog
      maxWidth="xs"
      fullWidth={true}
      open={open}
      className="settings-modal christmas-theme"
    >
      <DialogTitle> D-Day Settings</DialogTitle>
      <DialogContent>
        <div className="settings">
          <div className="title"> D-Day Title</div>
          <Input
            type="text"
            value={title || ""}
            onChange={(e) => handleChange("title", e.target.value)}
          />
        </div>
        <div className="settings">
          <div className="title"> End Date</div>
          <Input
            type="text"
            value={formattedValue || ""}
            placeholder="YYYY/MM/DD"
            readOnly={true}
          />
          <i className="icon-calendar" onClick={toggleCalendar} />
        </div>
        {showCalendar && (
          <Calendar
            // id="settings-calendar"
            // className="hide"
            value={date}
            locale="en-US"
            minDetail={"month"}
            showNeighboringMonth={false}
            onChange={handleChangeDate}
            nextLabel = {<i className="icon-caret-right"/>}
            prevLabel = {<i className="icon-caret-right flip"/>}
            next2Label= {<div />}
            prev2Label= {<div />}
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={() => onSave({title,date})} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SettingsModal;