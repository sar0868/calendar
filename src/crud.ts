import { Task, record, tag } from "./task";

// export type StorageCalendar = {
//   setItem(task: Task): void;
//   getItem(key: string): Promise<string | null>;
//   deleteItem(key: string): Promise<boolean>;
//   getTasksByTitle(title: string): Promise<record[]>;
//   getTasksByStatus(status: string): Promise<record[]>;
//   getTasksByDay(day: string): Promise<record[]>;
//   getTasksByTag(tag: string): Promise<record[]>;
// };

export type StorageCalendar = {
  setItem: (task: Task) => void;
  getItem: (key: string) => Promise<string | null>;
  deleteItem: (key: string) => Promise<boolean>;
  getTasksByTitle: (title: string) => Promise<record[]>;
  getTasksByStatus: (status: string) => Promise<record[]>;
  getTasksByDay: (day: string) => Promise<record[]>;
  getTasksByTag: (tag: string) => Promise<record[]>;
};
