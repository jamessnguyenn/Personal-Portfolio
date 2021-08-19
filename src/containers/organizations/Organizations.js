import React, { Component } from "react";
import "./Organizations.css";
import { Fade } from "react-reveal";
import OrganizationList from "../../components/organizationList/OrganizationList";
import OrganizationsData from "../../shared/opensource/organizations.json";

class Organizations extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1
              className="experience-heading-text"
              style={{ color: theme.text }}
            >
              Technical Skillset
            </h1>
          </Fade>
        </div>
        <OrganizationList logos={OrganizationsData["data"]} />
      </div>
    );
  }
}

export default Organizations;
