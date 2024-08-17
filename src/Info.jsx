import Nav from "./Nav";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createClient } from '@supabase/supabase-js';
import "./home.css";

const Info  = () => {
    const supabaseUrl = 'https://jhuoubjorzswmuenkqvc.supabase.co'
    const supabaseKey = import.meta.env.VITE_APIKEY;
    const supabase = createClient(supabaseUrl, supabaseKey);
    const [dbData, setDbData] = useState(null);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const organizationName =  queryParams.get('name');

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('organizations')
                .select()
                .eq('name', organizationName)
            if (error) {
                console.log('error', error)
            } else {
                setDbData(data)
                console.log('data', data)
            }
        }
        fetchData()
    }, [organizationName]);

    return (
        <div>
            <Nav />
            { dbData ? (
            <>
            <section className="d-flex justify-content-sm-between justify-content-lg-around align-items-center info-header">
                <img src={dbData[0].logo} alt="logo" className="logo" />
                <div className="d-flex justify-content-center flex-wrap align-items-start ms-2">
                    <a href={dbData[0].website} target="_blank" rel="noreferrer" className="d-block">{dbData[0].name}</a>
                    <p className="ms-lg-2 p-lg-1">{dbData[0].operating_cities[0]} County</p>
                </div>
            </section>
            <section className="container row info-body">
                <div className="col-sm-6">
                    <h2>About organization</h2>
                    <p>{dbData[0].overview}</p>
                    <h6><strong>Services and programs:</strong></h6>
                    <ul>
                        {dbData[0].programs.map((service, index) => (
                            <li key={index}>{service}</li>
                        ))}
                    </ul>
                    <h6><strong>Language of Services:</strong></h6>
                    <ul>
                        {dbData[0].language.map((language, index) => (
                            <li key={index}>{language}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-sm-6">
                    <h6><strong>Requirements and Fees:</strong></h6>
                    <ul>
                        {dbData[0].requirements.map((fee, index) => (
                            <li key={index}>{fee}</li>
                        ))}
                    </ul>
                    <h6><strong>Other Addresses:</strong></h6>
                    <ul>
                        {dbData[0].address.map((address, index) => (
                            <li key={index}>{address}</li>
                        ))}
                    </ul>
                    <div class="card">
                      <div class="card-body">
                        <h5 className="card-title">Contact information</h5>
                        <p class="card-text">Contact this organization with the information provided below.</p>
                        {dbData[0].link && 
                            <div className="card-text">
                                <i class="fa-solid fa-link d-block mt-1">&nbsp;&nbsp;</i>
                                <a href={dbData[0].link} style={{color:"black"}} target="_blank">Visit Website</a>
                            </div>
                        }
                        {dbData[0].phone_number && 
                            <div className="card-text">
                                <i class="fa-solid fa-phone d-block mt-1">&nbsp;&nbsp;</i>
                                {dbData[0].phone_number[0]}
                            </div>
                        }
                        {dbData[0].email && 
                            <div className="card-text">
                                <i class="fa-solid fa-envelope d-block mt-1">&nbsp;&nbsp;</i>
                                <a href={`mailto:${dbData[0].email[0]}`}>{dbData[0].email[0]}</a>
                            </div>
                        }
                        {dbData[0].address && 
                            <div className="card-text">
                                <i class="fa-solid fa-location-dot d-block mt-1">&nbsp;&nbsp;</i>
                                {dbData[0].address[0]}
                            </div>
                        }
                      </div>
                    </div>
                </div>
            </section>
            </>
            ): "Loading..."}
            <Footer />
        </div>
    );
};
export default Info;