import { server } from "core/mocks/server";

describe("Test for API calls 'Product' module", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  describe("GET data", () => {
    it("should return data", async () => {
      // const result = await http.get(`${CONSTANTS.BASE_URL}/product`);
      // expect(result).toEqual(CONSTANTS.PRODUCT_LIST);
    });

    it("should return single data", async () => {
      // const result = await http.get(
      //   `${CONSTANTS.BASE_URL}/product/${CONSTANTS.PRODUCT_ID}`
      // );
      // const product = CONSTANTS.PRODUCT_LIST.find(
      //   (item) => item.productId === CONSTANTS.PRODUCT_ID
      // );
      // expect(result).toEqual(product);
    });

    it("should return empty data", async () => {
      // const result = await http
      //   .get(`${CONSTANTS.BASE_URL}/product_empty`)
      //   .then((_) => []);
      // expect(result).toEqual([]);
    });

    it("should server error", async () => {
      // const result = await http
      //   .get(`${CONSTANTS.BASE_URL}/product_server_error`)
      //   .catch((e) => e.response.status);
      // expect(result).toEqual(500);
    });

    it("should network error", async () => {
      // const result = await http
      //   .get(`${CONSTANTS.BASE_URL}/product_network_error`)
      //   .catch((e) => e.message);
      // expect(result).toEqual("Network Error");
    });

    it("should auth error", async () => {
      // const result = await http
      //   .get(`${CONSTANTS.BASE_URL}/product_auth_error`)
      //   .catch((e) => e.response.status);
      // expect(result).toEqual(401);
    });
  });
});
