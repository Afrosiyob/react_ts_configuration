import React, { ReactElement } from "react";
import { _IReactElement } from "core/interfaces/global.interface";
import { store } from "core/store/settings/toolkit";
import { Provider } from "react-redux";

function ReactReduxProvider({ children }: _IReactElement): ReactElement {
  return <Provider store={store}>{children}</Provider>;
}

export default ReactReduxProvider;
