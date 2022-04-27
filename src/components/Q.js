import React from "react";
import Feed from "./Feed.js";
import QHeader from "./QHeader";
import "./Q.css";
import Sidebar from "./Sidebar";
import Widget from "./Widget.js";

function Q() {
  return (
    <div className="quora">
      <QHeader />
      <div className="q__content">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default Q;
