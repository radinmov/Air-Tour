import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/HomePage";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";




const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
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