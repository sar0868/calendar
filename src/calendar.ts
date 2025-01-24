type Calendar = {
    date: Date;
    records: record[];
  };
  
  type record = {
    title: string;
    status: string;
    tags: tag[];
    text: string;
  };
  
  type tag = {
    name: string;
  };
  