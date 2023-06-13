import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../Shared/Login/Login";
import Signup from "../Shared/signup/Signup";
import Dashboard from "../Layout/Dashboard";
import Manageduser from "../pages/Dashboard/managedUser/Manageduser";
import AddClass from "../pages/Dashboard/instructor/AddClass";
import ManagedClasses from "../pages/Dashboard/managedUser/ManagedClasses";
import Classes from "../pages/Home/Classes/Classes";
import MyClasses from "../pages/Dashboard/instructor/MyClasses";
import UpdateClass from "../pages/Dashboard/instructor/UpdateClass";
import Selected from "../pages/Dashboard/Student/Selected";
import EnrooledClasses from "../pages/Dashboard/Student/EnrooledClasses";
import Instructor from "../pages/Home/Instructor/Instructor";
import InstructorEnrolledClass from "../pages/Dashboard/instructor/InstructorEnrollClass/InstructorEnrolledClass";
import Allpayment from "../pages/Dashboard/managedUser/Allpayment";

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
          element:<Classes></Classes>
        },
        {
          path:'instructor',
          element:<Instructor></Instructor>
        }
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'selectclass',
          element:<Selected></Selected>
        },
        {
          path:'updateclass/:id',
          element:<UpdateClass></UpdateClass>
        },
        {
          path:'addclass',
          element:<AddClass></AddClass>
        },
        {
          path: 'myclasses',
          element:<MyClasses></MyClasses>
        },
        {
          path:'instructorEnrool',
          element:<InstructorEnrolledClass></InstructorEnrolledClass>
        },
        {
          path:'manageduser',
          element:<Manageduser></Manageduser>
        },
        {
          path:'managedclass',
          element:<ManagedClasses></ManagedClasses>
        },
        {
          path:'enroledclass',
          element:<EnrooledClasses></EnrooledClasses>
        },
        {
          path:'allPaymentmanage',
          element:<Allpayment></Allpayment>
        }
      ]
    }
  ]);