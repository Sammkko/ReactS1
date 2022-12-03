import React, {Component} from 'react';
import UsersList from "../../components/usersList/UsersList";

class PortfolioPage extends Component {

    constructor(props) {
        super(props);
        this.state = {work: []};
    }

    data = () => {
        this.setState({work: ["Work1", "Work1", "..."]});
    }

    render() {
        return (
            <div className="port">
                <h1>2</h1>
                <button className="portBtn" onClick={this.data}>get</button>
                <UsersList UsersList = {this.state.work} />
            </div>
        );
    }
}

export default PortfolioPage;