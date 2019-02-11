import React, { Component, Fragment } from 'react';
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CheckerBox from './CheckerBox'

const strategies = {
  gm: ['Organizational capacity analysis', 'Management dashboard development', 'Strategic business plan creation'],
  rd: ['Marketing plan analysis','Financial feasibility and ROI analysis', 'Action plan for implementation'],
  em: ['Detailed expense review and analysis','Cash management/efficiency analysis','Organizational capacity analysis']
}

class HomePage extends Component {
    state = {
      gm: false,
      rd: false,
      em: false
    }

    hoverTrue = (e) => {
      console.dir(e.target)
      console.dir(e.target.id)
      console.dir(e.target.attributes.name)
      this.setState({
        [e.target.id]: true
      })
    }

    hoverFalse = (e) => {

      this.setState({
        [e.target.id]: false
      })
    }

  render() {
    return (
    <div className="home-container">
      <div className="main-image">
        <div className="slogan">
            <div className="row"><div className="phrase">MORE SENSE.</div></div>
            <div className="row"><div className="phrase red">MORE DOLLARS.</div></div>

            <div className="main-bottom">
                <div className="btn-box">
                    <a href="/about" style={{textDecoration: 'unset', color: 'unset'}}>
                    <div className="learn-more">
                        LEARN MORE
                    </div>
                    </a>
                    <CheckerBox />
                </div>


                <div className="main-text">
                    <div className="red-top">
                    PMC’s profit improvement consultants
                    deliver measurable, definable results that
                    have an impact on clients’ bottom lines.
                    </div>
                    <div className="black-top">
                    With decades of
                    real-world experience in numerous industries and
                    every functional area - including sales, marketing,
                    finance, information technology,
                    strategy, operations and reorganization -
                    we bring a breadth of
                    expertise developed by counseling
                    owners of hundreds of companies from
                    Wall Street to Main Street.    
                    </div> 
                </div>
                
            </div>

        </div>
      </div>

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

    </div>
    );
  }
}

export default HomePage;