import React, {Component} from 'react';
import classes from "./aboutUs.module.css";

class AboutUs extends Component {

    constructor(props) {
        super(props);
        this.state = {text: "Text"}
    }

    textHide = () => {
        this.setState({text: ""});
    }

    textView = () => {
        this.setState({text: "Text"});
    }

    render() {
        return (
            <div>
                    <div className={classes.text}>
                        <h2>1</h2>
                        <p>{this.state.text}</p>
                        <button className={classes.button} onClick={this.textHide}>Hide</button>
                        <button className={classes.button} onClick={this.textView}>View</button>
                    </div>
            </div>
        );
    }
}

export default AboutUs;