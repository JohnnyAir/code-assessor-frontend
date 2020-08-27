import React, {useEffect, useRef} from "react";
import Editor from "../components/Editor";
import "../styles/Test.css";
import "codemirror/mode/javascript/javascript";
import { Icon, Button, Dropdown } from "semantic-ui-react";
import logo from '../assets/images/logo2.png'

function Header() {
  return (
    <header className="header">
      <div className="test-area-h-logo">
        <img src={logo} alt="w" />
      </div>
      <div className="timer">
        <Icon name="clock outline" />
        1h 30m
      </div>
      <div className="actions-buttons">
        <Button
          // basic
          color="teal"
          icon
          labelPosition="left"
        >
          <Icon name="check" />
          Submit
        </Button>
      </div>
    </header>
  );
}

function ResizeDivider() {

  const handle = useRef();
  const divider = useRef();

  // useEffect(()=>{
  //   const handelElem = handle.current;
  //   function handleResize(e){
  //     console.log(e.clientX)
  //     divider.current.style.left = `${41 + e.clientX}px`
  //   }
  //   handelElem.addEventListener("mousemove", handleResize);
  //  return ()=> handelElem.removeEventListener("mousemove", handleResize)
  // })

  return (
    <div ref={divider} className="resizer">
      <div ref={handle} className="handle"></div>
    </div>
  );
}

function SideBar() {
  return (
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
  );
}

function Assement() {
  return (
    <>
      <Header />
      <main className="exb">
        <SideBar />
        <div className="question-descr">
          <div className="section--top">
            <h5>Question 2</h5>
          </div>
        </div>
        <ResizeDivider />
        <div className="code-area">
          <div className="section--top">
            <Dropdown
              className="s-editor-lang"
              selection
              defaultValue="text/x-java"
              compact
              button
              options={[
                {
                  key: "Java",
                  text: "Java",
                  value: "text/x-java",
                },
                {
                  key: "C++",
                  text: "C++",
                  value: "text/x-c++",
                },
              ]}
            />
          </div>
          <Editor />
        </div>
      </main>
    </>
  );
}

export default Assement;
