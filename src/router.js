import { createBrowserRouter, RouterProvider } from "react-router-dom";
import  { Home } from "./pages/HomePage";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";



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