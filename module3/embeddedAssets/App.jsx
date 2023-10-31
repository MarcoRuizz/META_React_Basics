// IMPORT the asset
import image from "./src/assets/image.jpg";

function App() {
  const randomImageURL = "https://picsum.photos/400/265";

  return (
    <div>
      <h1>Task: add three images with some styling</h1>

      <img height={200} src={image} alt="This is an image" />

      <img
        height={200}
        src={require("./src/assets/image.jpg")}
        alt="This is an image 2"
      />

      <img
        height={200}
        src={require("./src/assets/image.jpg")}
        alt="This is an image 2"
      />

      <img height={200} src={randomImageURL} alt="This is an image 2" />
    </div>
  );
}

export default App;
