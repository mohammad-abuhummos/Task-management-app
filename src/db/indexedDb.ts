import { openDB } from "idb";
import { FilterType, Task } from "../types/types";

const dbPromise = openDB("tasks-db", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("tasks")) {
      db.createObjectStore("tasks", { keyPath: "id", autoIncrement: true });
    }
  },
});

export const addTaskToDB = async (task: Task) => {
  const db = await dbPromise;
  return db.add("tasks", task);
};

export const getTasksFromDB = async (filter?: FilterType | undefined) => {
  const db = await dbPromise;
  let tasks = await db.getAll("tasks");
  if (filter) {
    if (!!filter.status && filter.status !== "all") {
      tasks = tasks.filter((task: Task) => task.status === filter.status);
    }

    if (!!filter.category && filter.category !== "all") {
      tasks = tasks.filter(
        (task: Task) =>
          !!task.categories && task.categories.includes(filter.category!)
      );
    }
  }
  return tasks;
};

export const updateTaskInDB = async (task: Task) => {
  try {
    const db = await dbPromise;
    return db.put("tasks", task);
  } catch (error) {
    console.error(error);
  }
};

export const deleteTaskFromDB = async (id: number) => {
  const db = await dbPromise;
  return db.delete("tasks", id);
};
