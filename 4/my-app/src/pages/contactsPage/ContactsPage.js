import React, {Component} from 'react';

class ContactsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {input: ""};
    };

    changeInput = (event) =>{
        this.setState({input: event.target.value})
    }

    addBtn = () => {
        console.log(this.state);
        this.setState({input: ""});
    };

    clearBtn = () => {
        this.setState({input: ""});
    };

    render() {
        return (
            <div className="contacts">
                <h1>3</h1>
                <input type="text"
                       onChange={this.changeInput}
                       value={this.state.input}
                />
                <button onClick={this.addBtn}>Add</button>
                <button onClick={this.clearBtn}>Clear</button>
            </div>
        );
    }
}

export default ContactsPage;