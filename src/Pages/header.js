import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { Input, Label } from "arms_v2.8_webui";
import { Link } from "@material-ui/core";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ChangePassword from "./changePassword";
import CrewDailyRoster from "./crewDailyRoster";
import Home from "./homePage";
import DashboardContent from "./Dashboard/dashboardContent";
import { useLocation } from "react-router-dom";

import { Route, Routes } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <Container style={{ width: "100%", overflow: "auto", height: "100vh" }}>
      <Row
        style={{
          backgroundColor: "#0f243e",
          width: "100%",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {location.pathname !== "/Home/ChangePassword" ? (
          <Col
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "15px",
              alignItems: "center",
            }}
          >
            <HomeIcon style={{ color: "white" }} />
            <Label style={{ color: "white" }} text="HOME" />
          </Col>
        ) : (
          <Col></Col>
        )}
        <Col
          style={{
            marginRight: "15px",
            display: "flex",
            alignItems: "center",
            fontSize: "12px",
            flexWrap: "wrap",
          }}
        >
          {location.pathname === "/Home" ? (
            <Col>
              <Input
                style={{
                  backgroundColor: "white",
                  width: "150px",
                  borderRadius: "12px",
                  paddingLeft: "10px",
                  marginLeft: "5px",
                }}
                placeHolder="Search..."
              />
              <SearchIcon style={{ color: "white" }} />
            </Col>
          ) : null}
          <Col
            // className="d-flex align-items-center"
            style={{ display: "flex", alignItems: "center" }}
          >
            <PersonIcon style={{ color: "white" }} />
            <span>{"WELCOME : ARMS "} |</span>
            <Link
              style={{
                marginLeft: "2px",
                color: "white",
                cursor: "pointer",
              }}
            >
              SIGN OUT
            </Link>
          </Col>
        </Col>
      </Row>
      <Row>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ChangePassword" element={<ChangePassword />} />
          <Route path="CrewDailyRoster" element={<CrewDailyRoster />} />
        </Routes>

        {/* <ChangePassword /> */}
        {/* <CrewDailyRoster /> */}
        {/* <Home /> */}
        {/* <DashboardContent /> */}
      </Row>
    </Container>
  );
};
export default Header;
