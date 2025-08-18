import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Munchy", "Inverted", "Isaac", "Tikkalawl"];
  return (
    <div className="App">
      <ListGroup items={items} heading="People" />
    </div>
  );
}

export default App;
