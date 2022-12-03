import React, {useState} from 'react';
import UsersList from "../../components/UsersList/UsersList";

function PortfolioPage() {

    const [users, setUsers] = useState([]);

    const getUsers = () => {
        setUsers(["Work1", "Work2", "Sam", "Jo"]);
    }

    return (
        <div className="portfolioPage">
            <h2>2</h2>
                <button onClick={getUsers}>Get</button>
                <UsersList usersList={users}/>
        </div>
    );
}

export default PortfolioPage;