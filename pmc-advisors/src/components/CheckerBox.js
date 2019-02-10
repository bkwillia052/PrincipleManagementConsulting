import React, {Component, Fragment } from 'react';
import './CheckerBox.css';


const CheckerBox = (props) => {

    return (
        
        <Fragment>
        { props.centerBox ?
        <div className="centerBox">
            <div className="center rd"></div>
        </div>
        :
        <div className="checkbox">
                <div className="box tl white"></div>
                <div className="box tr blk"></div>
                <div className="box bl rd"></div>
                <div className="box br white"></div>
        </div>

        
        }
        </Fragment>
    )

}

export default CheckerBox;