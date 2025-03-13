import { Events, Record, Status, Tag } from "./models";
import { StorageCalendar } from "./crud";

export class LocalStorageCalendar implements StorageCalendar {
  storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }
  async setEvents(events: Events) {
    const key: string = events.date.toString();
    // const getResult = (el: Events) => el;
    let getRecords: Record[];
    this.getEvents(key).then((result) => (getRecords = result.records));
    if (getRecords === undefined) {
      this.storage.setItem(key, JSON.stringify(events.records));
    } else {
      getRecords.push(...events.records);
      this.storage.setItem(key, JSON.stringify(getRecords));
    }
  }

  getEvents(key: string): Promise<Events> {
    return new Promise<Events>((resolve, reject) => {
      const value = this.storage.getItem(key);
      if (value !== "null") {
        resolve({
          date: new Date(Date.parse(key)),
          records: JSON.parse(this.storage.getItem(key)),
        });
      } else {
        reject(value);
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
}
