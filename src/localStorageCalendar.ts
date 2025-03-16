import { Events, Status, Tag } from "./models";
import { StorageCalendar } from "./crud";

export class LocalStorageCalendar implements StorageCalendar {
  storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }
  async setEvents(events: Events) {
    const key: string = events.date.toISOString();
    try {
      await this.storage.setItem(key, JSON.stringify(events.records));
    } catch (e) {
      console.log(e);
    }
  }

  getEvents(key: string): Promise<Events> {
    return new Promise<Events>((resolve, reject) => {
      const value = this.storage.getItem(key);
      if (value !== null) {
        resolve({
          date: new Date(Date.parse(key)),
          records: JSON.parse(value),
        });
      } else {
        reject(null);
      }
    });
  }
  deleteEvents(key: string) {
    this.storage.removeItem(key);
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
