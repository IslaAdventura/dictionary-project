import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Phonetics.css";

export default function Phonetics(props) {
  let [phoneticsData, setPhoneticsData] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handlePhoneticResponse(response) {
    setPhoneticsData(response.data[0].phonetics);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${props.word}`;
    axios.get(apiUrl).then(handlePhoneticResponse);
  }, [props.word]);

  if (loaded && phoneticsData && phoneticsData.length > 0) {
    return (
      <div className="Phonetics">
        {phoneticsData.map(function (phonetic, index) {
          return (
            <div key={index}>
              {phonetic.audio && (
                <a href={phonetic.audio} target="_blank" rel="noreferrer">
                  {props.word} 🔊
                </a>
              )}
              <span className="text">{phonetic.text}</span>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
