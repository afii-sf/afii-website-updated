import { Link } from "react-router-dom";
import "./home.css";

const Footer = () => {
    return (
        <footer className="w-100 d-flex flex-column justify-content-center align-items-center text-light footer mt-auto" style={{backgroundColor:"#FFC154"}}>
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-sm-6">
                        <Link to={"/about"} className="" ><h4>About Us</h4></Link>
                        {/* <a href="/about" className="" ><h4>About Us</h4></a> */}
                        <Link to={"/explain"} className="p-3"><h4>How It Works</h4></Link>
                        {/* <a href="/explain" className="p-3"><h4>How It Works</h4></a> */}
                    </div>
                    <div className="col-sm-6">
                        <Link to={"/help"} className="text-md-end"><h4>Find Help</h4></Link>
                        {/* <a href="/explain" className="text-md-end"><h4>Find Help</h4></a> */}
                        <Link to={"/faq"} className="p-3 text-md-end"><h4>FAQs</h4></Link>
                        {/* <a href="/faq" className="p-3 text-md-end"><h4>FAQs</h4></a> */}
                    </div>
                </div>
                <div className="col-sm-6 text-center p-3 socials fs-6 m-auto">
                    <a href="https://www.facebook.com/profile.php?id=61560564443239" target="_blank"><i class="fa-brands fa-facebook f-3x p-1"></i></a>
                    <a href="https://www.linkedin.com/company/afii/" target="_blank"><i class="fa-brands fa-linkedin f-2x p-1" target="_blank"></i></a>
                    <a href="https://www.instagram.com/a_for_ii?igsh=dDFuNm1lZ2xwdm1m" target="_blank"><i class="fa-brands fa-instagram f-2x p-1"></i></a><br></br>
                    <a href="mailto:contact.afii.sf@gmail.com" className="fs-5 mt-2">contact.afii.sf@gmail.com</a>
                </div>
                <p className="text-center fs-6" style={{color:"#C56A4B"}}>Association for Immigrant Integration is a 501(c)(3) not-for-profit organization.</p>
            </div>
        </footer>
    );
}

export default Footer;