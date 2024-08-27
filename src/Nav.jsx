import { Link } from "react-router-dom";
import "./index.css";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* logo  */}
            <Link className="navbar-brand fs-6" to={"/"} style={{color:"#C56A4B"}}><img src="/static/images/afii_logo.png" alt="AFII" width="30" height="24"></img>afii.us</Link>
            {/* toggle button */}
            <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* sidebar  */}
            <div className="sidebar offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              {/* sidebar header  */}
              <div className="offcanvas-header border-bottom">
                <img src="/static/images/afii_logo.png" alt="AFII" width="30" height="24" className="offcanvas-title" id="offcanvasNavbarLabel"></img>
                <span>afii.us</span>
                {/* <h5 className="offcanvas-title" id="offcanvasNavbarLabel">AFII</h5> */}
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              {/* sidebar body  */}
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-center fs-5 flex-grow-1 pe-3">
                  <li className="nav-item mx-2">
                    <Link className="nav-link" aria-current="page" to={"/"}>HOME</Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link className="nav-link" to={"/about"} >ABOUT US</Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link className="nav-link" to={"/help"}>FIND HELP</Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link className="nav-link" to={"/explain"}>HOW IT WORKS</Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link className="nav-link" to={"/faq"}>FAQs</Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link className="nav-link" to={"/quizinfo"}>QUIZ</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
    );
};

export default Nav;
