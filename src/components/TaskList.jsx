import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToDo } from '../features/TaskSlice';

const TaskList = () => {
    const tasks = useSelector((state) => state.task.task);
    const loading = useSelector((state) => state.task.loading);
    const err = useSelector((state) => state.task.error);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchToDo())
    }, [dispatch])
    if (loading) {
        <p>Loading...</p>
    }
    if (err) {
        <p>There is an Error {err}</p>
    }
    return (
        <div className='task-list'>
            <h2>
                Tasks
            </h2>
            <ul>
                {
                    tasks.map(task => (
                        <li className='d-flex justify-content-between mb-3 align-items-center list-item'>
                            <div>
                                <p className='mb-0'><span className='title'>{task.title}</span></p>
                                {task.description && <p>{task.description}</p>}
                                <p className='mb-0'><span className='title'> Status :</span> <i> {task.status}</i></p>
                            </div>
                            <div className='d-flex gap-2'>
                                <Button>Edit</Button>
                                <Button variant='danger'>Delete</Button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TaskList

//18.50