import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      <p>
        <strong>Definition: </strong>
        {props.meaning.definition}
      </p>

      <p>
        <strong>Example: </strong>
        {props.meaning.example}
      </p>
      <br />
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
