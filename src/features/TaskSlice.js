const { createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
    task: [],
    loading: false,
    error: null,
    status: 'All'
}

const fetchToDo = createAsyncThunk('task/fetchToDo', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const data = response.json();
    return data.map(task => (
        {
            id: task.id,
            title: task.title,
            description: '',
            status: task.completed ? 'Completed' : 'To Do'
        }
    ))
})

