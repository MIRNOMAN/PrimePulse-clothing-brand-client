import { NavLink } from "react-router-dom"
import logo from "../../Images/logo (2).png"
const Navbar = () => {
  const navlinks = <>
  <li><NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Home
</NavLink></li>
<li><NavLink
  to="/shop"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Shop
</NavLink></li>
<li><NavLink
  to="/about"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  About
</NavLink></li>
  </>
  return (
    <div>
      <div className="navbar bg-purple-400">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
      </ul>
    </div>
    <img className="h-14 md:ml-10" src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu gap-4 font-medium menu-horizontal px-1">
      {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
   <ul>
   <li className="none font-medium text-lg md:mr-8">Login</li>
   </ul>
  </div>
</div>
    </div>
  )
}

export default Navbar