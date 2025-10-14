
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export type TaskType = {
    id?: string;
    title: string;
    description: string;
    date: string;
    completed: boolean;
    important: boolean;
};


export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
    const res = await axios.get("http://localhost:8080/tasks2");
    return res.data;
});


export const addTask = createAsyncThunk(
    "tasks/addTask",
    async (task: TaskType) => {
        const res = await axios.post("http://localhost:8080/tasks2", task);
        return res.data;
    }
);


export const delTask = createAsyncThunk("tasks/deleteTask", async (id: string | undefined) => {
    await axios.delete(`http://localhost:8080/tasks2/${id}`);
    return id;
});


export const changeCompleted = createAsyncThunk(
    "tasks/toggleCompleted",
    async (task: TaskType) => {
        const updatedTask = { ...task, completed: !task.completed };
        const res = await axios.put(`http://localhost:8080/tasks2/${task.id}`, updatedTask);
        return res.data;
    }
);


export const changeImportant = createAsyncThunk(
    "tasks/toggleImportant",
    async (task: TaskType) => {
        const updatedTask = { ...task, important: !task.important };
        const res = await axios.put(`http://localhost:8080/tasks2/${task.id}`, updatedTask);
        return res.data;
    }
);


const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [] as TaskType[],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.tasks = action.payload;
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.tasks.push(action.payload);
            })
            .addCase(delTask.fulfilled, (state, action) => {
                state.tasks = state.tasks.filter(task => task.id !== action.payload);
            })
            .addCase(changeCompleted.fulfilled, (state, action) => {
                const updated = action.payload;
                const index = state.tasks.findIndex(task => task.id === updated.id);
                if (index !== -1) {
                    state.tasks[index] = updated;
                }
            })
            .addCase(changeImportant.fulfilled, (state, action) => {
                const updated = action.payload;
                const index = state.tasks.findIndex(task => task.id === updated.id);
                if (index !== -1) {
                    state.tasks[index] = updated;
                }
            });
    },
});

export default taskSlice.reducer;