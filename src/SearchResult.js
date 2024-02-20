import React, { useEffect, useState } from "react";

const SearchResult = (props) => {
    const infos = props.infos
    
 

  const [results, setResult] = useState([
    { studentId: 1, results: [
      { subject: 'Mathematics', mark: '90%', grade: 'A', id: 1 },
      { subject: 'English', mark: '85%', grade: 'B', id: 2 },
      { subject: 'Chemistry', mark: '95%', grade: 'A+', id: 3 },
      // ... other results for student 1
    ] },
    { studentId: 2, results: [
      { subject: 'Mathematics', mark: '88%', grade: 'A-', id: 1 },
      { subject: 'English', mark: '92%', grade: 'A', id: 2 },
      { subject: 'Chemistry', mark: '90%', grade: 'A', id: 3 },
      // ... other results for student 2
    ] },
    { studentId: 3, results: [
        { subject: 'Mathematics', mark: '48%', grade: 'A-', id: 1 },
        { subject: 'English', mark: '92%', grade: 'A', id: 2 },
        { subject: 'Chemistry', mark: '90%', grade: 'A', id: 3 },
        // ... other results for student 2
      ] },
    // ... other students' results
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);

    // Reset search result when the search term changes
    setSearchResult(null);
  };

  const handleSearchButtonClick = () => {
    const foundInfo = infos.find((info) => info.name.toLowerCase() === searchTerm.toLowerCase());

    if (foundInfo) {
      const associatedResults = results.find((result) => result.studentId === foundInfo.id);
      setSearchResult({ ...foundInfo, results: associatedResults.results });
    } else {
      setSearchResult(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button onClick={handleSearchButtonClick}>Search</button>

      {searchResult && (
        <div>
          <h2>Name: {searchResult.name}</h2>
          <p>Serial Key: {searchResult.serialkey}</p>
          <p>Registration Number: {searchResult.regNo}</p>
          <p>Date of Birth: {searchResult.dob}</p>
          <p>Result: {searchResult.result}</p>
          <p>GPA: {searchResult.gpa}</p>
          <p>Class: {searchResult.class}</p>
          <p>Institute: {searchResult.institute}</p>
          <p>Year: {searchResult.year}</p>

          {searchResult.results && (
            <div>
              <h3>Results:</h3>
              <ul>
                {searchResult.results.map((result) => (
                  <li key={result.id}>{result.subject}: {result.mark}, {result.grade}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
