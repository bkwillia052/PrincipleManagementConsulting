import React, { Component } from "react";
import "./ServicesPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageHeader from "./PageHeader";
/* About the Role
(Note for clarity: 
  This role is primarily focused on increasing the diversity of Triplebyte users who are using our platform to find new jobs 
  and will be part of our Growth/Marketing functions).

As our Head of Diversity you'll be focused on the same big picture goal as our growth team, growing the number of engineers 
finding opportunities through Triplebyte, but with a particular focus on diversity groups. We're looking for you to be deeply 
passionate and thoughtful about diversity in technology issues. You'll work closely with multiple teams here to understand how we 
can best reach and engage more diverse groups of engineers. Product, marketing, growth and user support teams will all be your allies 
in finding creative solutions to hitting our diversity goals.

Responsibilities
Working on marketing strategies and content to engage diverse groups of engineers who would find value from new opportunities on Triplebyte.
Organizing and attending events where important diversity in tech issues are being debated and discussed. 
You'll bring your own voice to these discussions.
Working with product and marketing on ways to building the Triplebyte brand as one that signals inclusivity and equal opportunity.
Anything else you can think of to help create more diversity in technology, whether it directly fits into Triplebyte's product or not.*/
const content = {
  di: {
    header: "Diversity & Inclusion",
    phrase:
      "Maximizing innovation, productivity, and competitive advantage through high-performing, diverse teams",
    topics: [
      {
        title: "Work Culture Identity Analysis",
        bullets: [
          "- Evaluating & reconstructing your office culture's ideal diversity profile.",
          "- Discussing the hidden real-world costs of unconsious biases.",
          "- Identifying how your mission aligns with diversity."
        ]
      },
      {
        title: "Engaging top talent from underepresented backgrounds.",
        bullets: [
          "- Developing marketing strategies and content to engage diverse talent.",
          "- Communicating your brand as one that signals inclusivity and equal opportunity",
          "- Organizing and attending events where diversity in your industry is being debated and discussed."
        ]
      },

      {
        title: "Something Else",
        bullets: [
          "- ...Reporting structure review...",
          "- ...Unbiased management talent review",
          `- ...Organizational "right-sizing" support`
        ]
      }
    ]
  },
  em: {
    header: "Expense Management",
    phrase: "Preserving cash and extracting profit in lean times",
    topics: [
      {
        title: "Detailed expense review and analysis",
        bullets: [
          "- Classify discretionary vs.mandatory expenses",
          "- Review leases and contracts for cost reduction",
          "- Develop money - saving process modifications"
        ]
      },
      {
        title: "Cash management / efficiency analysis",
        bullets: [
          "- Analysis of current sources and uses of cash",
          "- Detailed projections of future expenses",
          "- Calculation of current “burn rate”",
          "- Lender renegotiation support, if required"
        ]
      },
      {
        title: "Organizational capacity analysis",
        bullets: [
          "- Reporting structure review",
          "- Unbiased management talent review",
          `- Organizational "right-sizing" support`
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
          `- Industry / competitor review`,
          `- Structured brainstorming to explore new ideas`,
          `- Market entry strategy and planning`
        ]
      },
      {
        title: "Financial feasibility and ROI analysis",
        bullets: [`- Project financial projections`, `- Breakeven analysis`]
      },
      {
        title: "Action plan for implementation",
        bullets: [
          `- Early stage implementation support`,
          `- Integration support, if applicable`,
          `- Hiring assistance, if required`
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
          "- Reporting structure review",
          "- Job description development",
          "- Unbiased management talent review",
          "- New employee hiring assistance, if required"
        ]
      },
      {
        title: "Management Dashboard development",
        bullets: [
          `- Review / develop key management metrics for
business success`,
          `- Develop systems for reporting key metrics`,
          `- Cash management / efficiency analysis`,
          `- Detailed analysis of sources and uses of cash`,
          `- Detailed projections of cash requirements`
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
    mainObj: content.em,
    hovered: ""
  };

  switchTopic = e => {
    let name = e.target.id;

    this.setState({
      mainObj: content[name]
    });
  };
  hoverTopic = e => {
    let name = e.target.id;

    if (!this.state.hovered) {
      this.setState({
        hovered: name
      });
    } else {
      this.setState({
        hovered: ""
      });
    }
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
                id="di"
                onClick={this.switchTopic}
                className={`service-btn `}
              >
                DIVERSITY CONSULTING
                <div
                  className={`divinc-bg`}
                  style={{ opacity: this.state.hovered === "di" ? 0.3 : 0.5 }}
                />
              </div>
              <div
                id="em"
                onClick={this.switchTopic}
                onMouseOver={this.hoverTopic}
                onMouseOut={this.hoverTopic}
                className={`service-btn expense`}
              >
                EXPENSE MANAGEMENT
                <div
                  className={`expense-bg`}
                  style={{ opacity: this.state.hovered === "em" ? 0.3 : 0.5 }}
                />
              </div>
              <div
                id="rd"
                onClick={this.switchTopic}
                className={`service-btn revenue`}
                onMouseOver={this.hoverTopic}
                onMouseOut={this.hoverTopic}
              >
                REVENUE DIVERSIFICATION
                <div
                  className={`revenue-bg`}
                  style={{ opacity: this.state.hovered === "rd" ? 0.3 : 0.5 }}
                />
              </div>
              <div
                id="gm"
                onClick={this.switchTopic}
                onMouseOver={this.hoverTopic}
                onMouseOut={this.hoverTopic}
                className={`service-btn growth`}
              >
                GROWTH MANAGEMENT
                <div
                  className={`growth-bg`}
                  style={{ opacity: this.state.hovered === "gm" ? 0.3 : 0.5 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesPage;
