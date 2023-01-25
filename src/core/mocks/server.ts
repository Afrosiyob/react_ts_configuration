// src/mocks/server.js
import { setupServer } from "msw/node";

import rootHandler from "./handlers";

export const server = setupServer(...rootHandler);
