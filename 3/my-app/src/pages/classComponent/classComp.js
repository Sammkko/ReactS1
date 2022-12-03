import React from 'react';
import classes from "./classComp.module.css";
class ClassComp extends  React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <>
                <ul>
                    <li className={classes.title}>Name: {this.props.name}</li>
                    <li className={classes.text}>Age: {this.props.age}</li>
                </ul>
            </>
        );
    }
}

export default ClassComp;