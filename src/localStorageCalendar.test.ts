// import { localStorageCalendar } from "./localStorageCalendar";
// import { mockWeather } from "./mock.weather";

// /* global global */
describe.skip("test localStorage", () => {
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

  it.todo("test add data in localStorage");
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
