import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import Calendar from "react-calendar";

import { TYPE_START } from "constants/Types";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const CalendarModal = ({ open, onClose, id, value, onChange }) => {
  const title = id === TYPE_START ? "Start Date" : "End Date";

  return (
    <Dialog
      maxWidth="xs"
      fullWidth={true}
      open={open}
      onClose={() => onClose(null)}
      className="calendar-modal"
    >
      <DialogTitle onClose={() => onClose(null)}>{title} </DialogTitle>
      <DialogContent dividers>
        <Calendar
          value={value}
          locale="en-US"
          style={{width : '350px'}}
          minDetail={"month"}
          showNeighboringMonth={false}
          onChange={(value) => {
            onChange(id, value);
          }}
        />
      </DialogContent>
      {/* <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={() => onSave({ title, date })} color="primary">
          Save
        </Button>
      </DialogActions> */}
    </Dialog>
  );
};

export default CalendarModal;
