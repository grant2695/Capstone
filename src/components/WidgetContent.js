import React from "react";
import "./WidgetContent.css";

function WidgetContent() {
  return (
    <div className="widget__contents">


      <div className="widget__content">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-ti-1644613-100-ydflucgoeztbhwyurtmlqqrgfqmjmhpl.jpeg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Art & Artist</h5>
          <p>A Space retated to creating, practicing an...</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-ti-1647318-100-kmwvqbpzatmylibelrowrerfqbspekwo.jpeg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Friedrich Nietzche</h5>
          <p>A Space dedicated to great work of Friedrich...</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-ti-1578647-100-xkggvbyzfkvzhyklewtkjijefekqbazb.jpeg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Stock Market Strategies</h5>
          <p>Everything about investing in Stock...</p>
        </div>
      </div>

    </div>
  );
}

export default WidgetContent;
