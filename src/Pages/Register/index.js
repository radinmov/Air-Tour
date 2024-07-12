import { Link } from "react-router-dom"

export const Register = () => {
    return (
        <div className="container">
            <div className="container_inner">
                <div className="fist">
                    <input placeholder="FistName" type="text" />
                    <input placeholder="lastName" type="text" />
                </div>
                <div className="secend">
                    <input placeholder="email" type="email" />
                    <input placeholder="phone number "  type="number"/>
                </div>
                <div className="third">
                    <input placeholder="ID number" type="number" />
                    <input placeholder="Birthday" type="text" />
                </div>
                <div className="forths">
                    <input placeholder="password" type="password" />
                    <input placeholder="password again" type="password" />
                </div>
                <div className="button">
                    <button className="bg-white font-bold">
                        Register
                    </button>
                    <Link className="text-white font-bold" to={"/login"}>if you have account LOGIN</Link>
                </div>

            </div>
        </div>
    )
}