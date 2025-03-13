// import { localStorageCalendar } from "./localStorageCalendar";
// import { mockWeather } from "./mock.weather";
import { LocalStorageCalendar } from "./localStorageCalendar";
import { Events, Status } from "./models";

// /* global global */
describe("test localStorage", () => {
  let localSt: Storage;

  beforeEach(() => {
    localSt = window.localStorage;
  });

  afterEach(() => {
    window.localStorage = localSt;
  });

  it("test add data in localStorage", () => {
    const storage = new LocalStorageCalendar();
    const currantDate = new Date();
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
    expect(storage.lenght()).toBe(1);
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
    const currantDate = new Date();
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
      expected = await storage.getEvents(currantDate.toISOString());
    } catch {
      expected = null;
    }

    expect(expected).toBe(event);
  });
});
