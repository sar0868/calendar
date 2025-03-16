import { Events, Status, Tag } from "./models";

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
  // storage: Events[]
  setEvents(events: Events): void;
  getEvents(key: string): Promise<Events>;
  deleteEvents(key: string): void;
  getEventsByTitle(title: string): Promise<Events[]>;
  getEventsByStatus(status: Status): Promise<Events[]>;
  getEventsByDay(day: string): Promise<Events[]>;
  getEventsByTag(tag: Tag): Promise<Events[]>;
};
