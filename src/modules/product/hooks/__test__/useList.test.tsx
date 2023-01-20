import { http } from "core/services/api";

jest.mock("http");

const mock = jest.spyOn(http, "get");

const data = [
  {
    _id: "63b1ab1f84e2db814af574e5",
    user: "admin",
    title: "swswswswsws",
    description: "swswswswswswswswswsws",
    price: 3,
    productId: "0200e705-dae8-451a-a754-9cdca63f6a3e",
    createdAt: "2023-01-01T15:47:43.362Z",
    updatedAt: "2023-01-01T15:47:43.362Z",
    __v: 0,
  },
  {
    _id: "63b1e8d784e2db814af57501",
    user: "admin",
    title: "huhuhuhuhuuhuhhhh",
    description: "bhbhbh. hbhb. hhbh",
    price: 2,
    productId: "98a33b5e-6d81-4092-9f04-c45722ce010a",
    createdAt: "2023-01-01T20:11:03.239Z",
    updatedAt: "2023-01-12T09:51:49.041Z",
    __v: 0,
  },
];

describe("Test for Module hook 'Product'", () => {
  describe("Fetch data with 'useList'", () => {
    // it("when API call success", () => {});

    // it("when API call fail", () => {});

    it("should return data", async () => {
      mock.mockImplementation(async () => await Promise.resolve(data));

      const result = await http.get("/api/v1/product").then((res) => res);

      expect(result).toEqual(data);
    });

    it("should return empty data", async () => {
      const message = "No data";

      mock.mockImplementation(async () => await Promise.reject(message));

      const result = await http.get("/api/v1/product").catch((e) => e);

      expect(result).toEqual(message);
    });
  });
});
