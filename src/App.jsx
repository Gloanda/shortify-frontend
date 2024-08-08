import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UrlProvider from "./context";

import AppLayout from "./layouts/AppLayout";

import RedirectLink from "./pages/RedirectLink";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import LinkPage from "./pages/LinkPage";
import Auth from "./pages/Auth";
import RequireAuth from "./components/requireAuth";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/dashboard",
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ),
      },
      {
        path: "/link/:id",
        element: (
          <RequireAuth>
            <LinkPage />
          </RequireAuth>
        ),
      },
      {
        path: "/:id",
        element: <RedirectLink />,
      },
    ],
  },
]);

function App() {
  return (
    <UrlProvider>
      <RouterProvider router={router} />
    </UrlProvider>
  );
}

export default App;
