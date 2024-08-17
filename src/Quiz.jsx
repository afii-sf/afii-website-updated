import Nav from "./Nav";
import Footer from "./Footer";
import Select from 'react-select'
import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const langOptions = [
    { value: 'English', label: 'English' },
    { value: 'Cantonese', label: 'Cantonese' },
    { value: 'Arabic', label: 'Arabic' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'Mandarin', label: 'Mandarin' },
    { value: 'Tagalog', label: 'Tagalog' },
    { value: 'Korean', label: 'Korean' },
    { value: 'French', label: 'French' },
    { value: 'Vietnamese', label: 'Vietnamese' },
    { value: 'Other', label: 'Other' }
  ];
const priorityOptions = [
    { value: 'Housing', label: 'Housing' },
    { value: 'Food', label: 'Food' },
    { value: 'Health', label: 'Health'}
  ];
const ageOptions = [
    { value: '0-18', label: '0-18' },
    { value: '19-21', label: '19-21' },
    { value: '22+', label: '22+' },
];
const ethnicityOptions = [
    { value: 'Latinx', label: 'Latinx' },
    { value: 'African', label: 'African' },
    { value: 'Arab', label: 'Arab' },
    { value: 'East Asian', label: 'East Asian' },
    { value: 'Pacific Islander', label: 'Pacific Islander' },
    { value: 'Other', label: 'Other' }
]; 
const countyOptions = [
    { value: 'Alameda', label: 'Alameda' },
    { value: 'Contra Costa', label: 'Contra Costa' },
    { value: 'Marin', label: 'Marin' },
    { value: 'Napa', label: 'Napa' },
    { value: 'San Francisco', label: 'San Francisco' },
    { value: 'San Mateo', label: 'San Mateo' },
    { value: 'Santa Clara', label: 'Santa Clara' },
    { value: 'Solano', label: 'Solano' },
    { value: 'Sonoma', label: 'Sonoma' }
];  
const familyOptions = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
];
const emergencyOptions = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
];
const legalOptions = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
];
const counselingOptions = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
];
const tutoringOptions = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
];



const Quiz = () => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [lastQuestion, setLastQuestion] = useState(false);
    const handlePrev = () => {
        if(questionIndex>0){
            setQuestionIndex(questionIndex-1);
        }
        setLastQuestion(false);
    };
    const handleNext = () => {
        if(questionIndex != questions.length-1){
            setQuestionIndex(questionIndex+1);
        } 
        if(questionIndex == questions.length-2){ //check this out later
            setLastQuestion(true);
        }
    };
    // state to be passed to result page
    const [data, setData] = useState({
        age: null,
        language: [],
        ethnicity: [],
        county: [],
        family: null,
        emergency: null,
        legal: null,
        counseling: null,
        tutoring: null
      });

    const handleChangeBinary = (selectedOption, {name}) => {
        console.log('Selected Option:', selectedOption);
        console.log('Name:', name);
        setData({
          ...data,
          [name]: selectedOption ? selectedOption.value : null
        });
    }
  
    const handleChange = (selectedOptions, {name}) => {
      setData({
        ...data,
        [name]: selectedOptions ? selectedOptions.map(option => option.value) : [] 
      });
    };
    //   console.log(data);
    const encodedData = encodeURIComponent(JSON.stringify(data));

    const questions = [
        {
            question: "What ethnicity(ies) do you most identify with? Select all that apply",
            type: "radio",
            options: ethnicityOptions,
            name: "ethnicity"
        },
        {
            question: "What language do you prefer for receiving services?",
            type: "radio",
            options: langOptions,
            name: "language"
        },
        {
            question: "What age range do you fall under?",
            type: "binary",
            options: ageOptions,
            name: "age"
        },
        {
            question: "Are you seeking help as a family?",
            type: "binary",
            options: familyOptions,
            name: "family"
        },
        {
            question: "Do you require immediate emergency assistance, such as housing or food resources?",
            type: "binary",
            options: emergencyOptions,
            name: "emergency"
        },
        {
            question: "Do you require assistance with legal matters (Such as: U-visa, T-visa, deportation counseling, employment)?",
            type: "binary",
            options: legalOptions,
            name: "legal"
        },
        {
            question: "Are you interested in training/counseling related to employment?",
            type: "binary",
            options: counselingOptions,
            name: "counseling"
        },
        {
            question: "Do you require English tutoring?",
            type: "binary",
            options: tutoringOptions,
            name: "tutoring"
        },
        {
            question: "What county/counties is best for you to receive services from?",
            type: "radio",
            options: countyOptions,
            name: "county"
        },
    ]

    return(
        <div style={{backgroundColor:"#E1EFFF"}}>
            <Nav /> 
            <main>
                <section className="w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
                <div className="container questions2 align-items-center justify-content-center">
                    <div className="progress-bar-wrapper">
                        <div className="progress-bar mb-1">
                            <span style={{width: `${(questionIndex+1)/questions.length*100}%`}}></span>
                        </div>
                        <div className="progress-bar-text">
                            <p> Question {questionIndex+1} of {questions.length}</p>
                            <p>{Math.ceil((questionIndex+1)/questions.length*100)}%</p>
                        </div>
                    </div>
                    <div className="question">
                        <h2>{questions[questionIndex].question}</h2>
                        <div className="options">
                            {questions[questionIndex].type === "binary" ? 
                            <Select
                              name={questions[questionIndex].name}
                              placeholder="Select..."
                              className="input"
                              options={questions[questionIndex].options}
                              value={data[questions[questionIndex].name] ? {value: data[questions[questionIndex].name], label: data[questions[questionIndex].name]} : null}
                              onChange={handleChangeBinary}
                            /> : 
                            <Select
                              isMulti
                              name={questions[questionIndex].name}
                              placeholder="Select..."
                              className="input"
                              options={questions[questionIndex].options}
                              value={data[questions[questionIndex].name].map(option => ({value: option, label: option}))}
                              onChange={handleChange}
                            />}
                        </div>
                    </div>
                </div>
                <div className="navigation my-5">
                    {/* <button className="btn back px-3" onClick={handlePrev}>Back</button> */}
                    <button className="btn back px-3" onClick={handlePrev} disabled={questionIndex === 0}>Back</button>
                    <button className="btn btn-warning mx-2 px-3 skip" onClick={handleNext}>Skip</button>
                    {lastQuestion ? (
                        <Link to={`/result?data=${encodedData}`}><button className="btn btn-warning mx-2 px-5 next">Submit</button></Link>
                    ) : (
                        <button 
                        className="btn btn-warning mx-2 px-5 next" 
                        onClick={handleNext} 
                        disabled={
                            !data[questions[questionIndex].name] || 
                            data[questions[questionIndex].name].length === 0} 
                        >
                        Next
                        </button>
                        )}
                    {/* <button className="btn btn-warning mx-2 px-5 next" onClick={handleNext}>{lastQuestion ? "Submit" : "Next"}</button> */}
                </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
};

export default Quiz;

