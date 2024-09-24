const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit")

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

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchToDo.pending, (state) => {
            state.error = null
            state.loading = true
        }),
            builder.addCase(fetchToDo.fulfilled, (state, action) => {
                state.task = action.payload;
                state.error = false;
            }),
            builder.addCase(fetchToDo.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export default taskSlice.reducer;