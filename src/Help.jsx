import Nav from "./Nav";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import Select from 'react-select';
import { Link } from "react-router-dom";
import { names } from "./Data";
import { useState, useEffect } from "react";
import "./home.css";
const Help = () => { 
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);


    const handleInputChange = (e) => {
      const value = e.target.value;
      setSearchTerm(value);

      if (value) {
        const filteredSuggestions = names.filter(item =>
          item.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
      } else {
        setSuggestions([]);
      }
    };

    const handleSuggestionClick = (suggestion) => {
      setSearchTerm(suggestion);
      setSuggestions([]);
    };

    return (
        <>
        <ScrollToTop />
        <Nav />
        <h1 className="text-center p-3"> Search For Organizations.</h1>
        <p className="text-center"> You may be eligible to receive help from more organizations. <br/> Check it out through our database.</p>
        <div className="search-box">
          <Link to={`/info?name=${searchTerm}`} ><button className="btn-search"><i className="fas fa-search"></i></button></Link>
          <input 
            type="text" 
            className="input-search" 
            placeholder="Type to Search..."
            value={searchTerm}
            onChange={handleInputChange}
            ></input>
            {suggestions.length > 0 && (
              <ul className="suggestions-list">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="suggestion-item"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
        </div>
        {/* <input type="text" placeholder="Search.." className="form-control w-50 m-3"/> */}
        <section className="w-100 d-flex flex-column align-items-center faq mb-4" style={{backgroundColor:"#FFF4E0", height:"100%"}}>
            <div className="container shortcuts">
                <div className="service d-flex flex-column justify-content-between pe-2">
                    <Link to={`/service?service=legal`} className="text-center p-2 mt-2 link">Legal Services</Link>
                    <div className="d-flex flex-row align-items-end justify-content-end">
                        <img src="/static/images/legal.png"></img>
                        <p className="fs-5 text-center m-auto ps-2">Seeking for a lawyer's advice or help with documentation?</p>
                    </div>
                </div>
                <div className="service d-flex flex-column justify-content-between my-3 pe-2">
                    <Link to={`/service?service=emergency`} className="text-center p-2 link">Emergency Assistance</Link>
                    <div className="d-flex flex-row align-items-end justify-content-end">
                        <img src="/static/images/emergency.png"></img>
                        <p className="fs-5 text-center m-auto ps-2">Need emergency housing, food resources or medical help?</p>
                    </div>
                </div>
                <div className="service d-flex flex-column justify-content-between pe-2">
                    <Link to={`/service?service=family`} className="text-center p-2 link">Family Support</Link>
                    <div className="d-flex flex-row align-items-end">
                        <img src="/static/images/family.png"></img>
                        <p className="fs-5 text-center m-auto ps-2">Seeking assistance and support as a family?</p>
                    </div>
                </div>
                <div className="service my-3 d-flex flex-column justify-content-between pe-2">
                    <Link to={`/service?service=employment`} className="text-center p-3 link">Employment Training and Education</Link>
                    <div className="d-flex flex-row align-items-end">
                        <img src="/static/images/employment.png"></img>
                        <p className="fs-5 text-center m-auto ps-2">Wish to receive quality education and qualification to secure a job</p>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    );
}

export default Help;