import { Component } from "react";

export class ControledInput extends Component {
  state = {
    filter: "",
  };

  handleChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    return <input onChange={this.handleChange} placeholder="filter" value={this.state.filter} />;
  }
}
