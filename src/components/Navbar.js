import { useRef, Link } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";
import logocolorido from "../images/logos/logocolorido.png";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      <div class='navBar'>
        <nav ref={navRef}>
          <Link to="/inicio">Inicio</Link>
          <Link to="/cursos">Cursos</Link>
          <Link to="/blog">Blog</Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>

        <img src={logocolorido} />
        <a href="/#">Iniciar Sessão     ·</a>
        <button className="btnlogin">Login <Link to="/login">Blog</Link></button>
      </div>
    </header>
  );
}

export default Navbar;
