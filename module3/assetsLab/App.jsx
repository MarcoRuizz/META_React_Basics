import image from "./logo.jpg";

function App() {
  return (
    <div className="App">
      <h1>Task: Add an image below</h1>

      <img src={image} alt="image" />
    </div>
  );
}

export default App;
