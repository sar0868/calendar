// import { localStorageCalendar } from "./localStorageCalendar";
// import { mockWeather } from "./mock.weather";
import { LocalStorageCalendar } from "./localStorageCalendar";
import { Events, Status, Record } from "./models";

// /* global global */
describe("test localStorage", () => {
  //   let localStorage;

  beforeEach(() => {
    localStorage = window.localStorage;
    global.fetch = jest.fn();
    // () => {
    //   return Promise.resolve({
    //     ok: true,
    //     json: () => Promise.resolve(""),
    //   });
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
    let addedData: Events;
    storage.setEvents(event);
    storage
      .getEvents(currantDate.toISOString())
      .then((result) => (addedData = result))
      .catch((value) => value);
    expect(addedData).toBe(event);
  });
});

// describe("test get weather", () => {
//   let localStorage;
//   beforeEach(() => {
//     localStorage = window.localStorage;
//     global.fetch = jest.fn(() => {
//       return Promise.resolve({
//         ok: true,
//         json: () => Promise.resolve(mockWeather),
//       });
//     });
//   });
//   afterEach(() => {
//     jest.clearAllMocks();
//     window.localStorage = localStorage;
//   });
//   it("should return json", async () => {
//     const result = await getWeather("London");

//     expect(result).toEqual(mockWeather);
//     expect(fetch).toHaveBeenCalledTimes(1);
//   });
// });
