import { Link, useLocation } from "react-router-dom";
import { createClient } from '@supabase/supabase-js';
import { useState, useEffect } from "react";
import TallyFormPopup from "./tally";
import { defaultOrg } from "./Data";
import Nav from "./Nav";
import Footer from "./Footer";
import "./index.css";
import ConversionTracking from "./conversion";
const Result = ({ result }) => {
    const supabaseUrl = 'https://jhuoubjorzswmuenkqvc.supabase.co';
    const supabaseKey = import.meta.env.VITE_APIKEY;
    const supabase = createClient(supabaseUrl, supabaseKey);
    const [dbData, setDbData] = useState([]);
    const [expandedIndexes, setExpandedIndexes] = useState([]);

    const toggleExpand = (index) => {
        if (expandedIndexes.includes(index)) {
            setExpandedIndexes(expandedIndexes.filter(i => i !== index));
        } else {
            setExpandedIndexes([...expandedIndexes, index]);
        }
    };
    
    // extract data from URL
    const location = useLocation();
    const queryParams =  new URLSearchParams(location.search);
    const encodedData = queryParams.get('data');

    let queryData = {};

    if (encodedData) {
      try {
        const decodedData = decodeURIComponent(encodedData);
        queryData = JSON.parse(decodedData);
      } catch (e) {
        console.error('Failed to decode data:', e);
      }
    }

    console.log(queryData);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
            .from('organizations')
            .select()
            .contains('language', queryData.language)
            .contains('target_age', [queryData.age])
            .contains('operating_cities', queryData.county)
            .contains('provided_services', queryData.family == "Yes" ? ["Family"] : [])
            .contains('provided_services', queryData.emergency == "Yes" ? ["Emergency Services"] : [])
            .contains('provided_services', queryData.legal == "Yes" ? ["Legal Services"] : [])
            .contains('provided_services', queryData.counseling == "Yes" ? ["Employment Training/Counseling"] : [])
            .contains('provided_services', queryData.tutoring == "Yes" ? ["English Tutoring"] : [])
            .contains('ethnicity', queryData.ethnicity)
            if (error) {
                console.log('error', error)
            } else {
                setDbData(data)
                console.log('data', data)
            }
        }
        fetchData()
    }, []);





    return (
        <div style={{backgroundColor:"#E1EFFF", height:"100%"}}>
            <ConversionTracking />
            <TallyFormPopup />
            <Nav />
                <section className="w-100 d-flex flex-column align-items-center">
                    <h1 className="mt-5" style={{color:"#C56A4B", textAlign:"center"}}>Congratulations! You have completed the quiz</h1>
                    <h2 className="text-center px-2">{dbData.length > 0 ? "Here are resources we think might help you" : "Unfortunately, we have no organization that matches your need but check out the ones below."}</h2>
                    <h1 className="mt-5" style={{color:"#FFC154"}}>Local Organizations</h1>
                        <div className="justify-content-center container test-row mt-1">
                            {dbData.length > 0 ? dbData.map((item, index) => {
                            const isExpanded = expandedIndexes.includes(index);
                            const content = isExpanded ? item.overview : item.overview.substring(0, 100) + '...';
                            return(
                                <div key={index} className="result test-row-block mb-3">
                                    <div className="d-flex align-items-center result-header mb-md-2">
                                        <img src={item.logo} alt={item.name}  />
                                        <h4>{item.name}</h4>
                                    </div>
                                    <p className="p-1">{content} <span className="text-primary" onClick={() => toggleExpand(index)}> {isExpanded ? "Show Less" : "Read More"} </span></p>
                                    {item.phone_number && 
                                        <div>
                                            <i className="fa-solid fa-phone d-block mt-1">&nbsp;&nbsp;</i>
                                            {item.phone_number[0]}
                                        </div>
                                        }
                                    {item.link && 
                                        <div>
                                            <i class="fa-solid fa-globe d-block mt-1">&nbsp;&nbsp;</i>
                                            <a href={item.link} style={{color:"black"}} target="_blank">Visit Website</a>
                                        </div>
                                    }
                                </div>
                            )}) 
                                :  
                            defaultOrg.map((item, index) => {
                                const isExpanded = expandedIndexes.includes(index);
                                const content = isExpanded ? item.overview : item.overview.substring(0, 100) + '...';
                                return(
                                    <div key={index} className="result test-row-block mb-3">
                                        <div className="d-flex align-items-center result-header mb-md-2">
                                            <img src={item.logo} alt={item.name}  />
                                            <h4>{item.name}</h4>
                                        </div>
                                        <p className="p-1">{content} <span className="text-primary" onClick={() => toggleExpand(index)}> {isExpanded ? "Show Less" : "Read More"} </span></p>
                                        {item.phone_number && 
                                            <div>
                                                <i className="fa-solid fa-phone d-block mt-1">&nbsp;&nbsp;</i>
                                                {item.phone_number[0]}
                                            </div>
                                            }
                                        {item.link && 
                                            <div>
                                                <i class="fa-solid fa-globe d-block mt-1">&nbsp;&nbsp;</i>
                                                <a href={item.link} style={{color:"black"}} target="_blank">Visit Website</a>
                                            </div>
                                        }
                                        <div>
                                            <i class="fa-solid fa-circle-info d-block mt-1">&nbsp;&nbsp;</i>
                                            <Link to={`/info?name=${item.name}`} style={{color:"black"}}>More info</Link>
                                        </div>
                                    </div>
                                )
                            }
                            )}
                        </div>
                </section>
                <section className="w-100 d-flex  flex-wrap p-5 p-md-3 expand" style={{backgroundColor:"#ABC7E6", height:"100%"}}>
                    <div className="container d-flex flex-wrap align-items-center justify-content-md-center">
                        <h5 className="pt-md-2">Didn't find what you were looking for? Expand the search.</h5>
                        <Link to={"/help"} className="btn fs-4 ms-md-3">Click Here</Link>
                    </div>
                </section>
            <Footer />
        </div>
    );
}

export default Result;

