import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../Shared/Login/Login";
import Signup from "../Shared/signup/Signup";
import Dashboard from "../Layout/Dashboard";
import Myclass from "../pages/Dashboard/MyClass/Myclass";
import Manageduser from "../pages/Dashboard/managedUser/Manageduser";
import AddClass from "../pages/Dashboard/instructor/AddClass";
import ManagedClasses from "../pages/Dashboard/managedUser/ManagedClasses";
import Classes from "../pages/Home/Classes/Classes";

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
        },
        {
          path:'classes',
          element:<Classes></Classes>,
          loader: () => fetch('http://localhost:5000/allclasses')
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
        },
        {
          path:'manageduser',
          element:<Manageduser></Manageduser>
        },
        {
          path:'addclass',
          element:<AddClass></AddClass>
        },
        {
          path:'managedclass',
          element:<ManagedClasses></ManagedClasses>
        }
      ]
    }
  ]);