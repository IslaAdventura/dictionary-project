import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Phonetics.css";

export default function Phonetics(props) {
  let [phoneticsData, setPhoneticsData] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [error, setError] = useState(false);

  function handlePhoneticResponse(response) {
    if (response.data && response.data[0] && response.data[0].phonetics) {
      setPhoneticsData(response.data[0].phonetics);
      setLoaded(true);
      setError(false);
    } else {
      console.log("Unexpected phonetics API response structure", response.data);
      setError(true);
      setLoaded(true);
    }
  }

  function handleError(error) {
    console.log("Phonetics API error:", error);
    setError(true);
    setLoaded(true);
  }

  useEffect(() => {
    if (!props.word) {
      setError(true);
      setLoaded(true);
      return;
    }

    setLoaded(false);
    setError(false);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${props.word}`;
    axios.get(apiUrl).then(handlePhoneticResponse).catch(handleError);
  }, [props.word]);

  if (!loaded) {
    return null;
  }

  if (error || !phoneticsData || phoneticsData.length === 0) {
    return (
      <div className="Phonetics fallback">
        <a
          href={`https://en.wiktionary.org/wiki/${props.word}`}
          target="_blank"
          rel="noreferrer"
        >
          {props.word} 🔊
        </a>
      </div>
    );
  }

  return (
    <div className="Phonetics">
      {phoneticsData.map(function (phonetic, index) {
        if (phonetic.audio || phonetic.text) {
          return (
            <div key={index}>
              {phonetic.audio && (
                <a href={phonetic.audio} target="_blank" rel="noreferrer">
                  {props.word} 🔊
                </a>
              )}
              {phonetic.text && <span className="text">{phonetic.text}</span>}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
