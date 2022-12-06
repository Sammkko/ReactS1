import React from 'react';
import {Col, Card, Button} from "react-bootstrap";

function UserList({info}) {
    return (
        <Col md={6} lg={4}>
            <Card style={{ width: '100%', marginBottom:"20px" }}>
                <Card.Body>
                    <Card.Title>{info.id}</Card.Title>
                    <Card.Text>{info.title}</Card.Text>
                    <Card.Text>{info.body}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default UserList;