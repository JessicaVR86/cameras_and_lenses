import "../styles/App.scss";

function App() {
  return (
    <>
      <nav>
        <p>NEW ARRIVALS</p>
        <p>ALL PRODUCTS</p>
        <p>CAMERAS</p>
        <p>LENSES</p>
      </nav>
      <div className="parallax picture1"></div>

      <div className="text">
        <p>
          Because life isn't just about moments—it's about memories. A camera
          lets you freeze time, capture emotion, and preserve the essence of
          what makes each experience unique. <br></br>
          <strong style={{ fontSize: "3rem" }}>
            Don't just see it, capture it.
          </strong>
        </p>
      </div>

      <div className="parallax picture2"></div>

      <div className="text">
        <p>
          Pick the camera that tells your story, reflects your style, and
          follows you through every adventure.
        </p>
      </div>
    </>
  );
}

export default App;
