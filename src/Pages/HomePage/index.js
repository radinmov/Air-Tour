import { Link } from "react-router-dom"
import { useTitle } from "../../componets/Hook/useTitle"
import "./Style.css"
export const Home = () => {
    const title =useTitle("HomePage")
    return (
            <div className="Header">
                <div className="Header_inner flex item-center">
                    <div className="logo">
                        <img className="w-32" alt="componey_logo" src="https://img.freepik.com/premium-vector/airplane-logo-design-simple-airplane-logo_9850-4973.jpg" />
                    </div>
                    <div className="menu">
                        <Link to={"/admin_page_flight"} >plan & book</Link >
                        <Link >Flight schudle </Link >
                        <Link >Manage booking</Link >
                        <Link >discover</Link >
                        <Link >Help</Link >
                    </div>
                    <div className="profile">
                        <img alt="png" src="file:///Users/mov/Downloads/Airtour/media/img/icons8-user-64%20(1).png" />
                    </div>
                </div>
            </div>
    )
}
