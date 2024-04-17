import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from './../Register/Register';
import CardDetails from "../Home/CardDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../ErrorPage/ErrorPage";
import UserProfile from "../UserProfile/UserProfile";
import UpdateProfile from "../UpdateProfile/UpdateProfile";





const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/login',
            element:<Login></Login>,
        },
        {
            path:'/register',
            element:<Register></Register>,
        },
        {
            path:'/userProfile',
            element:<PrivateRoute>
              <UserProfile></UserProfile>
            </PrivateRoute>,
        },
        {
            path:'/updateProfile',
            element:<PrivateRoute>
              <UpdateProfile></UpdateProfile>
            </PrivateRoute>,
        },
        {
            path:"/cardDetails/:id",
            element:<PrivateRoute>
              <CardDetails></CardDetails>
            </PrivateRoute>,
            loader:()=>fetch('/data.json')
        },
        
      ]
    },
  ]);
  export default router