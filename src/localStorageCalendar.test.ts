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
  beforeAll(() => {
    Object.defineProperty(window, "localStorage", { value: localStorageMock });
  });

  beforeEach(() => {
    window.localStorage.clear();
  });

  it("test add data in localStorage", async () => {
    const storage = new LocalStorageCalendar();
    const currantDate = new Date(2025, 2, 14);
    const event1: Events = {
      date: currantDate,
      records: [
        {
          title: "title",
          status: Status.PENDING,
          tags: [
            {
              name: "simple",
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
          title: "title2",
          status: Status.PENDING,
          tags: [
            {
              name: "simple",
            },
          ],
          text: "text",
        },
      ],
    };
    storage.setEvents(event1);
    storage.setEvents(event2);
    let expected: Events | null;
    let expected2: Events | null;
    try {
      expected = await storage.getEvents(currantDate.toISOString());
    } catch {
      expected = null;
    }
    try {
      const date2 = new Date(2024, 2, 14);
      expected2 = await storage.getEvents(date2.toISOString());
    } catch {
      expected2 = null;
    }

    expect(expected).toEqual(event1);
    expect(expected2).toEqual(event2);
  });

  it("test get data in localStorage: empty storage", async () => {
    const storage = new LocalStorageCalendar();
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
    const storage = new LocalStorageCalendar();
    const currantDate = new Date(2025, 2, 14);
    const event: Events = {
      date: currantDate,
      records: [
        {
          title: "title",
          status: Status.PENDING,
          tags: [
            {
              name: "simple",
            },
          ],
          text: "text",
        },
      ],
    };
    storage.setEvents(event);
    let expected: Events | null;
    try {
      const date2 = new Date(2024, 2, 14);
      expected = await storage.getEvents(date2.toISOString());
    } catch {
      expected = null;
    }

    expect(expected).toBeNull();
  });
});
