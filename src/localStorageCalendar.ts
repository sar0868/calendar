import { Events, Record, Status, Tag } from "./models";
import { StorageCalendar } from "./crud";

export class LocalStorageCalendar implements StorageCalendar {
  storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }
  setEvents(events: Events) {
    const key: string = events.date.toISOString();
    let getRecords: Record[];
    this.storage.setItem(key, JSON.stringify(getRecords));
  }

  getEvents(key: string): Promise<Events> {
    return new Promise<Events>((resolve, reject) => {
      // const value = this.storage.getItem(key);
      if (this.storage.getItem(key)) {
        resolve({
          date: new Date(Date.parse(key)),
          records: JSON.parse(this.storage.getItem(key)),
        });
      } else {
        reject(null);
      }
    });
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
  lenght = () => this.storage.length;
}
