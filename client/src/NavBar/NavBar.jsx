import { Link, useLocation } from "react-router-dom"
import "./NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"

const NavBar = () => {
  const location = useLocation()
  const count = useSelector(state => state.merch.merchs.length + state.print.prints.length)

  return (
    <nav className={`Navbar ${location.pathname !== "/" ? "dark" : null} py-3 d-flex position-absolute w-100 justify-content-around align-items-center top-0 start-0`}>
      <Link to={"/"}>Home</Link>
      <Link className={`${location.pathname === "/merch" ? "active" : null}`} to={"/merch"}>Merch</Link>
      <h2>T</h2>
      <Link className={`${location.pathname === "/print" ? "active" : null}`} to={"/print"}>Print</Link>
      <Link className={`${location.pathname === "/our-story" ? "active" : null}`} to={"/our-story"}>Our story</Link>
      <Link className={`${location.pathname === "/cart" ? "active" : null}`} to={"/cart"}><FontAwesomeIcon icon={faCartShopping}/><span className="ShoppingCount">{count}</span></Link>
    </nav>
  )
}

export default NavBar