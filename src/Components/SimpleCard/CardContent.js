import React from 'react';
import classes from './CardContent.module.scss';
import Typography from './Typography';
import Input from '../common/Inputs/Input';
import Button from '../common/Buttons/Button';
import Splitpane from '../common/Splitpane';

class CardTitle extends React.Component{
    render(){
        return (
            <div className={classes.CardContent}>
                <Input name="email" type="email" placeholder="Email" />
                <Input name="password" type="password" placeholder="Password" />
                <Button name="password" btnClassName={classes.Submit} value="Log in" />
                <div className={classes.Wrapper}>
                    <Splitpane data={<Button name="facebook" btnClassName={classes.Facebook} value="Facebook" />} /> 
                    <Splitpane data={<Button name="gplus" btnClassName={classes.Gplus} value="Google+" />} />
                </div>
               
                <div className={classes.Wrapper}>
                    <Splitpane data={<Typography title="Forgot Password?"/>} /> 
                    <Splitpane data={<Typography title="Sign Up Now"/>} /> 
                </div>
            
            </div>
        )
    }
}
export default CardTitle;