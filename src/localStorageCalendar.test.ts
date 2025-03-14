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
      this.lenght++;
    },

    clear() {
      store = {};
    },

    removeItem(key: string) {
      delete store[key];
      this.lenght--;
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

  it("test add data in localStorage", () => {
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
    const expected = storage.getEvents(currantDate.toISOString());
    expect(expected).toEqual(event);
  });

  it("test get data in localStorage: length 0", async () => {
    const storage = new LocalStorageCalendar();
    const currantDate = new Date();

    let expected: Events | null;
    try {
      expected = await storage.getEvents(currantDate.toISOString());
    } catch {
      expected = null;
    }
    expect(expected).toBe(null);
  });

  it("test get data in localStorage", async () => {
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
    const expected = storage.getEvents(currantDate.toISOString());
    expect(expected).toEqual(event);
  });
});
