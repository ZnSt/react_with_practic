import { Component } from 'react';
import { nanoid } from 'nanoid';

export class Form extends Component {
  state = {
    id: null,
    name: '',
    price: '',
  };

  handleFormSubmit = (event) => {
    const { name, price } = this.state;
    event.preventDefault();
    if (name === '' || price === '') {
      alert('Hold On!');
      return;
    }
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleChangeInput = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
      id: nanoid(),
    });
  };

  reset = () => {
    this.setState({
      id: null,
      name: '',
      price: '',
    });
  };

  render() {
    const { name, price } = this.state;
    return (
      <form
        onSubmit={this.handleFormSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
      >
        <label>
          Name
          <input
            type="text"
            placeholder="Name of Product..."
            name="name"
            value={name}
            onChange={this.handleChangeInput}
          />
        </label>

        <label>
          Price
          <input
            type="text"
            placeholder="Price"
            name="price"
            value={price}
            onChange={this.handleChangeInput}
          />
        </label>

        <button type="submit" style={{ width: '100px' }}>
          Add to Bin
        </button>
      </form>
    );
  }
}
