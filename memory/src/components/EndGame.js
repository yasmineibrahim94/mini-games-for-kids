import React, {Component} from "react";
import {messages} from "./messages";
import { Button } from 'semantic-ui-react'


class EndGame extends Component {
  handleClick = () => {
    this.props.newGame(false);
  };
  render() {
    messages.sort(() => Math.random() -0.5);
    return (
      <div className="end-game">
        <div className="message">
        <h2>{messages[0].title}</h2>
        <p>{messages[0].message}</p>
        <Button onClick={this.handleClick}  className="ui teal button" size='huge'>
          Rejouer
        </Button>
      </div>
      </div>
    );
  }
}

export default EndGame;
