import { useTitle } from "../../componets/Hook/useTitle"
import "./Style.css"
export const Login = () => {
    const title = useTitle("Login")
    return (
        <div classname="container">
            <div classname="container_inner">
                <p className="text-white font-bolder">Login</p>
                <div classname="int">
                        <input placeholder="Email"  />
                        <input placeholder="password"  />
                </div>
                <div className="btn">
                    <button className="text-black font-bold bg-white">Login</button>
                </div>
            </div>
        </div>
    )
}