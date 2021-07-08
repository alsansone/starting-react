import React from "react";

export default function Avatar(props) {
  return (
    <div className="flip-card-front">
      <img src={props.avatar} alt={props.name} />
    </div>
  );
}
