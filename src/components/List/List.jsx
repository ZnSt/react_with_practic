export const List = ({ foods, onDelete }) => {
  return (
    <ul>
      {foods.map((food) => (
        <li key={food.name}>
          <p>Product: {food.name}</p>
          <p>Price: {food.price}</p>
          <button onClick={() => onDelete(food.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
