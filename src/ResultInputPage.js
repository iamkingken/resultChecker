import { useState } from "react";

const ResultInputPage = () => {

const [regNo, setRegNo] = useState()
const [serialKey, setSerialKey] = useState()
const [clas, setClas] = useState()
const [exam, setExam] = useState()
const [year, setYear] = useState()

const handleSubmit = (e)=> {
    e.preventDefault();
    const search = { clas, exam, regNo, year, serialKey}
}

    return (  
        <div className="result-input-page">
        <h2>Check Result</h2>
        <form onSubmit={handleSubmit}>
            <label>Class:</label>
            <select value={clas} onChange={(e) => setClas(e.target.value)}>
                <option value="jss1">JSS 1</option>
                <option value="jss2">JSS 2</option>
                <option value="jss3">JSS 3</option>
                <option value="sss1">SSS 1</option>
                <option value="sss2">SSS 2</option>
                <option value="sss3">SSS 3</option>
            </select>
            <label>Exam:</label>
            <select value={exam} onCanPlay={(e) => setExam(e.target.value)}>
                <option value="first">FIRST TERM</option>
                <option value="second">SECOND TERM</option>
                <option value="third">THIRD TERM</option>
            </select>
            <label>Registration No:</label>
            <input 
            type="numeric" value={regNo} onChange={(e) => setRegNo(e.target.value)}/>
            <label>Select Year</label>
            <select value={year} onChange={(e) => setYear(e.target.value)}>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
            </select>
            <label>Serial Key:</label>
            <input 
            type="numeric" value={serialKey} onChange={(e) => setSerialKey(e.target.value)}/>
            <button>View Result</button>

        </form>
        </div>
    );
}
 
export default ResultInputPage;