import React from "react";

import Card from 'components/Card'; 
import Text from 'components/Text'; 
// import Button from 'components/Button'; 
import Button from '@material-ui/core/Button';  

import Calendar from 'react-calendar'; 

const DateSelector = ({startDate, endDate}) => {
  return (
    <Card className="date-selector"> 
        <Date name="Start Date" value={startDate} onChange={() => {}}/> 
        <Date name="End Date" value={endDate} onChange={() => {}}/>
        <Button variant="contained" color="primary"> Calculate </Button>
    </Card>
  );
}; 

const Date = ({name, value, onChange}) => (
      <div className="date-wrapper"> 
        <Text>{name} </Text> 
        {/* <Calendar 
          value={value} 
          locale="en-US"
          minDetail={'month'}
          showNeighboringMonth={false}
          onChange={() => onChange()}
        /> */} 
        <input type="text" value={value} placeholder="YYYY/MM/DD" />
        <i className="icon-calendar"/>
      </div> 
)

export default DateSelector;
