import Nav from "./Nav";
import Footer from "./Footer";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";   
import { createClient } from '@supabase/supabase-js';
import "./home.css";

const Service = () => {
    const supabaseUrl = 'https://jhuoubjorzswmuenkqvc.supabase.co'
    const supabaseKey = import.meta.env.VITE_APIKEY;
    const supabase = createClient(supabaseUrl, supabaseKey);
    const [dbData, setDbData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const totalPages = dbData ? Math.ceil(dbData.length / itemsPerPage) : 0;
    const currentItems = dbData ? dbData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];

    const location = useLocation();
    const queryParams =  new URLSearchParams(location.search);

    switch(queryParams.get('service')) {
        case 'legal':
            var service = 'Legal Services';
            var pic = "/static/images/legal.png"
            break;
        case 'emergency':
            var service = 'Emergency Services';
            var pic = "/static/images/emergency.png"
            break;
        case 'family':
            var service = 'Family';
            var pic = "/static/images/family.png"
            break;
        case 'employment':
            var service = 'Employment Training/Counseling';
            var pic = "/static/images/employment.png"
            break;
        default:
            var service = 'Legal Services';
    };

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
            .from('organizations')
            .select()
            .contains('provided_services', [service])
            if (error) {
                console.log('error', error)
            } else {
                setDbData(data)
                // console.log('data', data)
            }
        }
        fetchData()
    }, [service]);
    // console.log(dbData);

    return (
        <>
        <Nav />
        <div className="container service-header d-flex align-items-center p-2">
            <img src={pic} alt={service} className="service-pic"></img>
            <h1 className="text-start p-3"> {service} </h1>
        </div>
        <section className="w-100 d-flex flex-column justify-content-center align-items-center faq mb-4" style={{backgroundColor:"#FFF4E0", height:"100%"}}>
            <div className="container mobile">
                {currentItems.map((org, index) => (
                    <div key={index} className="service">
                        <a href={org.link} className="p-2 d-block fs-4 link" target="_blank" >{org.name}</a>
                        <div className="py-4 px-2 d-flex flex-row align-items-center justify-content-between mb-3">
                            <img src={org.logo} alt={org.name} style={{width:"10%"}} className="d-block"/>
                            <p className="fs-5">{org.operating_cities[0]} County</p>
                            <Link to={`/info?name=${org.name}`} className="btn btn-warning">More info</Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="container desktop">
                {currentItems.map((org, index) => (
                    <div className="p-4 service d-flex flex-row align-items-center justify-content-between my-3">
                        <img src={org.logo} alt={org.name} style={{width:"10%"}} />
                        <a href={org.link} className="p-2 d-block fs-4 link" target="_blank">{org.name}</a>
                        <p className="fs-5">{org.operating_cities[0]} County</p>
                        <Link to={`/info?name=${org.name}`} className="btn btn-warning">More info</Link>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button
                    className="btn btn-warning"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span className="p-2">Page {currentPage} of {totalPages}</span>
                <button
                    className="btn btn-warning"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </section>
        <Footer/>
        </>
    );
};
export default Service;