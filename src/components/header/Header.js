import React from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import Headroom from "react-headroom";
import { NavHashLink } from "react-router-hash-link";
import { greeting } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
import { useMediaQuery } from "react-responsive";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

function Header({ theme }) {
  const isDesktop = useMediaQuery({ query: `(min-width: 768px)` });

  if (isDesktop) {
    return (
      <Headroom>
        <Fade top duration={1000} distance="20px">
          <SeoHeader />
          <div>
            <header className="header">
              <NavHashLink to="/#" className="logo">
                <span style={{ color: theme.text }}> &lt;</span>
                <span className="logo-name" style={{ color: theme.text }}>
                  {greeting.logo_name}
                </span>
                <span style={{ color: theme.text }}>/&gt;</span>
              </NavHashLink>
              <input className="menu-btn" type="checkbox" id="menu-btn" />
              <label className="menu-icon" htmlFor="menu-btn">
                <span className="navicon"></span>
              </label>
              <ul className="menu" style={{ backgroundColor: theme.body }}>
                <li>
                  <NavHashLink
                    to="/#"
                    activeStyle={{ fontWeight: "bold" }}
                    style={{ color: theme.text }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Home
                  </NavHashLink>
                </li>
                <li>
                  <NavHashLink
                    to="/#experience"
                    activeStyle={{ fontWeight: "bold" }}
                    style={{ color: theme.text }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Experience
                  </NavHashLink>
                </li>
                <li>
                  <NavHashLink
                    to="/#project"
                    activeStyle={{ fontWeight: "bold" }}
                    style={{ color: theme.text }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Projects
                  </NavHashLink>
                </li>
                <li>
                  <NavHashLink
                    to="/#skill"
                    activeStyle={{ fontWeight: "bold" }}
                    style={{ color: theme.text }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Skills
                  </NavHashLink>
                </li>

                <li>
                  <NavHashLink
                    to="/#contact"
                    activeStyle={{ fontWeight: "bold" }}
                    style={{ color: theme.text }}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Contact Me
                  </NavHashLink>
                </li>
              </ul>
            </header>
          </div>
        </Fade>
      </Headroom>
    );
  } else {
    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header" style={{ width: "100%" }}>
            <NavHashLink to="/#" className="logo">
              <span style={{ color: theme.text }}> &lt;</span>
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.text }}>/&gt;</span>
            </NavHashLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
                <NavHashLink
                  to="/#"
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Home
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  to="/#experience"
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Experience
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  to="/#project"
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Projects
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  to="/#skill"
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Skills
                </NavHashLink>
              </li>

              <li>
                <NavHashLink
                  to="/#contact"
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Contact Me
                </NavHashLink>
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
