import React from 'react'; 

import DateSelector from 'components/DateSelector'; 
import Card from 'components/Card';

const DateCalculator = () => {
    return (
        <div className="main-content">
            <DateSelector /> 
            <Card align="left">
                151 working days
            </Card>
            <Card align="left">
                178 calendar days
            </Card>
            
        </div>
    ); 
} 

export default DateCalculator; 
