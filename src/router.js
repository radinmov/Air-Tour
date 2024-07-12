import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import {Home} from "./Pages/HomePage"




const routes = createBrowserRouter([
  {
    path: '/',
    element:<Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },

]);



export default function Router() {
  return (
    <RouterProvider router={routes} />
  );
}