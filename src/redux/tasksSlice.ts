import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FilterType, Task } from "../types/types";
import {
  addTaskToDB,
  deleteTaskFromDB,
  getTasksFromDB,
  updateTaskInDB,
} from "../db/indexedDb";
import { toast } from "react-toastify";
import {
  decryptTaskListDescription,
  encryptTaskDescription,
} from "../utils/task_utils";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async (filter?: FilterType | undefined) => {
    try {
      const tasks = await getTasksFromDB(filter);
      const decryptedTasks: Task[] = decryptTaskListDescription(tasks);
      return decryptedTasks;
    } catch (error) {
      console.error(error);
      toast.error("Error loading tasks");
      return "Error loading tasks";
    }
  }
);

export const addTask = createAsyncThunk("tasks/addTask", async (task: Task) => {
  try {
    const encryptedTask: Task = encryptTaskDescription(task);
    await addTaskToDB(encryptedTask);
    toast.success("Task added successfully");
    return task;
  } catch (error) {
    console.error(error);
    toast.error("Error Adding Task");
  }
});

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async (task: Task) => {
    try {
      const encryptedTask: Task = encryptTaskDescription(task);
      await updateTaskInDB(encryptedTask);
      toast.success("Task updated successfully");
      return task;
    } catch (error) {
      console.error(error);
      toast.error("Error Adding Task");
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id: number) => {
    try {
      await deleteTaskFromDB(id);
      toast.success("Task deleted successfully");
      return id;
    } catch (error) {
      console.error(error);
      toast.error("Error Deleting Task");
    }
  }
);

interface TasksState {
  tasks: Task[];
  error: string | null;
}

const initialState: TasksState = {
  tasks: [],
  error: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload as Task[];
        state.error = null;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.error = action.error.message || "Error Adding Task";
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload as Task);
        state.error = null;
      })
      .addCase(addTask.rejected, (state, action) => {
        state.error = action.error.message || "Error Adding Task";
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(
          (task) => action.payload && task.id === action.payload.id
        );
        if (index !== -1 && action.payload)
          state.tasks[index] = action.payload as Task;
        state.error = null;
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        state.error = null;
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export default tasksSlice.reducer;
