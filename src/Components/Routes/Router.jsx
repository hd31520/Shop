import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
          {
            path: '/',
            element: <Home></Home>
          },
          
        ]
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      }
])