import React from "react";

const FormSubject = ({ index, subject, onChange }) => {
  const handleSubjectChange = (field, value) => {
    onChange(index, field, value);
  };

  return (
    <div className="form-subject">
      <label>Subject</label>
      <select
        defaultValue={subject.subject || "none"}
        onChange={(e) => handleSubjectChange("subject", e.target.value)}
      >
        <option value="none">none</option>
        <option value="math">Mathematics</option>
        <option value="english">English</option>
        <option value="biology">Biology</option>
        <option value="physics">Physics</option>
        <option value="chemistry">Chemistry</option>
        <option value="geography">Geography</option>
      </select>

      <label>Marks</label>
      <input
        type="text"
        value={subject.marks || ""}
        onChange={(e) => handleSubjectChange("marks", e.target.value)}
      />

      <label>Grade</label>
      <select
        defaultValue={subject.grade || "none"}
        onChange={(e) => handleSubjectChange("grade", e.target.value)}
      >
        <option value="none">none</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="F">F</option>
      </select>
    </div>
  );
};

export default FormSubject;
