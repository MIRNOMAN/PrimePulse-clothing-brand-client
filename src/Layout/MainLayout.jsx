import { Outlet } from "react-router-dom"
import Navbar from "../Share/Navbar/Navbar"
import Footer from "../Share/Footer/Footer"


export const MainLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
       <div className="lg:mx-28">
       <Outlet></Outlet>
       </div>
        <Footer></Footer>
    </div>
  )
}
