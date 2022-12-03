import React from 'react';


function UsersList({UsersList}) {

    return (
        <div>
            <ul className="userList">
                {
                    UsersList.map((user, index) => <li key={index}>{user}</li>)
                }
            </ul>
        </div>
    );
}

export default UsersList;