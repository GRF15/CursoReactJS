import CartWidget from "./Cart/CartWidget.jsx";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/naturalab-logo-transparent.png";
import logoHover from "../../assets/naturalab-grayscale-transparent.png";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="NaturaLab Logo" className="logo-img color"/>
          <img src={logoHover} alt="NaturaLab Logo Gris" className="logo-img grayscale"/>
        </Link>
      </div>
      <div className="navbar-links-container">
        <ul className="navbar-links">    
          <li><NavLink to="/">Nuestros productos</NavLink></li>
          <li><NavLink to="/category/FrutosSecos">Frutos Secos</NavLink></li>
          <li><NavLink to="/category/Merch">Merch</NavLink></li>
          <li><NavLink to="/category/Milks">Milks</NavLink></li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
}
