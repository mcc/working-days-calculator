import React from "react";

import Card from 'components/Card'; 
import Text from 'components/Text'; 
// import Button from 'components/Button'; 
import Button from '@material-ui/core/Button';  



const DateSelector = () => {
  return (
    <Card className="date-selector"> 
        <Date name="Start Date" value="2020/03/20" onChange={() => {}}/> 
        <Date name="End Date" value="2020/03/21" onChange={() => {}}/>
        <Button variant="contained" color="primary"> Calculate </Button>
    </Card>
  );
}; 

const Date = ({name, value, onChange}) => (
      <div className="date-wrapper"> 
        <Text>{name} </Text>
        <div> {value} </div> 
        <div> icon </div>
      </div> 
)

export default DateSelector;
