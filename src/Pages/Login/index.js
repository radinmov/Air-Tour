import { Link } from "react-router-dom";
import { useTitle } from "../../componets/Hook/useTitle";
import "./Style.css";
export const Login = () => {
  const title = useTitle("Login");
  return (
    <div className="flex items-center justify-center  h-96 min-h-screen">
      <div className="bg-white bg-opacity-50 p-8 rounded-lg border-2 border-white backdrop-blur-lg h-2/4">
        <p className="text-black font-bold mb-4">Login</p>
        <div className="space-y-4">
          <input
            className="w-full px-4 py-2 border rounded-md bg-inherit text-white "
            placeholder="Email"
          />
          <input
            className="w-full px-4 py-2 border rounded-md bg-inherit text-white "
            placeholder="Password"
            type="password"
          />
        </div>
        <div className="mt-4 flex justify-center">
          <button className="w-2/4 text-xl h-20 py-2 text-black font-bold bg-white  rounded-full ">
            Login
          </button>
        </div>
        <Link
          className="block mt-4 text-center text-indigo-600"
          to={"/Register"}
        >
          Don't have an account? Register
        </Link>
      </div>
    </div>
  );
};
