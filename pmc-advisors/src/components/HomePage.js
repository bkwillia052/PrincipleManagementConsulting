import React, { Component } from 'react';
import './HomePage.css';



class HomePage extends Component {
  render() {
    return (
      <div className="main-image">
        <div className="slogan">
            <div className="row"><div className="phrase">MORE SENSE.</div></div>
            <div className="row"><div className="phrase red">MORE DOLLARS.</div></div>

            <div className="main-bottom">
                <div className="btn-box">
                    <div className="learn-more">
                        LEARN MORE
                    </div>
                    <div className="checkbox">
                        <div className="box tl white"></div>
                        <div className="box tr blk"></div>
                        <div className="box bl rd"></div>
                        <div className="box br white"></div>
                    </div>
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
    );
  }
}

export default HomePage;