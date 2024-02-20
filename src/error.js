/*import { useState } from "react";
import * as e from 'express';

const FormSubject = () => {
  const [numberOfSubjects, setNumberOfSubjects] = useState(1);
  const [subjectData, setSubjectData] = useState([]);

  const handleGradeChange = () => {
    setSubjectData({ ...formData, [e.target.id]: e.target.value})
  };

  const handleGradeChafnge = (e, index) => {
    const updatedSubjectData = [...subjectData];
    updatedSubjectData[index] = {
      ...updatedSubjectData[index],
      grade: e.target.value,
    };
    setSubjectData(updatedSubjectData);
  };

  const renderSubjectFields = () => {
    let subjectFields = [];
    for (let i = 0; i < numberOfSubjects; i++) {
      subjectFields.push(
        <form
          key={i}
          className="add-student-result"
          onSubmit={(e) => handleUpdateSubjects(e, i)}
        >
          <label>Subject</label>
          <select defaultValue="none" onChange={handleGradeChange}>
            <option value="none">none</option>
            <option value="math">Mathematics</option>
            <option value="english">English</option>
            <option value="biology">Biology</option>
            <option value="physics">Physics</option>
            <option value="chemistry">Chemistry</option>
            <option value="geography">Geography</option>
          </select>
          <label>Marks</label>
          <input type="text" onChange={handleGradeChange} />
          <label>Grade</label>
          <select id="grade" defaultValue="none" onChange={handleGradeChange}>
            <option value="none">none</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="F">F</option>
          </select>
          "
        </form>
      );
    }

    return subjectFields;
  };

  const handleUpdateSubjects = (e) => {
    e.preventDefault();

    fetch("http://localhost:7000/infos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(subjectData),
    }).then(() => {});
  };

  return (
    <div className="subject">
      <div className="subject-no">
        <label>Number of Subjects:</label>
        <input
          type="number"
          value={numberOfSubjects}
          onChange={(e) => setNumberOfSubjects(parseInt(e.target.value, 10))}
        />
      </div>
      {renderSubjectFields()}
      <button onClick={handleUpdateSubjects}>Update Subjects</button>
    </div>
  );
};

export default FormSubject;
*/
