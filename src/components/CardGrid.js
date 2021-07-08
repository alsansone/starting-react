import React from "react";

import luke from "../images/1.jpg";
import obiwan from "../images/10.jpg";
import anakin from "../images/11.jpg";
import c3po from "../images/2.jpg";
import jabba from "../images/16.jpg";
import chewie from "../images/13.jpg";
import han from "../images/14.jpg";

import Card from "./Card";

export default function CardGrid() {
  return (
    <div className="cards">
      <Card avatar={luke} name="luke skywalker" />
      <Card avatar={obiwan} name="obi-wan kenobi" />
      <Card avatar={anakin} name="anakin skywalker" />
      <Card avatar={c3po} name="c3po" />
      <Card avatar={jabba} name="jabba the hut" />
      <Card avatar={chewie} name="chewbacca" />
      <Card avatar={han} name="han solo" />
    </div>
  );
}
