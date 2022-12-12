import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/errorPage";
import Home from "./pages/home";
import "./index.css";
import LogoHeader from "./components/LogoHeader";
import IssueSuccess from "./pages/IssueSuccess";
import PendingRequest from "./components/PendingRequest";
import CompletedRequest from "./components/CompletedRequest";
import { ErrorContextProvider } from "./services/ErrorContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/issueSuccess/:id",
    element: <IssueSuccess />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pendingRequest/:id",
    element: <PendingRequest />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/completedRequest/:id",
    element: <CompletedRequest />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorContextProvider>
      <LogoHeader />
      <RouterProvider router={router} />
    </ErrorContextProvider>
  </React.StrictMode>
);
