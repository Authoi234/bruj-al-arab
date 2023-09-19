import React from 'react';
import { Badge, Button, Card, Col } from 'react-bootstrap';
import { FaBed } from "react-icons/fa";
import { ImManWoman } from "react-icons/im";

const Room = ({ room }) => {
    console.log(room);
    return (
        <div>
            <Col>
                <Card>
                    <Card.Header className='h4'><Badge bg="danger">{room.avatar}</Badge> {room.bedType}</Card.Header>
                    <Card.Img variant="top" src={room.imgUrl} />
                    <Card.Body>
                        <Card.Title className='fs-3'>{room.title}</Card.Title>
                        <Card.Text className='h5'>{room.description}</Card.Text>
                    </Card.Body>
                    <Card.Body className='d-flex align-items-center'>
                        <h3 className='px-1'><FaBed></FaBed>:{room.bed}</h3>
                        <h3 className='px-3'><ImManWoman></ImManWoman>:{room.people}</h3>
                        <h3 className='px-1'>$:{room.price}</h3>
                        <Button variant="outline-primary">Book</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Room;