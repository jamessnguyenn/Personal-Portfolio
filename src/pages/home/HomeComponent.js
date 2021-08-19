import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Footer from "../../components/footer/Footer";
import Organizations from "../../containers/organizations/Organizations";

import Educations from "../../containers/education/Educations";
import Experience from "../../pages/experience/Experience";
import Contact from "../../pages/contact/ContactComponent";
import Certifications from "../../containers/certifications/Certifications";
class Home extends Component {
  render() {
    console.log(this.props.theme);
    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Educations theme={this.props.theme} />
        <Experience theme={this.props.theme} />
        <Certifications theme={this.props.theme} />
        <Organizations theme={this.props.theme} />
        <Contact theme={this.props.theme} />
        <Footer theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
