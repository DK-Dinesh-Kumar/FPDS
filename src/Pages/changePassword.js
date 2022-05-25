import React from "react";
import { Container, Row } from "react-bootstrap";
import { CheckBox, Label, Input, Button } from "arms_v2.8_webui";
import "./index.scss";
const ChangePassword = () => {
  let Styles = {
    inputLabel: { float: "left", margin: "0 5%", fontWeight: "bold" },
    input: {
      border: "1px solid black",
      height: "30px",
      width: "90%",
      borderRadius: "5px",
    },
  };
  return (
    <div style={{ display: "flex", columnGap: "10px", flexDirection: "column" }}>
      <Row style={{ width: "100%", backgroundColor: "#365e9e" }}>
        <Label
          style={{
            fontSize: "15px",
            color: "white",
            margin: "0 !important",
            paddingTop: "5px",
          }}
          text="CHANGE PASSWORD"
        />
      </Row>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Container className="ChangePasswordContainer">
          <Row>
            <Row
              style={{
                float: "right",
                fontSize: "10px",
                color: "#701121",
                fontWeight: "bold",
              }}
            >
              <CheckBox style={{ marginRight: "0 !important" }} />
              Change Security Quetion
            </Row>
            <Row
              style={{
                backgroundColor: "#0f243e",
                width: "100%",
                display: "flex",
                padding: " 0 ",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ margin: "5px" }}>
                <Label
                  style={{
                    fontSize: "10px ",
                    color: "white",
                    margin: "0 !important",
                  }}
                  text="UPDATE NEW PASSWORD"
                />
              </div>
              <div className="removeIconDiv" onClick={() => console.log("Pressed")}>
                <div></div>
              </div>
            </Row>
            <Row style={{ display: "flex", justifyContent: "center" }}>
              <Container
                style={{
                  border: "1px solid black",
                  width: "100%",
                  justifyContent: "center",
                  padding: " 30px 0px",
                }}
              >
                <Row className="ChangePasswordRow">
                  <Label text="User Name" style={Styles.inputLabel} />
                  <Input style={Styles.input} />
                </Row>
                <Row className="ChangePasswordRow">
                  <Label text="Old Password" style={Styles.inputLabel} />
                  <Input type="password" style={Styles.input} />
                </Row>
                <Row className="ChangePasswordRow">
                  <Label text="New Password" style={Styles.inputLabel} />
                  <Input type="password" style={Styles.input} />
                  <span
                    style={{
                      width: "100%",
                      fontSize: "12px",
                      fontStyle: "italic",
                      float: "left",
                      textAlign: "left",
                      marginBottom: "10px",
                      marginLeft: "5%",
                      width: "90%",
                    }}
                  >
                    Note:Password length should be between 6&14 characters long
                  </span>
                </Row>
                <Row className="ChangePasswordRow">
                  <Label
                    text="Confirm New Password"
                    style={Styles.inputLabel}
                  />
                  <Input type="password" style={Styles.input} />
                </Row>
              </Container>
            </Row>
            <Row className="ChangePasswordRow">
              <Button
                style={{
                  backgroundColor: "#0f243e !important",
                  fontSize: "10px",
                }}
                text="SAVE"
              />
              <Button
                style={{
                  marginLeft: "10px",
                  backgroundColor: "#0f243e !important",
                  fontSize: "10px",
                }}
                text="CANCEL"
              />
            </Row>
          </Row>
        </Container>
      </Row>
    </div>
  );
};
export default ChangePassword;
