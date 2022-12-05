import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import ErrorPage from "./pages/errorPage";
import Home from "./pages/home";
import "./index.css";
import IssueForms from "./components/IssueForms";
import IssueLandingPage from "./components/IssueLandingPage";
import ViewRequest from "./components/ViewRequest";
import UpdateRequest from "./components/UpdateRequest";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/issue",
    element: <IssueForms />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/landingPage",
    element: <IssueLandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/viewRequest",
    element: <ViewRequest />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/updateRequest",
    element: <UpdateRequest />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
