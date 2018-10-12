import React from 'react';
import classes from './Splitpane.module.scss';

const SplitPane = (props) => (
    <div className={classes.SplitPane}>{props.data}</div>  
)

export default SplitPane