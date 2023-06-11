import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../Shared/Login/Login";
import Signup from "../Shared/signup/Signup";
import Dashboard from "../Layout/Dashboard";
import Myclass from "../pages/Dashboard/MyClass/Myclass";

 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'signup',
            element:<Signup></Signup>
        }
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'myclass',
          element:<Myclass></Myclass>
        }
      ]
    }
  ]);