import {Calendar, DayRecords, record, tag} from "./calendar"


type StorageCalendar = {
  setItem(key: string, value: any): Promise<boolean>;
  getItem(key: string): Promise<string | null>;
  deleteItem(key: string): Promise<boolean>;
  getTasksByTitle(title: string): Promise<record[]>;
  getTasksByStatus(status: string): Promise<record[]>;
  getTasksByDay(day: string): Promise<record[]>;
  getTasksByTag(tag: string): Promise<record[]>;
};


