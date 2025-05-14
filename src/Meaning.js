import React from "react";
import Synonyms from "./Synonyms.js";
import Antonyms from "./Antonyms.js";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      <p>
        <div className="definition">
          <strong>Definition: </strong>
          {props.meaning.definition}
        </div>
      </p>

      <p>
        <div className="example">
          <strong>Example: </strong>
          {props.meaning.example}
        </div>
      </p>

      <p>
        <div className="synonyms">
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      </p>
      <p>
        <div className="antonyms">
          <Antonyms antonyms={props.meaning.antonyms} />
        </div>
      </p>
    </div>
  );
}
