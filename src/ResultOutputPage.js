import { useState } from "react";

const ResultOutputPage = () => {

const [infos, setInfo] = useState([
    {name: 'Kenneth Ekerette', serialkey:'1234567890',
    regNo: 1234567, dob: '2011-02-01', result: 'Passed',
    gpa: '4.32', class:'SSS 1', institute:'Kevon Divine Heritage',
    year:'2023', id:1 }
])

const [results, setResult] = useState([
    {subject: 'Mathematics', mark: '90%', grade: 'A', id:1},
    {subject: 'English', mark: '90%', grade: 'A', id:2},
    {subject: 'Chemistry', mark: '90%', grade: 'A', id:3},
    {subject: 'Biology', mark: '90%', grade: 'A', id:4},
    {subject: 'Futher Math', mark: '90%', grade: 'A', id:5}
])


    return (  
        <div className="result-output-page">
        
        {infos.map((info) => (
            <div className="fish" key={info.id}>
            <h2>{info.name}</h2>
            
            <div className="result-header">    
            <div className="box">
            
                <label>Serial Key:</label>
                    <p>{info.serialkey}</p>
            </div>
            <div className="box">
                <label>Reg. No:</label>
                    <p>{info.regNo}</p>
            </div>
            <div className="box">
                <label>D.O.B</label>
                    <p>{info.dob}</p>
            </div>
            <div className="box">
                <label>Result:</label>
                    <p>{info.result}</p>
            </div>
            <div className="box">
                <label>GPA</label>
                    <p>{info.gpa}</p>
            </div>
            <div className="box">
                <label>Name</label>
                    <p>{info.name}</p>
            </div>
            <div className="box">
                <label>Class</label>
                    <p>{info.class}</p>
            </div>
            <div className="box">
                <label>Institute</label>
                    <p>{info.institute}</p>
            </div>
            <div className="box">
                <label>Year</label>
                    <p>{info.year}</p>
            </div>
           
        </div>
            </div>
        ))}
       
           
            
            <div className="result-body">
                <div className="result-box">
                    <p className="no">No.</p>
                    <p className="subject">Subject</p>
                    <p className="marks">Marks</p>
                    <p className="grade">Grade</p>
                </div>
                {results.map((result) => (
                <div className="result-box" key={result.id}>

                    <p className="no">{result.id}</p>
                    <p className="subject">{result.subject}</p>
                    <p className="marks">{result.mark}</p>
                    <p className="grade">{result.grade}</p>
                </div>
                ))}
               
            </div>
           

         </div>
    );
}
 
export default ResultOutputPage;