export type Events = {
    date: Date;
    records: Record[];
  };
  
// export type Calendar = Map<Date, DayRecords>

// export type DayRecords = {
//   timestamp: Date;
//   records: record[];
// }

export type Record = {
  title: string;
  status: Status;
  tags: Tag[];
  text: string;
};

export type Tag = {
  name: string;
};

export enum Status {
  PENDING = "PENDING",
  DONE = "DONE",
  SKIPPED = "SKIPPED"
}

  

// const eventsByDate = {
//   '2024-07-22': [{ title: 'Встреча', time: '10:00' }, { title: 'Обед', time: '13:00' }],
//   '2024-07-23': [{ title: 'Совещание', time: '15:00' }]
// };
// localStorage.setItem('eventsByDate', JSON.stringify(eventsByDate));
// const storedEventsByDate = JSON.parse(localStorage.getItem('eventsByDate'));
// console.log(storedEventsByDate);