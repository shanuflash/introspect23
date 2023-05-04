import "./App.css";
import images from "./components/Images";

function App() {
  return (
    <>
      <div className="App">
        {images.map((image) => {
          return <img key={image.id} src={image.src} loading="lazy" />;
        })}
      </div>
    </>
  );
}

export default App;
