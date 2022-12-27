import { ReactElement } from "react";
import { _IReactElement } from "core/interfaces/interfaces";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

// Create a client
const queryClient = new QueryClient({
  // queryCache: new QueryCache({
  //   onError: () => {},
  // }),
  // mutationCache: new MutationCache({
  //   onError: () => {},
  // }),
});

function ReactQueryProvider({ children }: _IReactElement): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;
