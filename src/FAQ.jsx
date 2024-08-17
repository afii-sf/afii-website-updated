import Nav from "./Nav";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { useState } from "react";
import "./home.css";

const questions = [
    {
        question: "Is AFII a physical organization/institution?",
        answer: "No, AFII is an online platform that serves as a search tool for other non-profit organizations that are mostly physical and located in the Bay Area. AFII is a non-profit organization registered in the State of California."
    },
    {
        question: "How is AFII any different than any other non-profit organization for immigrant support?",
        answer: "AFII does not provide direct support to the immigrants, but it compiles the resources from numerous organizations in the Bay Area that specialize in legal assistance for the immigrants, promoting community building, providing training resources for employment, etc. Our platform facilitates the connection between customers and the organizations only and does not directly provide the immigrants with further assistance."
    },
    {
        question: "Will my information be collected/recorded/how will AFII use my info?",
        answer: "AFII values the privacy of its users and gives them an opportunity to withhold from personal data collection, including name, address, or any other information revealing personal identity. Thus the quiz is made completely anonymous so that the users are comfortable with indicating their status in the US, making sure that the resources presented to them correctly match the needs of the individuals unless the users log in so that the results are stored for future convenience." 
    },
    {
        question: "What if I have concerns that are not addressed by the questions?",
        answer: "In case there are questions that were not addressed in the quiz that you feel would affect the results, please reach out to us through our email contact.afii.sf@gmail.com and we will be in touch to either personally assist you to further filter out the resources and/or to update the quiz promptly to ensure it fits the characteristics of each individual as precisely as possible. AFII is a relatively new platform that is constantly being improved and updated. Therefore, our users’ feedback is very valuable for our growth."
    },
];

const FAQ = () => {
    const [collapse, setCollapse] = useState("None");
    const handleClick = (index) => {
        if (collapse === index) {
            setCollapse("None");
        } else {
            setCollapse(index);
        }
    };

    return (
        <>
            <ScrollToTop/>
            <Nav/>
            <h1 className="text-center p-3">Frequently Asked Questions</h1>
            <p className="text-center p-3">Help us improve. Email at contact.afii.sf@gmail.com for any suggestions or concerns.</p>
            <section className="w-100 d-flex flex-column justify-content-center align-items-center faq" style={{backgroundColor:"#FFF4E0"}}>
                <div className="container">
                    {questions.map((question, index) => (
                        <div className="question py-2" key={index}>
                            <div className="question-header d-flex flex-row justify-content-between align-items-center pt-2" onClick={() => handleClick(index)}>
                                <h4>{question.question}</h4>
                                <i className={`fas fa-2x d-block fa-chevron-down fa-${collapse === index ? "rotate-180" : ""}`}></i>
                            </div>
                            <div className= "question-body" style={collapse === index ? {display:"block"}: {display:"none"}}>
                                <p className="py-3 fs-5 text-start">{question.answer}</p>
                            </div>
                            <hr/>
                        </div>
                    ))}
                </div>
                <div className="container d-flex flex-row align-items-center justify-content-between faq-wording p-3">
                    <h4 className="fs-5 py-2">Help us in our mission.<br/>Bring uncertainty into opportunity!</h4>
                    <a href="https://www.gofundme.com/f/start-a-nonprofit-organization-to-assist-immigrants" className="btn btn-lg btn-warning d-block" target="_blank">Donate</a>
                </div>
            </section>
            <Footer/>
        </>
    );
};
export default FAQ;