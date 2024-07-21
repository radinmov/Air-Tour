import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import {Home} from "./Pages/HomePage"
import { Admin_page_flight } from "./Pages/admin_page";




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
  {
    path: '/admin_page_flight',
    element: <Admin_page_flight />
  },

]);



export default function Router() {
  return (
    <RouterProvider router={routes} />
  );
}