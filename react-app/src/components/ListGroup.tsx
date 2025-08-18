function ListGroup() {
  let items = ["Houston", "Dallas", "Austin", "San Antonio", "El Paso"];
  //   items = [];
  return (
    <>
      <h1>List</h1>
      {items.length === 4 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
