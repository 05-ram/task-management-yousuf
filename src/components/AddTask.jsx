import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { addTask } from '../features/TaskSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuid4 } from 'uuid';


const AddTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('To Do');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: uuid4,
            title,
            description,
            status
        }
        dispatch(addTask(newTask))
        setTitle('');
        setDescription('');
        setStatus('To Do')
    }
    return (
        <div className='add__task--form'>
            <h4 className='mb-3 mt-4'>
                Add Task
            </h4>
            <Form onSubmit={handleSubmit}>
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
                <div className="d-grid mt-3">
                    <Button variant="primary" size="md" type='submit'>
                        Add Task
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default AddTask