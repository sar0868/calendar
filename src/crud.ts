type StorageCalendar = {
  setItem(key: string, value: any): void;
  getItem(key: string): string | null;
  deleteItem(key: string): boolean;
};


