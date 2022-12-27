import createSagaMiddleware from "@redux-saga/core";
import { configs } from "core/configs/config";

export const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const isDev: boolean | undefined = configs.app.appIsDev;

if (isDev ?? false) {
  const { logger } = require("redux-logger");

  middleware.push(logger);
}

export { middleware };
