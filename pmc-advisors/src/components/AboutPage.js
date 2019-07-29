import React, { Component, Fragment, HTMLBRElement } from 'react';
import './AboutPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PageHeader from './PageHeader'
import InfoBox from './InfoBox';
import CheckerBox from './CheckerBox';

const founders = {
    brian: {
        name: 'Brian Williams',
        about: `As a senior management consultant and business executive, Brian has over 20 years experience leading and advising
        corporations. Mr. Williams has most recently served as COO and consultant to the Los Angeles Urban League, where he was responsible for overseeing the 
League's Supplier Diversity and Academic Inclusion Programs. His experience also includes senior marketing and operating positions at Procter & Gamble and Pulte Homes. As a
        senior consultant with McKinsey & Company, Brian advised senior executives on strategy, marketing, and operational
        efficiency issues. His industry expertise includes Pharmaceuticals, Durable Goods Manufacturing, Consumer Packaged
        Goods and Retail.   `,
        creds: 'Brian holds an MBA from Yale School of Management and a BA from Yale College.'
    },
    jon: {
        name: 'Jon Walls',
        about: `Jon Walls is a senior finance and operations executive possessing over 15 years of experience with Fortune 500 companies
        and small to mid-sized businesses. His industry expertise includes financial services, e-commerce, mobile media and
        private equity. Jon was a Senior Vice President of Investment Banking at Lehman Brothers with expertise in equity, fixed
        income and M&A. He served as President and COO at B. Wilson Partners, a financial consulting boutique with a private
        equity affiliate. In addition, he has also provided financial leadership as CFO for a start-up Internet Service Provider and a
        mortgage banking company. His functional expertise includes finance, general management, strategy, corporate
        development (M&A) and accounting. `,
        creds: 'Jon holds an MBA from Harvard Business School, a JD from Harvard Law School and a BA from Yale University. '
    },
    
}



class AboutPage extends Component {

    state ={}

    componentDidMount(){
        let desc = document.querySelector('.details-sec');
        console.dir(desc)
    }
  render() {

    let {brian, jon} = founders;

    return (
        <div className="about-container">

            
            <div className="header-box" >
                <PageHeader centerBox={true} title='ABOUT US' />
                
                <div style={{borderRight: '10px solid black', borderLeft: '10px solid black'}}> 
                <div className="header-content">
                    <div className="who-wr">
                        <div className="h2">Who We Are</div>
                    </div>
                    <div className="tm">
                            Principle’s business experts have decades of real-world corporate and entrepreneurial experience, in addition to the
                            expertise developed by counseling owners and senior executives of companies from Wall Street to Main Street.
                            Since the 1980s, Principle’s Analysts and Consultants have served clients worldwide. Our professionals have advanced
                            degrees in various disciplines from Ivy League and other top-tier universities to complement their extensive executive and
                            consulting experience. 
                            <br/>
                            <br/>
                                Our professional team includes Consultants who have senior executive and consulting experience at the following
                            companies: Procter & Gamble, McKinsey & Company, Lehman Brothers, Pulte Homes, Novo Nordisk, Unilever, Johnson &
                            Johnson, and other firms both large and small. 
                    </div>
                </div>
                </div>

            </div>

            <div className='about-body'>
                

            <div className="team">

                <div className="team-txt">
                Founders
                </div>

                <div className="team-container">
                    <InfoBox name={jon.name} about={jon.about} creds={jon.creds} />
                    <div className="divide">
                        <div className="line"></div>
                        <CheckerBox centerBox/>
                        <div className="line"></div>
                    </div> 
                    <InfoBox name={brian.name} about={brian.about} creds={brian.creds}/>  
                </div>

            </div>

            </div>
               
        
            
            
            

        </div>
    );
  }
}

export default AboutPage;