import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { editTask } from '../features/TaskSlice';

const EditTask = ({ handleClose, show, task }) => {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [status, setStatus] = useState(task.status);
    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(editTask({ id: task.id, title, description, status }));
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} size='lg' centered>
            <Modal.Header>
                <Modal.Title>Edit Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="Task Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>
                <Form.Select aria-label="Default select example" value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option>To Do</option>
                    <option value="1">In Progress</option>
                    <option value="2">Completed</option>
                </Form.Select>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={handleEdit}>
                    Update
                </Button>
                <Button variant="outline-dark" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditTask