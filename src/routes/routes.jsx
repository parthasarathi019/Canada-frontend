import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";
import Dashboard from "../layouts/Dashboard";
import Main from "../layouts/Main";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home/Home";
import AdminRoute from "../pages/PrivateRoutes/AdminRoutes/AdminRoute";
import ManageClasses from "../pages/PrivateRoutes/AdminRoutes/ManageClasses";
import DashboardHome from "../pages/PrivateRoutes/DashboardHome";
import PrivateRoute from "../pages/PrivateRoutes/PrivateRoute";
import Work_Permit from "../components/Survices/Work_Permit";
import Visa from "../components/Survices/Visa";
import Application_Stts from "../components/Survices/Application_Stts";
import Lima from "../components/Survices/Lima";
import MaltipleInput from "../components/Survices/MaltipleInput";
import InstructorRoute from "../pages/PrivateRoutes/InstructorRoutes/InstructorRoutes";
import ManagePost from "../pages/PrivateRoutes/InstructorRoutes/ManagePost";
import Changedate from "../pages/PrivateRoutes/AdminRoutes/Changedate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: "/Work_Permit",
        element: <Work_Permit></Work_Permit>
      },
      {
        path: "/Visa",
        element: <Visa></Visa>
      },
      {
        path: "/Application_Stts",
        element: <Application_Stts></Application_Stts>
      },
      {
        path: "/Lima",
        element: <Lima></Lima>
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/MaltipleInput",
        element: <MaltipleInput />,
      },

    ],
  },
  {
    path: "/dashboard",
    errorElement: <NotFoundPage />,
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      // admin routes
      {
        path: "Entry",
        element: (
          <AdminRoute>
            <ManageClasses />
          </AdminRoute>
        ),
      },

      {
        path: "change-date",
        element: (
          <AdminRoute>
            <Changedate />
          </AdminRoute>
        ),
      },
      // modarator routes
      {
        path: "ManagePost",
        element: (
          <InstructorRoute>
            <ManagePost></ManagePost>
          </InstructorRoute>
        ),
      },
    ],
  },
]);
