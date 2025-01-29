// type Calendar = {
//     date: Date;
//     records: record[];
//   };
  
export type Calendar = Map<Date, DayRecords>

export type DayRecords = {
  timestamp: Date;
  records: record[];
}

export type record = {
  title: string;
  status: string;
  tags: tag[];
  text: string;
};

export type tag = {
  name: string;
};
  