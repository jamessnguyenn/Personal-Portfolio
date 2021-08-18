import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import TextLoop from "react-text-loop";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-image-div">
            {
              <img
                className="greeting-image"
                alt="profile_photo"
                src={require("../../assests/images/profile_photo.jpg")}
              ></img>
            }
          </div>
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              <TextLoop>
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  Software Engineer
                </h2>
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  Student Leader
                </h2>
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  Computer Scientist
                </h2>
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  President's Scholar
                </h2>
              </TextLoop>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="View My Experience"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
                <Button
                  text="Checkout My Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
