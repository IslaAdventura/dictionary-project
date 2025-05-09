import React from "react";

export default function Antonyms(props) {
  if (props.antonyms && props.antonyms.length > 0) {
    return (
      <div className="Antonyms">
        <strong>Antonyms: </strong>
        {props.antonyms.map(function (antonyms, index) {
          return (
            <span key={index}>
              {antonyms}
              {index < props.antonyms.length - 1 ? ", " : ""}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
