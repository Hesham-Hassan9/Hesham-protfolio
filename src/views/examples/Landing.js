/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/home.PNG";
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250" >
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        what you are excited about in tech.{" "}
                        <span>Why am I excited about technology</span>
                      </h1>
                      <p className="lead text-white">
                        The excitement with technology is just knowing what's next.
                        New innovations take technology to another level, no one can
                        predict where technology will take us in the coming years.
                        So what achievements technology will bring next is the best
                        thing that is impressive. Apart from that, hearing the facts
                        about technology from the tech experts is also another best
                        thing that gets a lot of excitement. Here are some interesting
                        articles I like about technology facts that would be good to read.

                      </p>
                      <div>
                        <Badge color="success" pill className="mr-1" href="https://www.pewresearch.org/fact-tank/2015/03/20/10-facts-about-technology-use-emerging-world/">
                          10 Facts About Technology Use In The Emerging World
                        </Badge>
                        <Badge color="success" pill className="mr-1" href="https://www.jla.co.uk/never-technology-people/">
                          It’s Never About Technology But About The People
                        </Badge>
                        <Badge color="success" pill className="mr-1" href="https://www.informationweek.com/executive-insights-and-innovation/why-you-should-be-excited-about-future-tech">
                          Why You should Be Excited About Future Tec
                        </Badge>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            {/* <i className="ni ni-check-bold" /> */}
                            <img src="https://instructure-uploads.s3.amazonaws.com/account_70000000000010/attachments/64870654/code-fellows-logo-shield-for-canvas.png?response-content-disposition=attachment%3B%20filename%3D%22code-fellows-logo-shield-for-canvas.png%22%3B%20filename%2A%3DUTF-8%27%27code%252Dfellows%252Dlogo%252Dshield%252Dfor%252Dcanvas.png&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJDW777BLV26JM2MQ%2F20210916%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210916T132803Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=471b39374d22485fd0d074473d0ab2db93c758813432029c64ea74b8c4986262" style={{ width: '45px' }} />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            My projects in 201
                          </h6>
                          <p className="description mt-3">
                            This is all projects I do in 201
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1" href="https://hesham-hassan9.github.io/cookie-stand/">
                              cookie-stand
                            </Badge>
                            <Badge color="primary" pill className="mr-1" href="https://hesham-hassan9.github.io/BusMall/">
                              BusMall
                            </Badge>
                            <Badge color="primary" pill className="mr-1" href="https://foooodie.github.io/FOODIE/">
                              Finel project "FOODIE"
                            </Badge>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            {/* <i className="ni ni-planet" /> */}
                            <img src="https://instructure-uploads.s3.amazonaws.com/account_70000000000010/attachments/64870654/code-fellows-logo-shield-for-canvas.png?response-content-disposition=attachment%3B%20filename%3D%22code-fellows-logo-shield-for-canvas.png%22%3B%20filename%2A%3DUTF-8%27%27code%252Dfellows%252Dlogo%252Dshield%252Dfor%252Dcanvas.png&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJDW777BLV26JM2MQ%2F20210916%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210916T132803Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=471b39374d22485fd0d074473d0ab2db93c758813432029c64ea74b8c4986262" style={{ width: '45px' }} />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            My projects in 301
                          </h6>
                          <p className="description mt-3">
                            I still working in my projects 301. if I done, I will update the page
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1" href="https://horned-animals99.netlify.app/">
                              Horned Animals
                            </Badge>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={promo1}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      {/* <i className="ni ni-settings-gear-65" /> */}
                      <img src="https://github.com/FOOOODIE/FOODIE/blob/main/img/foLogo2.png?raw=true" style={{ width: '45px' }} />
                    </div>
                    <h3>FOOODIE project</h3>
                    <h4>Project Idea</h4>
                    <p>
                      Here in Jordan, there are not many web pages for booking meals online, 
                      so when we want to order food online, we do not have many web pages to order from. 
                      For example, when I ask you about good apps for ordering food from two or three restaurants 
                      it comes to mind so we don't have much choice. Based on that, we decided to create a web app 
                      that brings all the restaurants in one place to save you the trouble of searching for a good 
                      restaurant, and we named it Foodies.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <p>The most important things that have been worked on in this project:</p>
                      <li className="py-2">
                        {/* <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Carefully crafted components
                            </h6>
                          </div>
                        </div> */}
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Amazing page design</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              User friendly
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
