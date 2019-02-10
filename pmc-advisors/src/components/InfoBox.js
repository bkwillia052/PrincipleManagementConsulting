import React, {Component} from 'react';
import './InfoBox.css';


class InfoBox extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="infobox">

                <div className="name-section">
                    <div className='name'>
                        {this.props.name}
                    </div>
                    
                    <div className="title-2">
                        <div className="title-1">
                            <div className="title">
                                Principal
                            </div>
                        </div>
                    </div>
                </div>

                <div className="details-sec" style={{fontSize: 18}}>
                    <div className="outline"></div>
                    {this.props.about}
                    <div className="creds">
                        {this.props.creds}                    
                    </div>
                    
                </div>
                

            </div>

         );
    }
}
 
export default InfoBox ;