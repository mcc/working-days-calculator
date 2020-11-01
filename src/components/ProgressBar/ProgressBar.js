import React , {useEffect, useState} from 'react'; 

import {COLOR_BLUE, COLOR_NAVY} from 'constants/Types';

import { withStyles } from '@material-ui/core/styles'; 
import LinearProgress from '@material-ui/core/LinearProgress'; 

const BorderLinearProgress = withStyles((theme) => ({
    root : {
        height : '1.5rem', 
        borderRadius : 5
    }, 
    colorPrimary : {
        backgroundColor : 'white', 
    }, 
    bar : {
        borderRadius : 5, 
        backgroundColor : COLOR_BLUE
    }
}))(LinearProgress); 

const ProgressBar = ({value}) => { 
    const [progress, setProgress] = useState(0); 
    
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= value ? value : prevProgress + 5)); 
        }, 100); 

        return () => {
            clearInterval(timer); 
        }
    }, []);
    
    return (
        <BorderLinearProgress variant="determinate" value={progress} />
    ); 
}

export default ProgressBar; 