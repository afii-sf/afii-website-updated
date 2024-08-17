import Nav from "./Nav";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
    return (
        <>
            <ScrollToTop/>
            <Nav/>
            <section className="v-100 w-100 d-flex flex-coumn justify-content-cente align-items-cener">
                <div className="container-lg intro d-flex align-items-center">
                    <div className="d-block intro-text fs-3">
                        <h1 className="">Get your immigration support in one quiz.</h1>
                        <p className="mt-3 py-2">Our platform creates a personalized list of immigrant resources that are suitable specifically for YOUR case, based on just a couple of quiz answers!<br/>Let's find out how AFII can help you!</p>
                        <Link to="/quizinfo" className="btn btn-lg fs-1 mt-2 desktop">Start Now</Link>
                    </div>
                    <img src="/static/images/checklist.png" alt="img" className="d-block img-fluid"></img>               
                    {/* <img src="https://github.com/Ekene-Azubuko/afii/blob/main/src/images/checklist.png?raw=true" alt="img" className="d-block img-fluid"></img>                */}
                    <Link to="/quizinfo" className="btn btn-lg fs-1 mobile">Start Now</Link>
                 </div>
            </section>
            
            <div className="justify-content-center align-items-center scroll fs-5">
               <p className="pt-3">Scroll for more</p>
               <i class="fa-solid fa-arrow-down d-block ms-2"></i>
            </div>
            <section className="w-100 d-flex flex-column justify-content-center align-items-center mt-4 tip" style={{backgroundColor:"#FFC154"}}>
                <div className="container px-5 steps pb-lg-5 mt-lg-3">
                    <h2 className="p-3">How the Quiz works</h2>
                    <div className="row pt-2">
                        <div className="col-sm-6 col-lg-4 d-flex">
                            <img src="/static/images/question.png" className="d-block"></img>
                            {/* <img src="https://github.com/Ekene-Azubuko/afii/blob/main/src/images/question.png?raw=true" className="d-block"></img> */}
                            <div>
                                <h4 className="">1. Answer the questions.</h4>
                                <p >Share your story anonymously by completing a short, simple quiz.</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 d-flex">
                            <img src="/static/images/result.png" className="d-block"></img>
                            {/* <img src="https://github.com/Ekene-Azubuko/afii/blob/main/src/images/result.png?raw=true" className="d-block"></img> */}
                            <div>
                                <h4>2. Get answers.</h4>
                                <p>The platform analyzes your answers to get a personalized list of resources.</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 d-flex">
                            <img src="/static/images/assistance.png" className="d-block"></img>
                            {/* <img src="https://github.com/Ekene-Azubuko/afii/blob/main/src/images/assistance.png?raw=true" className="d-block"></img> */}
                            <div>
                                <h4>3. Get Assistance.</h4>
                                <p>Contact the recommended entities using the information provided.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-100 d-flex flex-column justify-content-center align-items-center bg-primary-emphasis description">
                <div className="container">
                    <p className="text-center"><strong><Link to={"/about"}>The Association for Immigrant Integration (AFII)</Link></strong> is a non-profit organization dedicated to helping immigrants in the Bay Area integrate smoothly into their new communities. Here, we believe in compassion, equity, and inclusion. Therefore, we provide an online platform that simplifies the support search for immigrants, ensuring equal access to essential resources for all.</p>
                </div>
            </section>
            <section className="w-100 d-flex flex-column justify-content-center align-items-center support">
                <div className="container p-4">
                    <h2 className="mb-3">Support AFII Today!</h2>
                    <div className="row">
                        <div className="col-sm-6">
                            <img src="/static/images/support.png"></img>
                        </div>
                        <div className="col-sm-6 d-flex flex-column">
                            <p className="mb-3">Help us sustain the platform and share the resources to ensure the newcomers settle smoothly into the new communities.</p>
                            <a href="https://www.gofundme.com/f/start-a-nonprofit-organization-to-assist-immigrants" className="btn btn-lg d-block align-items-end justify-content-center " target="_blank">Donate</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
};

export default Home;