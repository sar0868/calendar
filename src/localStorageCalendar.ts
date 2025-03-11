import { Events, Record, Status, Tag } from "./models";
import { StorageCalendar } from "./crud";

export class LocalStorageCalendar implements StorageCalendar {
  storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }
  setEvents(events: Events): void {
    const key: string = events.date.toString()
    const records = this.getEvents(key).then((result) => result)
    .then(val => val)
    .catch(()=> null)
    if ( records === null){
      this.storage.setItem(key, JSON.stringify(events.records))
    } else {
      const rec: Record[] = JSON.parse(records)
      let newRecords = JSON.stringify(records) + JSON.stringify(events.records)
      this.storage.setItem(key, newRecords)
    }
  }

  getEvents(key: string): Promise<Events | null> {
    const value = async ()=> this.storage.getItem(key)
    // const result: Events{
    //   data =  new Date(Date.parse(key)),
    //   records = value.then(val => JSON.parse(val)),
    // }
    return new Promise<Events|null>((resolve, reject) => {
      if(resolve){
        return {
          data: new Date(Date.parse(key)),
          records: JSON.parse(value)
        }
      }
    });




    // const result = new Promise<Events | null>((resolve: Events, reject: null) => {
    //   resolve ({
    //     date: new Date(Date.parse(key)),
    //     records: JSON.parse(this.storage.getItem(key))
    //   });
    //   reject (null);
    // });

    // return result;
    }
  deleteEvents(key: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  getEventsByTitle(title: string): Promise<Events[]> {
    throw new Error("Method not implemented.");
  }
  getEventsByStatus(status: Status): Promise<Events[]> {
    throw new Error("Method not implemented.");
  }
  getEventsByDay(day: string): Promise<Events[]> {
    throw new Error("Method not implemented.");
  }
  getEventsByTag(tag: Tag): Promise<Events[]> {
    throw new Error("Method not implemented.");
  }


  

  // setItem(task: Task) {
  //   const key: string = task.date.toString();
  //   var records: record[] = new Array();
  //   if (this.storage.getItem(key) === undefined) {
  //     records = [task.record];
  //   } else {
  //     const newValue = this.storage.getItem(key);
  //     records = JSON.parse(newValue as string);
  //     records.push(task.record);
  //   }
  //   this.storage.setItem(key, JSON.stringify(records));
  // }
  // async getItem(key: string): Promise<string | null> {
  //   return this.storage.getItem(key);
  // }
  // deleteItem(key: string): Promise<boolean> {
  //   throw new Error("Method not implemented.");
  // }
  // getTasksByTitle(title: string): Promise<record[]> {
  //   throw new Error("Method not implemented.");
  // }
  // getTasksByStatus(status: string): Promise<record[]> {
  //   throw new Error("Method not implemented.");
  // }
  // getTasksByDay(day: string): Promise<record[]> {
  //   throw new Error("Method not implemented.");
  // }
  // getTasksByTag(tag: string): Promise<record[]> {
  //   throw new Error("Method not implemented.");
  // }
}
