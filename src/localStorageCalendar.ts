import { Events, Record, Status, Tag } from "./models";
import { StorageCalendar } from "./crud";

export class LocalStorageCalendar implements StorageCalendar {
  storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }
  async setEvents(events: Events) {
    const key: string = events.date.toString();
    const getResult = (el: Events) => el;
    const records = this.getEvents(key)
      .then((result) => getResult(result))
      .catch(() => null);
    if (records === null) {
      this.storage.setItem(key, JSON.stringify(events.records));
    } else {
      const newRecords: Record[] = [...(await records)];
      newRecords.push(...events.records);
      this.storage.setItem(key, JSON.stringify(newRecords));
    }
  }

  getEvents(key: string): Promise<Events | null> {
    return new Promise<Events | null>((resolve, reject) => {
      const value = async () => this.storage.getItem(key);
      if (value !== undefined) {
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
}
