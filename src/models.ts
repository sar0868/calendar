export type Events = {
  date: Date;
  records: Record[];
};

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
  SKIPPED = "SKIPPED",
}
