import React from "react";
import "./dashboardCon.scss";
import { Row, Col, Container, Accordion } from "react-bootstrap";
const DashboardContent = () => {
  return (
    <>
      <div className="dashboard-content">
        <Row>
          <Col sm={8}>
            <div className="dashboard-hold">
              <Row>
                <Col xs={12} sm={12} md={4}>
                  <div className="content-wrapper">
                    <div className="content-heading">
                      <h5>Air Crew</h5>
                    </div>
                    <div className="content-list">
                      <ul>
                        <li>My Details</li>
                        <li>Leave Request</li>
                        <li>Change Password</li>
                        <li>For Your EYES ONLY</li>
                        <li>POST QUERY</li>
                        <li>The ROSTER</li>
                        <li>MY ROSTER</li>
                        <li>Redirected Query Title</li>
                        <li>TQD</li>
                        <li>FLIGHT BRIEFING</li>
                      </ul>
                    </div>
                  </div>
                  <div className="simple-accordion">
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>General Circular</Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            <li>Standard Flying Hour</li>
                            <li>Standard Flying Hour</li>
                            <li>Standard Flying Hour</li>
                            <li>Standard Flying Hour</li>
                            <li>Standard Flying Hour</li>
                            <li>Standard Flying Hour</li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <div className="simple-accordion">
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          Standard Flying Hours
                        </Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            <li>EGCA List Of All Captions</li>
                            <li>EGCA List Of All Captions</li>
                            <li>EGCA List Of All Captions</li>
                            <li>EGCA List Of All Captions</li>
                            <li>EGCA List Of All Captions</li>
                            <li>EGCA List Of All Captions</li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>

                  <div className="simple-accordion">
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>FLIGHT Safety</Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            <li>EGCA List Of All Captions</li>
                            <li>EGCA List Of All Captions</li>
                            <li>EGCA List Of All Captions</li>
                            <li>EGCA List Of All Captions</li>
                            <li>EGCA List Of All Captions</li>
                            <li>EGCA List Of All Captions</li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <div className="simple-accordion">
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          {" "}
                          FLIGHT Operation Traning{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            <li>EGCA List Of All Captions</li>
                            <li>EGCA List Of All Captions</li>
                            <li>EGCA List Of All Captions</li>
                            <li>EGCA List Of All Captions</li>
                            <li>EGCA List Of All Captions</li>
                            <li>EGCA List Of All Captions</li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>

                  <div className="simple-accordion">
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>MANUALS</Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            <li>EGCA List Of All Captions</li>
                            <li>EGCA List Of All Captions</li>
                            <li>EGCA List Of All Captions</li>
                            <li>EGCA List Of All Captions</li>
                            <li>EGCA List Of All Captions</li>
                            <li>EGCA List Of All Captions</li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          <Col xs={12} sm={12} md={4} className="bg-grey">
            <div className="file-wrapper">
              <div className="file-holder">
                <div className="file-heading">
                  <h2>edoc center</h2>
                </div>
                <div className="file-list">
                  <ul>
                    <li>edoc center</li>
                    <li>edoc center</li>
                    <li>edoc center</li>
                    <li>edoc center</li>
                    <li>edoc center</li>
                  </ul>
                </div>
              </div>
              <div className="file-holder">
                <div className="file-heading">
                  <h2>edoc center</h2>
                </div>
                <div className="file-list">
                  <ul>
                    <li>edoc center</li>
                    <li>edoc center</li>
                    <li>edoc center</li>
                    <li>edoc center</li>
                    <li>edoc center</li>
                  </ul>
                </div>
              </div>
              <div className="file-holder">
                <div className="file-heading">
                  <h2>edoc center</h2>
                </div>
                <div className="file-list">
                  <ul>
                    <li>edoc center</li>
                    <li>edoc center</li>
                    <li>edoc center</li>
                    <li>edoc center</li>
                    <li>edoc center</li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DashboardContent;
