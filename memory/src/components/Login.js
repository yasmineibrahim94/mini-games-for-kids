import React, {Component} from "react";
import { Button } from 'semantic-ui-react'

class Login extends Component {
  state = {};

  handleChange = (e) => {
    this.setState({ name: e.target.value});
  };

  handleClick = (e) => {
e.preventDefault();
this.props.name(this.state.name, false);
  };

  render() {
    return (
      <div className="wrapper">
<div className="login">
  <form>
<div className="form-group">

  <label>Nom :</label>
  <input type="name" 
        className="form-control"
        onChange={this.handleChange}
        />
       
</div>
<Button onClick={this.handleClick} className="ui teal button" size='huge'> Jouer !</Button>


  </form>
</div>

      </div>
    );
  }
}
 
export default Login;
