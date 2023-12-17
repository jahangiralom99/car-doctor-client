import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SIgnUp from "../Pages/SignUp/SIgnUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Order from "../Pages/Order/Order";
import PrivetRoute from "./PrivetRoute";


const router = createBrowserRouter([
    {
      path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element: <SIgnUp></SIgnUp>
            },
            {
                path: "/checkout/:id", 
                element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>,
                loader: ({params})=> fetch(`http://localhost:3000/services/${params.id}`)
            },
            {
                path: "/order",
                element: <PrivetRoute><Order></Order></PrivetRoute>
            }
      ]
    },
]);
  

export default router;