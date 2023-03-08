import { Component } from 'react';
import { List } from 'components/List';
import { Form } from 'components/Form';
import { Filter } from 'components/Filter';

export class FoodList extends Component {
  state = {
    foods: [],
    filter: '',
  };

  handleSubmit = (product) => {
    this.setState((prevState) => ({
      foods: [...prevState.foods, product],
    }));
  };

  onDeleteProduct = (id) => {
    this.setState((prevState) => ({
      foods: prevState.foods.filter((food) => food.id !== id),
    }));
  };

  handleChangeFilter = (event) => {
    this.setState({
      filter: event.target.value,
    });
  };

  componentDidMount() {
    const foodsArr = localStorage.getItem('foods');
    const parsedFoodsArr = JSON.parse(foodsArr);

    if (parsedFoodsArr) {
      this.setState({
        foods: parsedFoodsArr,
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.foods.length !== this.state.foods.length) {
      localStorage.setItem('foods', JSON.stringify(this.state.foods));
    }
  }

  filterNameOfProduct = () => {
    return this.state.foods.filter((food) => food.name.toLowerCase().includes(this.state.filter));
  };
  render() {
    const { filter } = this.state;
    return (
      <div>
        <Filter handleChangeFilter={this.handleChangeFilter} filter={filter} />

        <Form onSubmit={this.handleSubmit} />
        <List foods={this.filterNameOfProduct()} onDelete={this.onDeleteProduct} />
      </div>
    );
  }
}
