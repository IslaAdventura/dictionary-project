import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    //console.log(response.data.meanings);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://api.shecodes.io/dictionary/v1/define?word=book&key=dbbf0b0ffte4fa30oaa8d9a8aa2bc032
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=dbbf0b0ffte4fa30oaa8d9a8aa2bc032`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeywordChange}
          autoFocus={true}
          placeholder="Search for a word..."
        />
      </form>
      <Results results={results} />
    </div>
  );
}
