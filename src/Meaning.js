import React from "react";
import Synonyms from "./Synonyms.js";
import Antonyms from "./Antonyms.js";

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

      <p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
      <p>
        <Antonyms antonyms={props.meaning.antonyms} />
      </p>
    </div>
  );
}
