import { useState, useEffect } from "react";

const SearchHome = () => {
  const [infos, setInfos] = useState(null);
  const [searchedName, setSearchedName] = useState("");
  const [foundInfo, setFoundInfo] = useState(null);

  useEffect(() => {
    fetch("http://localhost:7000/infos")
      .then((res) => res.json())
      .then((data) => setInfos(data));
  }, []);

  const handleSearch = () => {
    const found = infos.find((info) => info.ename === searchedName);

    if (found) {
      setFoundInfo(found);
    } else {
      setFoundInfo(null);
    }
  };

  return (
    <div className="home">
      <label>Search by Name:</label>
      <input
        type="text"
        value={searchedName}
        onChange={(e) => setSearchedName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {foundInfo ? (
        <div className="result-output-page">
          <div className="fish">
            <h2>{foundInfo.ename}</h2>

            <div className="result-header">
              <div className="box">
                <label>Serial Key:</label>
                <p>{foundInfo.serialKey}</p>
              </div>
              <div className="box">
                <label>Reg. No:</label>
                <p>{foundInfo.regNo}</p>
              </div>
              <div className="box">
                <label>D.O.B</label>
                <p>{foundInfo.dob}</p>
              </div>
              <div className="box">
                <label>Result:</label>
                <p>{foundInfo.result}</p>
              </div>
              <div className="box">
                <label>GPA</label>
                <p>{foundInfo.gpa}</p>
              </div>
              <div className="box">
                <label>Name</label>
                <p>{foundInfo.ename}</p>
              </div>
              <div className="box">
                <label>Class</label>
                <p>{foundInfo.clas}</p>
              </div>
              <div className="box">
                <label>Institute</label>
                <p>{foundInfo.institute}</p>
              </div>
              <div className="box">
                <label>Year</label>
                <p>{foundInfo.year}</p>
              </div>
            </div>
          </div>

          <div className="result-body">
            <div className="result-box">
              <p className="no">No.</p>
              <p className="subject">Subject</p>
              <p className="marks">Marks</p>
              <p className="grade">Grade</p>
            </div>
            {foundInfo.subjects.map((subject) => (
              <div className="result-box" key={subject.id}>
                <p className="no">No. </p>
                <p className="subject"> {subject.subject} </p>
                <p className="marks">{subject.marks} </p>
                <p className="grade">{subject.grade} </p>
              </div>
            ))}
          </div>

          {/* Add other properties as needed */}
        </div>
      ) : (
        <p>No information found for the entered name.</p>
      )}
    </div>
  );
};

export default SearchHome;
