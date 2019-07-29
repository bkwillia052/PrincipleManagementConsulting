import React, { Component, Fragment } from "react";
import "./HomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CheckerBox from "./CheckerBox";
import { Route, Switch, Redirect, NavLink, Link } from "react-router-dom";
import SlideInfo from "./SlideInfo";
const strategies = {
  gm: [
    "Organizational capacity analysis",
    "Management dashboard development",
    "Strategic business plan creation"
  ],
  rd: [
    "Marketing plan analysis",
    "Financial feasibility and ROI analysis",
    "Action plan for implementation"
  ],
  em: [
    "Detailed expense review and analysis",
    "Cash management/efficiency analysis",
    "Organizational capacity analysis"
  ]
};
const slideText = [
  {
    row1: "DIVERSITY ",
    row2: "CONSULTING",
    topPhrase:
      "There are amazing benefits to understanding how diversity impacts your organization.",
    bottomPhrase: "We know how to align your mission with diversity."
  },
  {
    row1: "DEVELOPMENT",
    row2: "STRATEGY",
    topPhrase: `Our advisors have consulted owners of hundreds of companies from Wall
          Street to Main Street.`,
    bottomPhrase: `We know what makes sense for your business.`
  }
];
class HomePage extends Component {
  state = {
    gm: false,
    rd: false,
    em: false,
    selectedText: slideText.length - 1
  };

  hoverTrue = e => {
    this.setState({
      [e.target.id]: true
    });
  };

  hoverFalse = e => {
    this.setState({
      [e.target.id]: false
    });
  };

  switchSlide = () => {
    let newIndex = this.state.selectedText + 1;
    if (newIndex >= slideText.length) {
      newIndex = 0;
    }
    this.setState({
      selectedText: newIndex
    });
  };

  componentDidMount() {
    if (slideText.length > 1) {
      setInterval(() => {
        let newIndex = this.state.selectedText + 1;
        console.log("switching", this.state.selectedText);
        if (newIndex >= slideText.length) {
          newIndex = 0;
        }
        this.setState({
          selectedText: newIndex
        });
      }, 8000);
    }
  }

  render() {
    return (
      <div className="home-container">
        <div className="main-image" />
        <div className="slogan">
          <div className="slideBtn" style={{ left: 0, top: "45%" }} />
          <div className="slideBtn" style={{ right: 0, top: "45%" }} />
          {slideText.map((text, index) => {
            return (
              <SlideInfo
                slideText={text}
                selectedText={this.state.selectedText}
                switchSlide={this.switchSlide}
                num={index}
              />
            );
          })}
          <div className="btn-box">
            <div className="learn-more">
              <Link
                to="/about"
                style={{ textDecoration: "unset", color: "unset" }}
              >
                LEARN MORE
              </Link>
            </div>

            <CheckerBox />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;

/* 
 <div className="main-text">
                <div className="red-top">
                  PMC’s profit improvement consultants deliver measurable,
                  definable results that have an impact on clients’ bottom
                  lines.
                </div>
                <div className="black-top">
                  With decades of real-world experience in numerous industries
                  and every functional area - including sales, marketing,
                  finance, information technology, strategy, operations and
                  reorganization - we bring a breadth of expertise developed by
                  counseling owners of hundreds of companies from Wall Street to
                  Main Street.
                </div>
              </div>
*/
/* 
<div className="str-box">

          <div className="str-content">
            <div className="str" >
                <div className='str-icon'><FontAwesomeIcon icon='chess-rook'/></div>
                <div className="str-txt"id="rd" onMouseEnter={this.hoverTrue} onMouseOut={this.hoverFalse}>REVENUE DIVERSIFICATION</div>
            </div>
            <div className="bullet-pts">

                { !this.state.rd ?
                  <div className='big-icon'><FontAwesomeIcon icon='chess-rook'/></div> :
                  strategies.rd.map(str => {
                    return (
                      <li>
                        {str}
                      </li>
                    )
                  })
                }

            </div>
            <div className="bullet-pts two">
                {
                  strategies.rd.map(str => {
                    return (
                      <li>
                        {str}
                      </li>
                    )
                  })
                }
            </div>
          </div>

          <div className="str-content">
            <div className="str" >
                <div className='str-icon'><FontAwesomeIcon icon='chess-knight'/></div>
                <div className="str-txt" id="gm" onMouseEnter={this.hoverTrue} onMouseOut={this.hoverFalse}>GROWTH MANAGEMENT</div>
            </div>
            <div className="bullet-pts">

                { !this.state.gm ?
                  <div className='big-icon'><FontAwesomeIcon icon='chess-knight' /></div> :
                  strategies.gm.map(str => {
                    return (
                      <li>
                        {str}
                      </li>
                    )
                  })
                }

            </div>
            <div className="bullet-pts two">
                {
                  strategies.gm.map(str => {
                    return (
                      <li>
                        {str}
                      </li>
                    )
                  })
                }
            </div>

          </div>

          <div className="str-content">

            <div className="str" >
                <div className='str-icon'><FontAwesomeIcon icon='chess-bishop'/></div>
                <div className="str-txt" id="em" onMouseEnter={this.hoverTrue} onMouseOut={this.hoverFalse}>EXPENSE MANAGEMENT</div>
            </div>
            <div className="bullet-pts">

                { !this.state.em ?
                  <div className='big-icon'><FontAwesomeIcon icon='chess-bishop' /></div> :
                  strategies.em.map(str => {
                    return (
                      <li>
                        {str}
                      </li>
                    )
                  })
                }

            </div>
            <div className="bullet-pts two">
                {
                  strategies.em.map(str => {
                    return (
                      <li>
                        {str}
                      </li>
                    )
                  })
                }
            </div>

          </div>

      </div>
*/
