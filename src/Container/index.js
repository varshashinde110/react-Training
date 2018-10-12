import React from 'react';
import classes from './index.module.scss';
import CardTitle from '../Components/SimpleCard/CardTitle';
import CardContent from '../Components/SimpleCard/CardContent';

class SimpleCard extends React.Component{
    render(){
        return (
            <div className={classes.Card}>
                <CardTitle />
                <CardContent />
           </div>
        )
    }
}
export default SimpleCard;