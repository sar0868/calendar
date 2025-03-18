import { Events, Status, Tag } from "./models";
import { StorageCalendar } from "./crud";

export class LocalStorageCalendar implements StorageCalendar {
  storage: Storage;
  readonly length: number;
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

  async getEventsByTitle(title: string): Promise<Events[]> {
    const result: Events[] = [];
    // for (const k in Object.keys(this.storage)) {
    for (let i = 0; i < this.storage.length; i++) {
      const k: string = this.storage.key(i);
      let curEvent: Events;
      try {
        curEvent = await this.getEvents(k);
      } catch {
        continue;
      }
      const tempEvent: Events = {
        date: curEvent.date,
        records: [],
      };
      for (const record of curEvent.records) {
        if (record.title === title) {
          tempEvent.records.push(record);
        }
      }
      if (tempEvent.records.length !== 0) {
        result.push(tempEvent);
      }
    }
    return new Promise<Events[]>((resolve, reject) => {
      if (result.length > 0) {
        resolve(result);
      } else {
        reject(null);
      }
    });
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
