import "./App.css";
import images from "./components/Images";
import { useState,useEffect } from "react";

function App() {
  const [shownImages, setShownImages] = useState(images.slice(0, 2));

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handleLeftClick();
      } else if (event.key === "ArrowRight") {
        handleRightClick();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleLeftClick = () => {
    const currentIndex = images.indexOf(shownImages[0]);
    if (currentIndex > 0) {
      const newIndex = currentIndex - 2;
      setShownImages(images.slice(newIndex, newIndex + 2));
    }
  };

  const handleRightClick = () => {
    const currentIndex = images.indexOf(shownImages[0]);
    if (currentIndex < images.length - 2) {
      const newIndex = currentIndex + 2;
      setShownImages(images.slice(newIndex, newIndex + 2));
    }
  };
  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    const touchCurrentX = event.touches[0].clientX;
    const touchDistanceX = touchStartX - touchCurrentX;
    if (touchDistanceX > 30) {
      handleRightClick();
    } else if (touchDistanceX < -30) {
      handleLeftClick();
    }
  };
  return (
    <>
    <div className="App" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      <div className="images">
        {shownImages.map((image) => {
          return <img key={image.id} src={image.src} loading="lazy" />;
        })}
      </div>
    </div>
  </>
  );
}

export default App;
