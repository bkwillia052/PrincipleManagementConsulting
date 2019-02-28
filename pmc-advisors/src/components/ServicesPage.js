import React, { Component } from "react";
import "./ServicesPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageHeader from "./PageHeader";

const content = {
  em: {
    header: "Expense Management",
    phrase: "Preserving cash and extracting profit in lean times",
    topics: [
      {
        title: "Detailed expense review and analysis",
        bullets: [
          "• Classify discretionary vs.mandatory expenses",
          "• Review leases and contracts for cost reduction",
          "• Develop money - saving process modifications"
        ]
      },
      {
        title: "Cash management / efficiency analysis",
        bullets: [
          "• Analysis of current sources and uses of cash",
          "• Detailed projections of future expenses",
          "• Calculation of current “burn rate”",
          "• Lender renegotiation support, if required"
        ]
      },
      {
        title: "Organizational capacity analysis",
        bullets: [
          "• Reporting structure review",
          "• Unbiased management talent review",
          `• Organizational "right-sizing" support`
        ]
      }
    ]
  },
  rd: {
    header: "Revenue Diversification",
    phrase: "Creating new revenue streams",
    topics: [
      {
        title: "Marketing plan analysis",
        bullets: [
          `• Industry / competitor review`,
          `• Structured brainstorming to explore new ideas`,
          `• Market entry strategy and planning`
        ]
      },
      {
        title: "Financial feasibility and ROI analysis",
        bullets: [`• Project financial projections`, `• Breakeven analysis`]
      },
      {
        title: "Action plan for implementation",
        bullets: [
          `• Early stage implementation support`,
          `• Integration support, if applicable`,
          `• Hiring assistance, if required`
        ]
      }
    ]
  },
  gm: {
    header: "Growth Management",
    phrase: "Ensuring your bottom line grows as fast as your top line",
    topics: [
      {
        title: "Organizational capacity analysis",
        bullets: [
          "• Reporting structure review",
          "• Job description development",
          "• Unbiased management talent review",
          "• New employee hiring assistance, if required"
        ]
      },
      {
        title: "Management Dashboard development",
        bullets: [
          `• Review / develop key management metrics for
business success`,
          `• Develop systems for reporting key metrics`,
          `• Cash management / efficiency analysis`,
          `• Detailed analysis of sources and uses of cash`,
          `• Detailed projections of cash requirements`
        ]
      },
      {
        title: "Strategic business plan creation or updating",
        bullets: []
      }
    ]
  }
};

class ServicesPage extends Component {
  state = {
    mainObj: content.em
  };

  switchTopic = e => {
    let name = e.target.id;
    console.dir(e.target);
    console.log(e.target, name, content[name]);

    this.setState({
      mainObj: content[name]
    });
  };
  render() {
    let { header, phrase, topics } = this.state.mainObj;

    return (
      <div className="services-container">
        <div className="header-box services">
          <PageHeader centerBox={true} title="SERVICES" />

          <div className="services-content">
            <div className="services-main-ct">
              <div className="services-main-hd">
                <div className="services-hdr">{header}</div>
                <div className="services-phrase">{phrase}</div>
              </div>

              <div className="services-main-txt">
                {topics.map(topic => (
                  <div className="topic-box">
                    <div className="topic-title">{topic.title}</div>
                    <div className="topic-bullets">
                      {topic.bullets.map(bullet => (
                        <div className="topic-bullet">{bullet}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="services-btns">
              <div
                id="em"
                onClick={this.switchTopic}
                className={`service-btn expense`}
              >
                EXPENSE MANAGEMENT
              </div>
              <div
                id="rd"
                onClick={this.switchTopic}
                className={`service-btn revenue`}
              >
                REVENUE DIVERSIFICATION
              </div>
              <div
                id="gm"
                onClick={this.switchTopic}
                className={`service-btn growth`}
              >
                GROWTH MANAGEMENT
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesPage;
