import React from "react";
import Editor from "../components/Editor";
import "../styles/Assesment.css";
import "codemirror/mode/javascript/javascript";

function Header() {
  return (
    <header className="header-section">
      <nav className="navbar navbar-expand-sm mb-0"></nav>
    </header>
  );
}

function Assement() {
  return (
    <>
      <Header />
      <main className="exb">
        <div className="sidebar">
          <div className="time-left">
            <h5>2hr 30m</h5>
            <span>Time Left</span>
          </div>
          <ul className="question-numbers">
            <li className="number">
              <span className="_number"> 1 </span>
              <span className="selected-indicator"></span>
            </li>
            <li className="number selected">
              <span className="_number"> 2 </span>
              <span className="selected-indicator"></span>
            </li>
            <li className="number">
              <span className="_number"> 3 </span>
              <span className="selected-indicator"></span>
            </li>
            <li className="number">
              <span className="_number"> 4 </span>
              <span className="selected-indicator"></span>
            </li>
          </ul>
        </div>
        <div className="question-descr"></div>
        <div className="code-area">
          <Editor />
        </div>
      </main>
    </>
  );
}

export default Assement;
