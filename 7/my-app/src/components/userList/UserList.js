import React from 'react';
import {Col, Card, Button} from "react-bootstrap";

function UserList({info}) {
    return (
        <Col md={6} lg={4}>
            <Card style={{ width: '100%', marginBottom:"20px" }}>
                <Card.Body>
                    <Card.Title>{info.name}</Card.Title>
                    <Card.Text>{info.email}</Card.Text>
                    <Card.Text>{info.username}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default UserList;