/*
    Assets are things like images, stylesheets, fonts, etc.
*/

// IMPORT the asset
import image from "./src/assets/image.jpg";

function App() {
  return (
    <div>
      <img src={image} alt="This is an image" />
      {/* <img src={require('./src/assets/image.jpg')} alt='This is an image' /> */}
    </div>
  );
}

export default App;


// Bundling is a process that takes all the imported files in an app and joins them into a single file, referred to as a bundle.