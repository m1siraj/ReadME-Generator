import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DefaultLayout from "./layouts/Default";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Home from "./pages/Home";

const queryClient = new QueryClient();

const ReactQueryDevtoolsProduction = React.lazy(() =>
  import("@tanstack/react-query-devtools").then((mod) => ({
    default: mod.ReactQueryDevtools,
  }))
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "/about-us",
      //   element: <AboutUs />,
      // },
      // {
      //   path: "/store",
      //   children: [
      //     {
      //       index: true,
      //       element: <Store />,
      //     },
      //     {
      //       path: "/store/:id",
      //       element: <StoreID />,
      //     },
      //   ],
      // },
      // {
      //   path: "/profile",
      //   // loader: profileLoader(queryClient),
      //   children: [
      //     {
      //       index: true,
      //       element: <Profile />,
      //     },
      //     {
      //       path: "/profile/purchased/:id",
      //       element: <ProfileID />,
      //     },
      //   ],
      // },
    ],
  },
]);

export default function App() {
  const [showDevtools, setShowDevtools] = React.useState(false);

  React.useEffect(() => {
    // @ts-ignore
    window.toggleDevtools = () => setShowDevtools((old) => !old);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
      {showDevtools && (
        <React.Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </React.Suspense>
      )}
    </QueryClientProvider>
  );
}
