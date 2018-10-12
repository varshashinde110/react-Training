import React from 'react';
import classes from './Input.module.scss';

const Input = (props) => (
    <input className={classes.InputFields} type={props.type} placeholder={props.placeholder} name={props.name} />
);
export default Input;