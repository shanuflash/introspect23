import { useRef } from "react";
import "./App.css";
import images from "./components/Images";

function App() {
  const scroll = useRef(null);
  const handleScroll = (e) => {
    scroll.current.scrollLeft += e.deltaY;
  };

  return (
    <>
      <div className="App">
        <div className="tip">Scroll left to see all the pages {">>"}</div>
        <div className="images" ref={scroll} onWheel={handleScroll}>
          {images.map((image) => {
            return <img key={image.id} src={image.src} loading="lazy" />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
