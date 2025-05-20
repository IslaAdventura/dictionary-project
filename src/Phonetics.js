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
      setError(true);
      setLoaded(true);
    }
  }

  function handleError(error) {
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

  const validPhonetics = phoneticsData.filter(
    (phonetic) => phonetic.text && phonetic.text.trim() !== ""
  );

  return (
    <div className="Phonetics">
      {validPhonetics.length > 0 ? (
        validPhonetics.map(function (phonetic, index) {
          return (
            <div key={index} className="phonetic-item">
              {phonetic.audio ? (
                <a href={phonetic.audio} target="_blank" rel="noreferrer">
                  🔊{phonetic.text}
                </a>
              ) : (
                <span>🔊{phonetic.text}</span>
              )}
            </div>
          );
        })
      ) : (
        <div className="phonetic-item">
          <a
            href={`https://en.wiktionary.org/wiki/${props.word}#Pronunciation`}
            target="_blank"
            rel="noreferrer"
          >
            🔊
          </a>
        </div>
      )}
    </div>
  );
}
