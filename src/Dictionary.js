import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos.js";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [error, setError] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    if (
      response.data &&
      response.data.meanings &&
      Array.isArray(response.data.meanings)
    ) {
      setResults(response.data);
      setError(null);
    } else {
      setError(
        <p>
          Sorry, the word <span className="errorKeyword">{keyword}</span> does
          not exist in this timeline.
          <br /> Please try a different word.
        </p>
      );
      setResults(null);
    }
  }

  function handleSheCodesImagesResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleError(error) {
    setError(
      <p>
        Sorry, the word <span className="errorKeyword">{keyword}</span> does not
        exist in this timeline.
        <br /> Please try a different word.
      </p>
    );

    setResults(null);
  }

  function handleImageError(error) {
    setPhotos([]);
  }

  function search() {
    if (!keyword || keyword.trim() === "") {
      setError(
        <p>
          ☣️☣️☣️☣️☣️ UH OH YOU BROKE THE ENTIRE APP! ☣️☣️☣️☣️☣️
          <br />
          Just Kidding!
          <br />
          Make sure the search bar is not left BLANK.
        </p>
      );
      setResults(null);
      setPhotos([]);
      return;
    }

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=dbbf0b0ffte4fa30oaa8d9a8aa2bc032`;
    axios.get(apiUrl).then(handleResponse).catch(handleError);

    let sheCodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=dbbf0b0ffte4fa30oaa8d9a8aa2bc032`;
    axios
      .get(sheCodesApiUrl)
      .then(handleSheCodesImagesResponse)
      .catch(handleImageError);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    if (props.defaultKeyword && props.defaultKeyword.trim() !== "") {
      search();
    }
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              value={keyword}
              autoFocus={true}
              placeholder="Search for a word..."
            />
            <button type="submit" className="button">
              search
            </button>
          </form>
          <div className="hint">
            Suggested words: steam, submarine, gear, mechanical, lollygag,
            dirigible, etc.
          </div>
        </section>

        {error && <section className="errorMessage">{error}</section>}

        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
