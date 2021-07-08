import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={this.props.avatar} alt={this.props.name} />
          </div>
          <div className="flip-card-back">
            <h2>{this.props.name}</h2>
            <p>lorem ipsum habab hjasdfe jlkafdsn hasdfjhaskdfh</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
