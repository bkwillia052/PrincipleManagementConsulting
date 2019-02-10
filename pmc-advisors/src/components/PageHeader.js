import React, {Component } from 'react';
import './PageHeader.css';
import CheckerBox from './CheckerBox'

const PageHeader = (props) => {

    return (

        <div className='header' >
                <CheckerBox centerBox={props.centerBox}/>
                <h1 className="header-txt">{props.title}</h1>
                <CheckerBox centerBox={props.centerBox}/>
        </div>
    )

}

export default PageHeader;