import React from "react";
import { useTransition, animated } from "react-spring";
import { useLocation, useHistory } from "react-router-dom";


const transitionTypes = {
  sideslideIn:{
    forward:{
      from: {
        position: "absolute",
        top: 0,
        transform: "translateX(100%)",
        width: "100%",
      },
      enter: { transform: "translateX(0%)" },
      leave: { transform: "translateX(-100%)" }
    },
    backward:{
      from: {
        position: "absolute",
        top: 0,
        transform: "translateX(-100%)",
        width: "100%",
      },
      enter: { transform: "translateX(0%)" },
      leave: { transform: "translateX(100%)" }
    }
  },
  sideFadeSlideIn:{
    forward:{
      from: {
        opacity: 0,
        position: "absolute",
        top: 0,
        transform: "translateX(100%)",
        width: "100%",
      },
      enter: { opacity: 1, transform: "translateX(0%)" },
      leave: { opacity: 0, transform: "translateX(-90%)" }
    },
    backward:{
      from: {
        opacity: 0,
        position: "absolute",
        top: 0,
        transform: "translateX(-100%)",
        width: "100%",
      },
      enter: { opacity: 1, transform: "translateX(0%)" },
      leave: { opacity: 0, transform: "translateX(90%)" }
    }
  },
  topSlideIn:{
    forward:{
      from: {
        opacity: 0,
        position: "absolute",
        transform: "translate3d(0, 56px, 0)",
        width: "100%"
      },
      enter: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
      leave: { opacity: 0, transform: "translate3d(0, 36px, 0)" }
    },
    backward:{
      from: {
        opacity: 0,
        position: "absolute",
        transform: "translate3d(0, -56px, 0)",
        width: "100%",
      },
      enter: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
      leave: { opacity: 0, transform: "translate3d(0, -36px, 0)" }
    }
  },
  topSlideIn2:{
    forward:{
      from: {
        opacity: 0,
        position: "absolute",
        transform: "translate3d(0, 56px, 0)",
        width: "100%"
      },
      enter: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
      leave: { opacity: 0, transform: "translate3d(0, -36px, 0)" }
    },
    backward:{
      from: {
        opacity: 0,
        position: "absolute",
        transform: "translate3d(0, -56px, 0)",
        width: "100%",
      },
      enter: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
      leave: { opacity: 0, transform: "translate3d(0, 56px, 0)" }
    }
  }
}


function PageTransition({ children, pathWithNestedRoute }) {
  const location = useLocation();
  const { action } = useHistory();
  const direction  = action === "POP" ? "backward" : "forward";
  const containerRef = React.createRef();
  pathWithNestedRoute = pathWithNestedRoute ?? [];
  const transitions = useTransition(
    location,
    (location) => {
      if(!pathWithNestedRoute.length) return location.pathname;
      let path = location.pathname.split("/")[1];
      return ~pathWithNestedRoute.indexOf(path) ? path : location.pathname;
    },
    {
      from: ()=> {
        return transitionTypes.topSlideIn2[direction].from;
      },
      enter: ()=>{ 
        return transitionTypes.topSlideIn2[direction].enter;
       },
      leave: (c, d) => {
        return transitionTypes.topSlideIn2[direction].leave;
      },
      onRest:(...args)=>{
        // todo: prevent setting style on update
        const elem = containerRef.current;
        elem && elem.removeAttribute("style");
      }
    }
  );

  return (
    <div className="pg-transition">
      {transitions.map(({ item: location, props, key }) => (
        <animated.div key={key} style={props} ref={containerRef}>
          {children(location)}
        </animated.div>
      ))}
    </div>
  );
}

export default PageTransition;
