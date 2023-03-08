export const Filter = ({ handleChangeFilter, filter }) => {
  return (
    <div style={{ marginBottom: '30px' }}>
      <input type="text" onChange={handleChangeFilter} value={filter} placeholder="Find me..." />
    </div>
  );
};
