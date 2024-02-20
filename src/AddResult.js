import { useState } from "react";
import FormSubject from "./FormSubject";

const AddResult = () => {
  const [formData, setFormData] = useState({
    ename: "",
    serialKey: "",
    regNo: "",
    dob: "",
    result: "excellent",
    gpa: "",
    clas: "jss1",
    institute: "jss1",
    year: "default", // assuming 'default' is the default value
    subjects: [], // initialize subjects as an empty array
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      fetch("http://localhost:7000/infos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).then(() => {});
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubjectChange = (index, field, value) => {
    setFormData((prevData) => {
      const updatedSubjects = [...prevData.subjects];
      updatedSubjects[index] = {
        ...updatedSubjects[index],
        [field]: value,
      };
      return {
        ...prevData,
        subjects: updatedSubjects,
      };
    });
  };

  const handleAddSubject = () => {
    setFormData((prevData) => ({
      ...prevData,
      subjects: [...prevData.subjects, {}],
    }));
  };

  return (
    <div className="add-result">
      <h2>Student Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="add-student-details">
          <label>Name:</label>
          <input type="text" id="ename" onChange={handleChange} />

          <label>Serial Key:</label>
          <input type="text" id="serialKey" onChange={handleChange} />
          <label>Reg. No:</label>
          <input type="text" id="regNo" onChange={handleChange} />
          <label>D.O.B</label>
          <input
            placeholder="dd/mm/yyyy"
            pattern="[0-9]{2}\/[0-9]{2}\/[0-9]{4}"
            title="dd/mm/yyyy"
            required
            type="date"
            id="dob"
            onChange={handleChange}
          />
          <label>Result:</label>
          <select id="result" name="subject" onChange={handleChange}>
            <option value="excellent">Excellent</option>
            <option value="passed">Passed</option>
            <option value="failed">Failed</option>
          </select>
          <label>GPA</label>
          <input type="text" id="gpa" onChange={handleChange} />
          <label>Class</label>
          <select id="clas" onChange={handleChange}>
            <option value="jss1">JSS 1</option>
            <option value="jss2">JSS 2</option>
            <option value="jss3">JSS 3</option>
            <option value="sss1">SSS 1</option>
            <option value="sss2">SSS 2</option>
            <option value="sss3">SSS 3</option>
          </select>
          <label>Institute</label>
          <select id="institute" onChange={handleChange}>
            <option value="jss1">JSS 1</option>
            <option value="jss2">JSS 2</option>
            <option value="jss3">JSS 3</option>
          </select>
          <label>Year</label>
          <select id="year" defaultValue="default" onChange={handleChange}>
            <option value="default">select year</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
        <div className="add-student-result">
          <h2>Student Result</h2>

          {formData.subjects.map((subject, index) => (
            <FormSubject
              key={index}
              index={index}
              subject={subject}
              onChange={handleSubjectChange}
            />
          ))}

          {/* Button to add more subjects */}
          <button type="button" onClick={handleAddSubject}>
            Add Subject
          </button>

          <button>Add Info</button>
          {/* <FormSubject /> */}
        </div>
      </form>
    </div>
  );
};

export default AddResult;
