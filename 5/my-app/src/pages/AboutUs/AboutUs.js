import React, {useState} from 'react';

function AboutUs(props) {

    const [text, setText] = useState("text");

    const view = () => {
        setText(text => "text")
    };
    const hided = () => {
        setText("")
    };

    return (
        <div className="aboutUs">
            <h2>1</h2>
            <p>{text}</p>
            <button onClick={view}>View</button>
            <button onClick={hided}>Hide</button>
        </div>
    );
}

export default AboutUs;