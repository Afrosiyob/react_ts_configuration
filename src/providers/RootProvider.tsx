import React, { ReactElement, Suspense } from "react";

import * as Providers from "./components";

function RootProvider(): ReactElement {
  return (
    // other provider start
    <Providers.Redux>
      <Providers.Query>
        <Providers.Notification>
          <Suspense fallback={<div> ...loading </div>}>
            <Providers.Router />
          </Suspense>
        </Providers.Notification>
      </Providers.Query>
    </Providers.Redux>
    // other provider end
  );
}

export default RootProvider;
