import { setupWorker } from "msw";

import rootHandler from "./handlers";

export const worker = setupWorker(...rootHandler);
