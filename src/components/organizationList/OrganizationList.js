import React, { Component } from "react";
import "./OrganizationList.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Fade } from "react-reveal";

class OrganizationList extends Component {
  render() {
    return (
      <div className="organizations-main-div">
        <ul className="dev-icons-orgs">
          {this.props.logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo["login"]}
                placement={"top"}
                style={{ marginBottom: "5px" }}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo["login"]}</strong>
                  </Tooltip>
                }
              >
                <Fade bottom duration={2000} distance="40px">
                  <li className="organizations-inline" name={logo["login"]}>
                    <span
                      className="iconify"
                      data-icon={logo["className"]}
                      style={{
                        color: "#2EC866",
                        width: "100px",
                        height: "auto",
                      }}
                      data-inline="false"
                    ></span>
                  </li>
                </Fade>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default OrganizationList;
