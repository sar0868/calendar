import {Task, record, tag} from "./task"
import {StorageCalendar} from "./crud"

export class LocalStorageCalendar implements StorageCalendar{
    storage: Storage;
    constructor(){
        this.storage = window.localStorage
    }

    setItem(task: Task){
        const key: string = task.date.toString();
        var records:record[] = new Array;
        if (this.storage.getItem(key) === undefined){
            records = [task.record];
        } else {
            const newValue = this.storage.getItem(key);
            records = JSON.parse(newValue as string)
            records.push(task.record)
        }
            this.storage.setItem(key, JSON.stringify(records));
    }
    async getItem(key: string): Promise<string | null> {
        return this.storage.getItem(key)
    }
    deleteItem(key: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    getTasksByTitle(title: string): Promise<record[]> {
        throw new Error("Method not implemented.");
    }
    getTasksByStatus(status: string): Promise<record[]> {
        throw new Error("Method not implemented.");
    }
    getTasksByDay(day: string): Promise<record[]> {
        throw new Error("Method not implemented.");
    }
    getTasksByTag(tag: string): Promise<record[]> {
        throw new Error("Method not implemented.");
    }


}