import { CONSTANTS } from "core/mocks";
import { rest } from "msw";

const handlerLogin = [
  rest.post(`${CONSTANTS.BASE_URL}/login`, async (req, res, ctx) => {
    const { username, password } = await req.json();

    if (username === "qwerty" && password === "123") {
      // Bypass this request, returning an actual response
      // only when the `username` equals to a specific value.

      return await res(
        ctx.json({
          id: "abc-123",
        })
      );

      // return res(redirect('/v2/user', 301))
    }
    return req.passthrough();
  }),
];

export default handlerLogin;
