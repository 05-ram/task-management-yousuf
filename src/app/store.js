import { configureStore } from "@reduxjs/toolkit";
import TaskSlice from "../features/TaskSlice";

export const store = configureStore({
    reducer: {
        task: TaskSlice
    }
})