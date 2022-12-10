import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/errorPage";
import Home from "./pages/home";
import "./index.css";
import LogoHeader from "./components/LogoHeader";
import ViewRequest from "./components/ViewRequest";
import UpdateRequest from "./components/UpdateRequest";
import IssueSuccess from "./pages/IssueSuccess";
import { ErrorContextProvider } from "./services/ErrorContext";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/issueSuccess",
    element: <IssueSuccess />,
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
    <ErrorContextProvider>
    <LogoHeader/>
    <RouterProvider router={router} />
    </ErrorContextProvider>
  </React.StrictMode>
);