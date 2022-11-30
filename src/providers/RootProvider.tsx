import React, { ReactElement, Suspense } from "react";

import ReactQueryProvider from "./components/ReactQueryProvider";
import ReactReduxProvider from "./components/ReactReduxProvider";
import ReactRouterProvider from "./components/ReactRouterProvider";

function RootProvider(): ReactElement {
  return (
    // other provider start
    <ReactReduxProvider>
      <ReactQueryProvider>
        <Suspense fallback={<div> ...loading </div>}>
          <ReactRouterProvider />
        </Suspense>
      </ReactQueryProvider>
    </ReactReduxProvider>
    // other provider end
  );
}

export default RootProvider;
