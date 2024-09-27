import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, fetchToDo } from '../features/TaskSlice';
import EditTask from './EditTask';

const TaskList = () => {
    const tasks = useSelector((state) => state.task.task);
    const loading = useSelector((state) => state.task.loading);
    const err = useSelector((state) => state.task.error);
    const [isShow, setIsShow] = useState(false);
    const [currentTask, setCurrentTask] = useState(null)

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

    const handleEdit = (task) => {
        setIsShow(true);
        setCurrentTask(task)
    }

    const handleClose = () => {
        setIsShow(false);
        setCurrentTask(null)
    }
    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }
    return (
        <div className='task-list'>

            <h4 className='mb-3 mt-4'>
                Tasks List
            </h4>
            <ul>
                {
                    tasks.map((task, index) => (
                        <li className='d-flex justify-content-between mb-3 align-items-center list-item' key={index}>
                            <div>
                                <p className='mb-0'><span className='title'>{task.title}</span></p>
                                {task.description && <p>{task.description}</p>}
                                <p className='mb-0'><span className='title'> Status :</span> <i> {task.status}</i></p>
                            </div>
                            <div className='d-flex gap-2'>
                                <Button onClick={() => handleEdit(task)}>Edit</Button>
                                <Button variant='danger' onClick={() => handleDelete(task.id)}>Delete</Button>
                            </div>
                        </li>
                    ))
                }
            </ul>
            {
                currentTask && (
                    <EditTask
                        show={isShow}
                        handleClose={handleClose}
                        task={currentTask}
                    />
                )
            }
        </div>
    )
}

export default TaskList