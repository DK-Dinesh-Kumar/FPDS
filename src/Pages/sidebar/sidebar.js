import { Label } from "arms_v2.8_webui";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
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
    <div>
      <Container className="mainPageTableStyle">
        <Label style={Styles.label1} text="AIR CREW" />
        <Container className="content-list">
          <ul>
            <li>My Details</li>
            <li>Leave Request</li>
            <Link style={{ textDecoration: "none" }} to="ChangePassword">
              <li>Change Password</li>
            </Link>

            <li>For Your EYES ONLY</li>
            <li>POST QUERY</li>
            <Link style={{ textDecoration: "none" }} to="CrewDailyRoster">
              <li>The ROSTER</li>
            </Link>

            <li>MY ROSTER</li>
            <li>Redirected Query Title</li>
            <li>TQD</li>
            <li>FLIGHT BRIEFING</li>
          </ul>
        </Container>
      </Container>
    </div>
  );
};

export default Sidebar;
