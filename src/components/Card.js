import React from "react";
import Avatar from "./Avatar";
import Description from "./Description";

export default function Card(props) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <Avatar avatar={props.avatar} name={props.name} />
        <Description name={props.name} />
      </div>
    </div>
  );
}
