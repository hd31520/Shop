import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import Profile from "../Pages/Dashboard/Profile/Profile";



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
        element: <Dashboard></Dashboard>,
        children:[
          {
            path: 'profile',
            element: <Profile></Profile>
          },
          {
            path: 'additem',
            element: <AddItem></AddItem>
          }
        ]
      }
])