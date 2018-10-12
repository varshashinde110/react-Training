import React from 'react';
import classes from './Button.module.scss';

const Button = (props) => (
    <button
        className={[classes.Button, props.btnClassName].join(' ')}
        >{props.value}</button>
);

export default Button;