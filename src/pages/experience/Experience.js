import React, { Component } from "react";

import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                  id="experience"
                >
                  {experience.title}
                </h1>
              </div>
            </div>

            <ExperienceAccordion
              sections={experience["sections"]}
              theme={theme}
            />
          </Fade>
        </div>
      </div>
    );
  }
}

export default Experience;
