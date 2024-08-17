import { Link } from "react-router-dom";
import "./index.css";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* logo  */}
            <Link className="navbar-brand fs-6" to={"/"} style={{color:"#C56A4B"}}><img src="https://s3-alpha-sig.figma.com/img/e76d/7a48/2f82f69a077e4d874a9a3ee021263566?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a~lgdB3ejQvpTLB3d3-7DT4BooQEpcEr8VvM13hGxwXM2ISeb5X77uv8c-KBSgfMQXpRqSYXB1uMwmTVos4igrORmJ7U6eQD3DIXnRsuuvOVb5wcXHHzyrkxzgLh5MlmCJlbUhaHpj11rLm3H7xcY2MTEbHaxYvQDqOBeksy~fR0vh3n0MV9~B50mGI4JhhfXqQyheYAitdPhugOlC9JMTsLVfJSsoKeFzOthS35iCzTYgPPBppYNvHqUY0w4rZzA-HkqqRk42Kv3zRMiQt-nNpBCAcSqzf0GL7nRZJDjfWJjzFxhF3nuYsYVaM3L70ug5k-4E9yA9r9Y57XkzHQGQ__" alt="AFII" width="30" height="24"></img>afii.us</Link>
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