import React from 'react'

const TaskList = () => {
    const tasks = useSelector((state) => state.task.task);
    const loading = useSelector((state) => state.task.loading);
    const err = useSelector((state) => state.task.console.error);
    if (loading) {
        <p>Loading...</p>
    }
    if (err) {
        <p>There is an Error {err}</p>
    }
    return (
        <div>
            <h2>
                Tasks
            </h2>
        </div>
    )
}

export default TaskList

//18.50