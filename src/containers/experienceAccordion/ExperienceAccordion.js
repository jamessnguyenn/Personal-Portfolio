import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        {this.props.sections.map((section) => {
          return (
            <div className="experience-section">
              {section["experiences"].map((experience) => {
                return <ExperienceCard experience={experience} theme={theme} />;
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ExperienceAccordion;
