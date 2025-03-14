import { Events, Record, Status, Tag } from "./models";
import { StorageCalendar } from "./crud";

export class LocalStorageCalendar implements StorageCalendar {
  storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }
  setEvents(events: Events) {
    const key: string = events.date.toISOString();
    const getRecords: Record[] = events.records;
    this.storage.setItem(key, JSON.stringify(getRecords));
  }

  getEvents(key: string): Events {
    const value: string = this.storage.getItem(key);
    if (value !== undefined) {
      const result: Events = {
        date: new Date(Date.parse(key)),
        records: JSON.parse(value),
      };
      return result;
    }
    return null;
  }
  deleteEvents(key: string): Promise<boolean> {
    throw new Error("Method not implemented." + key);
  }
  getEventsByTitle(title: string): Promise<Events[]> {
    throw new Error(`Method not implemented.${title}`);
  }
  getEventsByStatus(status: Status): Promise<Events[]> {
    throw new Error(`Method not implemented. ${status}`);
  }
  getEventsByDay(day: string): Promise<Events[]> {
    throw new Error(`Method not implemented. ${day}`);
  }
  getEventsByTag(tag: Tag): Promise<Events[]> {
    throw new Error(`Method not implemented. ${tag}`);
  }
}
