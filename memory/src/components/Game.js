import React, {Component} from "react";
import Images from "./Images";

class Game extends Component {
  render() {
    return (
      <div className="game">
        <Images endGame={this.props.endGame} />
      </div>
    );
  }
}

export default Game;
