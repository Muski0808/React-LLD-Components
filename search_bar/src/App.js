import axios from "axios";
import React, { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchResults = async (searchTerm) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`https://api.agify.io/?name=${searchTerm}`);
      setResults(response.data);
      console.log(response.data);
    } catch (error) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setQuery(e.target.value) ;
    // fetchResults(searchTerm)
  };
  return (
    <div>
      <h1>SearchBar</h1>
      <div>
        <input
          type="text"
          onChange={handleSearch}
          value={query}
          placeholder="Enter to search"
        />
        <button onClick={()=> fetchResults(query)}>Search</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <table>
        <thead>
          <tr >
          <th>Name</th>
          <th>Age</th>
          <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {results.map((obj)=>(
            <tr key={obj.id}>
            <td>{obj.email}</td>
            <td>{obj.name}</td>
            <td>{obj.id}</td>
          </tr>
        
          ))}
          </tbody>
      </table>
      </div>



      
  );
}

export default App;
