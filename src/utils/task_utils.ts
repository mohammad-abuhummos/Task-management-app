import { Task } from "../types/types";
import { caesarDecrypt, caesarEncrypt } from "./encrypt_utils";

export const encryptTaskListDescription = (taskList: Task[]): Task[] => {
  return taskList.map((task: Task) => {
    return encryptTaskDescription(task);
  });
};
export const encryptTaskDescription = (task: Task): Task => {
  const Key = import.meta.env.VITE_ENCRYPT_KEY || "default";
  return {
    ...task,
    description: task.description
      ? caesarEncrypt(task.description, Key)
      : task.description,
  };
};
export const decryptTaskListDescription = (taskList: Task[]): Task[] => {
  return taskList.map((task: Task) => {
    return decryptTaskDescription(task);
  });
};
export const decryptTaskDescription = (task: Task): Task => {
  const Key = import.meta.env.VITE_ENCRYPT_KEY || "default";
  return {
    ...task,
    description: task.description
      ? caesarDecrypt(task.description, Key)
      : task.description,
  };
};
