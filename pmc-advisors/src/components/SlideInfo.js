import React, { Component, Fragment } from "react";
import { animated, useSpring } from "react-spring";

const slideText = [
  /*  {row1: "DIVERSITY ",
row2: "CONSULTING", 
topPhrase: "",
bottomPhrase: ""}, */
  {
    row1: "MORE SENSE.",
    row2: "MORE DOLLARS.",
    topPhrase: `Our advisors have consulted owners of hundreds of companies from Wall
          Street to Main Street.`,
    bottomPhrase: `We know what makes sense for your business.`
  }
];
const SlideInfo = ({ slideText, selectedText, num }) => {
  let { row1, row2, topPhrase, bottomPhrase } = slideText;
  let rowAnimationL = useSpring({
    opacity: selectedText === num ? 1 : 0,
    marginLeft: selectedText === num ? `0px` : `50px`
  });
  let rowAnimationR = useSpring({
    opacity: selectedText === num ? 1 : 0,
    marginRight: selectedText === num ? `0px` : `50px`, justifyContent: "flex-end" 
  });
  let textAni = useSpring({
    top: selectedText === num ? `0px` : `15px`,
    opacity: selectedText === num ? 1 : 0
  })
  let textAni2 = useSpring({
    left: selectedText === num ? `0px` : `15px`,
    opacity: selectedText === num ? 1 : 0,
    delay: 500
  })
  return (
    <div className={`slide-info ${num === selectedText ? "" : "hidden"}`}>
      <animated.div style={rowAnimationL} className="row">
        <div style={{ borderLeft: "12px solid black" }} className="phrase red">
          {row1}
        </div>
      </animated.div>
      <animated.div className="row" style={rowAnimationR}>
        <div
          style={{
            borderRight: "12px solid rgb(231, 26, 22)",
            alignSelf: "flex-end"
          }}
          className="phrase"
        >
          {row2}
        </div>
      </animated.div>

      <div className="main-bottom">
        <animated.div style={textAni}className="top-phrase">
          {topPhrase}
          <div className="top-phrase-bottom-bar" />
        </animated.div>
        <animated.div style={textAni2} className="bottom-phrase">{bottomPhrase}</animated.div>
      </div>
    </div>
  );
};

export default SlideInfo;
