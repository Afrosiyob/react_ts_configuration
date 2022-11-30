import { configureStore } from "@reduxjs/toolkit";

import { rootReducer as reducer } from "../reducers/root.reducer";
import rootSaga from "../sagas/root.saga";

import { middleware, sagaMiddleware } from "./middleware/saga.middleware";

export const store = configureStore({
  reducer,
  devTools: true,
  middleware,
});

sagaMiddleware.run(rootSaga);
