import React, { ReactElement, Suspense } from "react";

import ReactNotificationProvider from "./components/ReactNotificationProvider";
import ReactQueryProvider from "./components/ReactQueryProvider";
import ReactReduxProvider from "./components/ReactReduxProvider";
import ReactRouterProvider from "./components/ReactRouterProvider";

function RootProvider(): ReactElement {
  return (
    // other provider start
    <ReactReduxProvider>
      <ReactQueryProvider>
        <ReactNotificationProvider>
          <Suspense fallback={<div> ...loading </div>}>
            <ReactRouterProvider />
          </Suspense>
        </ReactNotificationProvider>
      </ReactQueryProvider>
    </ReactReduxProvider>
    // other provider end
  );
}

export default RootProvider;
