import React from 'react';
import classes from './CardTitle.module.scss';
import Typography from './Typography';

function getPageURL(){
    if (window.location.href.split('/').pop() === 'login') 
    {
        return <Typography title="sports exchange" />
    }
    else {
        return <Typography title="signup" />
    }
}

const CardTitle = (props) => (
    <div className={classes.CardTitle}>
        {getPageURL()}
    </div>
);
export default CardTitle;