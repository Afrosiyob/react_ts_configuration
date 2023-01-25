import { CONSTANTS } from "core/mocks";
import { rest } from "msw";

const handlerProduct = [
  rest.get(`${CONSTANTS.BASE_URL}/product`, (req, res, ctx) => {
    return res(ctx.json(CONSTANTS.PRODUCT_LIST));
  }),

  rest.get(`${CONSTANTS.BASE_URL}/product/:id`, (req, res, ctx) => {
    const product = CONSTANTS.PRODUCT_LIST.find(
      (item) => item.productId === req.params.id
    );

    if (product != null) {
      return res(ctx.json(product));
    } else {
      return res(ctx.status(404, "Product not found"));
    }
  }),

  rest.get(`${CONSTANTS.BASE_URL}/product_empty`, (req, res, ctx) => {
    return res(ctx.json([]));
  }),

  rest.get(`${CONSTANTS.BASE_URL}/product_server_error`, (req, res, ctx) => {
    return res(ctx.status(500));
  }),

  rest.get(`${CONSTANTS.BASE_URL}/product_network_error`, (req, _res, _ctx) => {
    return req.passthrough();
  }),

  rest.get(`${CONSTANTS.BASE_URL}/product_auth_error`, (req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.get(`${CONSTANTS.BASE_URL}/product_bad_request`, (req, res, ctx) => {
    return res(ctx.status(400));
  }),
];

export default handlerProduct;
