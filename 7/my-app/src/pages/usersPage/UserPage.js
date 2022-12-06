import React, {useEffect, useState} from 'react';
import {Container, Row, Spinner, Button} from "react-bootstrap";
import UsersList from "../../components/userList/UserList"

function UserPage(props) {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [update, setUpdate] = useState(false);

    async function getUsers() {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        setUsers(data)
        setLoading(false)
    }

    useEffect(() => {
        getUsers()
    }, [update])

    return (
        <Container>
            <h1>User list</h1>
            <Button variant="warning" onClick={() => setUpdate(!update)}>update</Button>


            <Row>
                {
                    loading === true
                        ?
                        <div className="w-100 h-100 flex align-items-center">
                            <Spinner animation="border" />
                        </div>

                        :
                        users.slice(0, 9).map(user =>
                            <UsersList info={user}/>)
                }
            </Row>

        </Container>
    );
}

export default UserPage;