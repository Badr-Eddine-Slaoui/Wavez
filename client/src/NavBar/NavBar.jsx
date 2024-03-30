import { Link, useLocation } from "react-router-dom"
import "./NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping , faLockOpen, faUser } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"
import { useCookies } from "react-cookie"

const NavBar = () => {
  const location = useLocation()
  const count = useSelector(state => state.merch.merchs.length + state.print.prints.length)
  const [token,setToken,removeToken] = useCookies(['token'])

  return (
    <nav className={`Navbar ${(location.pathname !== "/" && location.pathname !== "/work" && location.pathname !== "/merch") ? "dark" : null} py-3 d-flex position-absolute w-100 justify-content-around align-items-center top-0 start-0`}>
      <Link to={"/"}>Home</Link>
      <Link className={`${location.pathname === "/work" ? "active" : null}`} to={"/work"}>Work</Link>
      <Link className={`${location.pathname === "/print" ? "active" : null}`} to={"/print"}>Print</Link>
      <h2 style={{ width:"5%" }}><img className="w-100" src={location.pathname !== "/" && location.pathname !== "/work" && location.pathname !== "/merch" ? "/Images/off logo wavez dark.png" : "/Images/off logo wavez.png"} alt="" /></h2>
      <Link className={`${location.pathname === "/merch" ? "active" : null}`} to={"/merch"}>Merch</Link>
      <Link className={`${location.pathname === "/cart" ? "active" : null} bg-black rounded-pill py-1 px-3 text-white`} to={"/cart"}><FontAwesomeIcon icon={faCartShopping}/><span className="ShoppingCount">{count}</span></Link>
      {
        !token.token ? (<Link className={`${location.pathname === "/auth/signup" || location.pathname === "/auth/login"  ? "active" : null} bg-black rounded-pill py-1 px-3 text-white`} to={`${location.pathname === "/auth/signup" ? "/auth/login" : "/auth/signup"}`}><FontAwesomeIcon icon={faUser}/></Link>)
        : (<Link className={`active bg-black rounded-pill py-1 px-3 text-white`} onClick={()=>removeToken('token',{path:"/"})} to={"/"}><FontAwesomeIcon icon={faLockOpen}/></Link>)
      }
    </nav>
  )
}

export default NavBar