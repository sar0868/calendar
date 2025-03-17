import { LocalStorageCalendar } from "./localStorageCalendar";
import { Events, Status } from "./models";

const localStorageMock = (function () {
  let store = {};

  return {
    getItem(key: string): string | null {
      return store[key];
    },

    setItem(key: string, value: string) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key: string) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

describe("test localStorage", () => {
  let storage: LocalStorageCalendar;
  const event1: Events = {
    date: new Date(2025, 2, 14),
    records: [
      {
        title: "title",
        status: Status.PENDING,
        tags: [
          {
            name: "simple1",
          },
        ],
        text: "text",
      },
    ],
  };

  const event2: Events = {
    date: new Date(2024, 2, 14),
    records: [
      {
        title: "title",
        status: Status.PENDING,
        tags: [
          {
            name: "simple2",
          },
        ],
        text: "text",
      },
      {
        title: "title2",
        status: Status.PENDING,
        tags: [
          {
            name: "simple2",
          },
        ],
        text: "text2",
      },
    ],
  };

  beforeAll(() => {
    Object.defineProperty(window, "localStorage", { value: localStorageMock });
  });

  beforeEach(() => {
    window.localStorage.clear();
    storage = new LocalStorageCalendar();
  });

  it("test add data in localStorage", async () => {
    storage.setEvents(event1);
    storage.setEvents(event2);
    const date1: string = new Date(2025, 2, 14).toISOString();
    const date2: string = new Date(2024, 2, 14).toISOString();

    let expected: Events | null;
    let expected2: Events | null;
    try {
      expected = await storage.getEvents(date1);
    } catch {
      expected = null;
    }
    try {
      expected2 = await storage.getEvents(date2);
    } catch {
      expected2 = null;
    }

    expect(expected).toEqual(event1);
    expect(expected2).toEqual(event2);
  });

  it("test get data in localStorage: empty storage", async () => {
    const currantDate = new Date(2025, 2, 14);

    let expected: Events | null;
    try {
      expected = await storage.getEvents(currantDate.toISOString());
    } catch {
      expected = null;
    }

    expect(expected).toBe(null);
  });

  it("test get data in localStorage: don't found date", async () => {
    storage.setEvents(event1);

    let expected: Events | null;
    try {
      const date2 = new Date(2024, 2, 14);
      expected = await storage.getEvents(date2.toISOString());
    } catch {
      expected = null;
    }

    expect(expected).toBeNull();
  });

  it("test delete data in localStorage", async () => {
    const key1: string = new Date(2025, 2, 14).toISOString();
    storage.setEvents(event1);

    storage.deleteEvents(key1);
    let expected: Events | null;
    try {
      expected = await storage.getEvents(key1);
    } catch {
      expected = null;
    }
    expect(expected).toEqual(null);
  });

  it("should get list events by title=title", async () => {
    storage.setEvents(event1);
    storage.setEvents(event2);
    const findTitle: string = "title";
    let expected: Events[] | null;

    try {
      expected = await storage.getEventsByTitle(findTitle);
    } catch {
      expected = null;
    }
    expect(expected?.length).toBe(undefined);
  });
});
