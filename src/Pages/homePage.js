import React from "react";
import { Label } from "arms_v2.8_webui";
import { Container, Col, Row } from "react-bootstrap";
import "./index.scss";
import Sidebar from "./sidebar/sidebar";

const HomePage = () => {
  let Styles = {
    label1: {
      backgroundColor: "#0f243e",
      color: "white",
      textAlign: "left",
      padding: "5px",
      margin: "0 !important",
    },
    label2: {
      color: "white",
      margin: "0 !important",
    },
  };
  return (
    <div className="over-all-align" style={{ paddin: "10px" }}>
      <Col className="over-all-align">
        <Col className="mainColumn">
          <Sidebar />
          <Container className="mainPageTableStyle">
            <Row className="mainRow ">
              <div style={{ margin: "5px" }}>
                <Label style={Styles.label2} text="GENERAL CIRCULAR" />
              </div>
              <div
                className="removeIconDiv"
                onClick={() => console.log("Pressed")}
              >
                <div></div>
              </div>
            </Row>
            <Container className="content-list">
              <ul>
                <li>General Circular</li>
                <li>General Circular</li>
                <li>General Circular</li>
                <li>General Circular</li>
                <li>General Circular</li>
                <li>General Circular</li>
              </ul>
            </Container>
          </Container>
        </Col>
        <Col className="mainColumn">
          <Container className="mainPageTableStyle">
            <Row className="mainRow ">
              <div style={{ margin: "5px" }}>
                <Label style={Styles.label2} text="STANDARD FLYING HOURS" />
              </div>
              <div
                className="removeIconDiv"
                onClick={() => console.log("Pressed")}
              >
                <div></div>
              </div>
            </Row>
            {/* <Label style={Styles.label1} text="STANDARD FLYING HOURS" /> */}
            <Container className="content-list">
              <ul>
                <li>Standard Flying Hour</li>
                <li>Standard Flying Hour</li>
                <li>Standard Flying Hour</li>
                <li>Standard Flying Hour</li>
                <li>Standard Flying Hour</li>
                <li>Standard Flying Hour</li>
              </ul>
            </Container>
          </Container>

          <Container className="mainPageTableStyle">
            <Row className="mainRow ">
              <div style={{ margin: "5px" }}>
                <Label style={Styles.label2} text="FLIGHT SAFETY" />
              </div>
              <div
                className="removeIconDiv"
                onClick={() => console.log("Pressed")}
              >
                <div></div>
              </div>
            </Row>
            {/* <Label style={Styles.label1} text="FLIGHT SAFETY" /> */}
            <Container className="content-list">
              <ul>
                <li>Flight Safety</li>
                <li>Flight Safety</li>
                <li>Flight Safety</li>
                <li>Flight Safety</li>
                <li>Flight Safety</li>
                <li>Flight Safety</li>
              </ul>
            </Container>
          </Container>
        </Col>
      </Col>
      <Col className="over-all-align">
        <Col className="mainColumn">
          <Container className="mainPageTableStyle">
            <Row className="mainRow ">
              <div style={{ margin: "5px" }}>
                <Label style={Styles.label2} text="FLIGHT OPRETIONS-TRAINING" />
              </div>
              <div
                className="removeIconDiv"
                onClick={() => console.log("Pressed")}
              >
                <div></div>
              </div>
            </Row>
            {/* <Label style={Styles.label1} text="FLIGHT OPRETIONS-TRAINING" /> */}
            <Container className="content-list">
              <ul>
                <li>Flight operations and traning</li>
                <li>Flight operations and traning</li>
                <li>Flight operations and traning</li>
                <li>Flight operations and traning</li>
                <li>Flight operations and traning</li>
                <li>Flight operations and traning</li>
              </ul>
            </Container>
          </Container>

          <Container className="mainPageTableStyle">
            <Row className="mainRow ">
              <div style={{ margin: "5px" }}>
                <Label style={Styles.label2} text="MANUALS" />
              </div>
              <div
                className="removeIconDiv"
                onClick={() => console.log("Pressed")}
              >
                <div></div>
              </div>
            </Row>
            {/* <Label style={Styles.label1} text="MANUALS" /> */}
            <Container className="content-list">
              <ul>
                <li>Manuals</li>
                <li>Manuals</li>
                <li>Manuals</li>
                <li>Manuals</li>
                <li>Manuals</li>
                <li>Manuals</li>
              </ul>
            </Container>
          </Container>
        </Col>
        <Col className="mainColumn" style={{ backgroundColor: "#f1f2f6" }}>
          <Container className="mainPageTableStyle">
            <Label style={Styles.label1} text="EDOCS CENTER" />
            <Container className="edocsCenter">
              <ul>
                <li>1 PBN WORKSHOP</li>
                <li>2 ICAO ANNEX</li>
                <li>3 ARTICLES AND GUIDANCE MATERIALS</li>
                <li>4 PERFORMANCE ENGINEERING DOCS</li>
                <li>5 BCAS AEP GUIDELINES 2019</li>
              </ul>
            </Container>
          </Container>

          <Container className="mainPageTableStyle">
            <Label style={Styles.label1} text="INFO NOTICE" />
            <Container className="infoNotice">
              <ul>
                <li>DGCA APPLICATION LIC/IR RENEWAL FORM</li>
                <li>TRAINING FORMS</li>
                <li>CHANDIGARH APPROACH CHARTS</li>
                <li>EFB IPAD CONFIGURATION HELP FILE</li>
                <li>PRESENTATIONS ON INCIDENT AND ACCIDENT OCCURRENCES</li>
              </ul>
            </Container>
          </Container>
          <Container className="mainPageTableStyle">
            <Label style={Styles.label1} text="REPORTS CENTER" />
            <Container className="reportsCenter">
              <ul>
                <li>FLIGHT STATUS</li>
              </ul>
            </Container>
          </Container>
          <Container className="mainPageTableStyle">
            <Label style={Styles.label1} text="WEB LINKS" />
            <Container className="webLinks">
              <ul>
                <li>GO SAFE</li>
                <li>ENGINEERING DOCUMENTS-QC WEB</li>
                <li>METAR MUMBAI FIR</li>
                <li>METAR DELHI FIR</li>
                <li>METAR CHENNAI FIR</li>
              </ul>
            </Container>
          </Container>
        </Col>
      </Col>
    </div>
  );
};
export default HomePage;
