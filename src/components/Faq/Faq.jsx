import { Component } from "react";
import data from "../../data/data.json";
import { FaqItem } from "./FaqItem/FaqItem";
import "./style.css";

export class Faq extends Component {
  state = {
    isOpen: false,
  };

  handleOpen = () => {
    this.setState({
      isOpen: true,
    });
  };

  handleClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="accordion">
          <h1>FAQ</h1>
          <button onClick={this.handleOpen} type="button" className="btn" id="expand-all">
            Expand All
          </button>
          <button onClick={this.handleClose} type="button" className="btn" id="collapse-all">
            Collapse All
          </button>
          {data.map(({ id, title, description }) => {
            return (
              <FaqItem
                isOpen={this.state.isOpen}
                key={id}
                title={title}
                description={description}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
