import "./App.css";
import images from "./components/Images";

function App() {
  return (
    <>
      <div className="App">
        <div className="tip">Scroll left to see all the pages →</div>
        <div className="images">
          {images.map((image) => {
            return <img key={image.id} src={image.src} loading="lazy" />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
