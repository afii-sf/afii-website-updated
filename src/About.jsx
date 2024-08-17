import "./home.css";
import Nav from "./Nav";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const About = () => {
    return (
        <>
            <ScrollToTop/>
            <Nav/>
            <section className="w-100 d-flex flex-column justify-content-center align-items-center" style={{minHeight:"100%"}}>
                <div className="container p-4 about">
                    <h1 className="text-left">About Us</h1>
                    <p className="fs-5">We assist immigrants to settle in the Bay Area through a website that gathers information about various services from non-profit or government organizations. This way, newcomers can find exactly what they need, such as help and contacts specific to their situation, all in one place.</p>
                    <h4>What we do</h4>
                    <p className="fs-5 mt-4">Hundreds of non-profits in the Bay Area already provide immigrant support. Yet, many immigrants may feel overwhelmed by the range of choices, especially when different organizations offer different services and have varying requirements for their clients. Finding the right match gets even more challenging for those who lack a support network to guide them or do not speak English.</p>
                    <p className="fs-5">We are addressing this problem by asking our users to fill out an anonymous quiz. By its completion, they receive a list of the most relevant resources based on their personal situation and needs. The quiz is available in multiple languages to ensure accessibility to non-English-speaking individuals.</p>
                    <p className="fs-5">Besides taking a quiz, anyone can access our organization's database. It allows users to easily navigate and access information on legal assistance, education, community engagement, and many other services provided by organizations in the Bay Area.</p>
                </div>
            </section>
            <section className="w-100 d-flex flex-column justify-content-center align-items-center breakpoint"></section>
            <section className="w-100 vh-50 d-flex flex-column justify-content-center align-items-center">
                <div className="container p-4">
                    <h4>Mission and Vision</h4>
                    <p className="fs-5 mt-4">Being ourselves a group of international students, we recognize the challenges one faces when arriving in a new environment. Thus, our goal is to ensure that every immigrant is aware and has equitable access to support resources regardless of their status, origin, or language spoken. In collaboration with numerous non-profit organizations specializing in immigrant support, we aim to improve their outreach, thus facilitating the connection between their potential users and the services in a few clicks.</p>
                </div>
            </section>
            <Footer/>
        </>
    )
};

export default About;