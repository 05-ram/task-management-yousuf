import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    task: [],
    loading: false,
    error: null,
    status: 'All'
}

export const fetchToDo = createAsyncThunk('task/fetchToDo', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const data = await response.json();
    return data.map(task => (
        {
            id: task.id,
            title: task.title,
            description: '',
            status: task.completed ? 'Completed' : 'To Do'
        }
    ))
})

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchToDo.pending, (state) => {
            state.error = null
            state.loading = true
        }).addCase(fetchToDo.fulfilled, (state, action) => {
            state.task = action.payload;
            state.error = false;
        }).addCase(fetchToDo.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default taskSlice.reducer;