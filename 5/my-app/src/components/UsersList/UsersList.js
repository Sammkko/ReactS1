import React from 'react';

function UsersList({usersList}) {
    return (
        <div>
            <ul>
                {
                    usersList.map(user => <li>{user}</li>)
                }
            </ul>
        </div>
    );
}

export default UsersList;