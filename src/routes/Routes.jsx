import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from './../Register/Register';
import CardDetails from "../Home/CardDetails";
import PrivateRoute from "./PrivateRoute";





const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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