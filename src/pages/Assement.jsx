import React from "react";
import Editor from "../components/Editor";
import "../styles/Assesment.css";
import "codemirror/mode/javascript/javascript";

function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-sm mb-0"></nav>
    </header>
  );
}

function SideBar(){
  return(
    <div className="sidebar">
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
  )
}


function Assement() {
  return (
    <>
      <Header />
      <main className="exb">
        <SideBar />
        <div className="question-descr"></div>
        <div className="code-area">
          <Editor />
        </div>
      </main>
    </>
  );
}

export default Assement;
