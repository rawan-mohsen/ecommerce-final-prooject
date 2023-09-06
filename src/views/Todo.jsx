import React, { createRef, useState } from 'react'
import SiteNav from '../layout/SiteNav'
import { Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export default function Todo() {

    const [tasks, setTasks] = useState(["one", "two", "three"]);
    const [task, setTask] = useState("")
    let inputRef = createRef();

    let handleTask = (event) => {
        setTask(event.target.value)
    }

    let addNewTask = () => {
        let newTasks = [...tasks, task]
        setTasks(newTasks)
        inputRef.current.focus()
        setTask("")
    }

    return (
        <div>
            <SiteNav />
            <h2 className='text-center m-4'>Todo</h2>
            <Container className='text-center m-4'>
                <Row>
                    <Col sm={9}>
                        <Form.Control type="text" onChange={handleTask} ref={inputRef} value={task} placeholder="Enter email" />
                    </Col>
                    <Col sm={3}>
                        <Button variant="primary" onClick={addNewTask} type="submit">
                            Submit
                        </Button>
                    </Col>
                    <Col>
                        <ListGroup className='my-4'>
                            {
                                tasks.map((task, index) =>
                                    <ListGroup.Item key={index}>{task}</ListGroup.Item>
                                )
                            }
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
