import Nav from "./Nav";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import "./home.css";
const Explain = () => {
    return (
        <>
            <ScrollToTop/>
            <Nav/> 
            <h1 className="text-center p-5">How the Platform Works</h1>
            {/* <section className="d-flex flex-column justify-content-center "> */}
                <div className="text-center explain">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6 p-4 d-flex align-items-center">
                            <img src = "/static/images/quiz.png" alt="img" className="img-fluid"/>
                            <div>
                                <h3 className="p-2">Interactive Quiz</h3>
                                <p className="fs-5 mt-4">You answer a series of questions about the help you need, the language you speak, and your origin</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 p-4 d-flex align-items-center explain-special">
                            <img src="/static/images/recommendation.png" alt="quiz" className="img-fluid"/>
                            <div>
                                <h3 className="p-2">Personalized Recommedations</h3>
                                <p className="fs-5 mt-3">The platform generates a tailored list of local, federal organizations and relevant programs that meet users’ needs</p>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </section> */}
            {/* space */}
            {/* <section className="w-100 d-flex flex-column justify-content-center align-items-center "> */}
                <div className="text-center explain2">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6 p-4 d-flex align-items-center explain2-special">
                            <img src = "/static/images/multilingual.png" alt="img" className="img-fluid"/>
                            <div>
                                <h3 className="p-2">Multilingual Access</h3>
                                <p className="fs-5 mt-3">The platform is available in multiple languages, making it accessible to non-English-speaking newcomers</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 p-4 d-flex align-items-center">
                            <img src="/static/images/ease.png" alt="quiz" className="img-fluid"/>
                            <div>
                                <h3 className="p-2">Ease of Use</h3>
                                <p className="fs-5 mt-3">The platform enables immigrants to easily navigate the questions and get personalized results without confusion</p>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </section> */}
            <Footer/>
        </>
    )
};
export default Explain;