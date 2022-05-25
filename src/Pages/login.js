import React from "react";
import { Container, Row, Form } from "react-bootstrap";
import { Button, Input, Label } from "arms_v2.8_webui";
import { useNavigate } from "react-router-dom";
import "./index.scss";
const Login = () => {
  let Styles = {
    label: { width: "280px", marginLeft: "0", textAlign: "left" },
    input: {
      border: "1px solid black",
      height: "30px",
      width: "280px",
      borderRadius: "5px",
    },
  };
  const navigate = useNavigate();
  const Login = () => {
    navigate("/Home");
  };
  return (
    <Form className="form-div"  >
      <Row style={{ marginBottom: "30px" }}>
        <Label
          style={{ fontSize: "20px", fontWeight: "bold" }}
          text="Welcome to Crew Portal"
        />
      </Row>
      <Row>
        <Container
          style={{
            alignItems: "center ",
            border: "1px solid black",
            width: "100%",
            borderRadius: "10px",
            justifyItems: "center ",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            rowGap: "5px",
          }}
        >
          <Row>
            <img
              style={{ width: "240px", height: "120px" }}
              src="https://www.aircraft-commerce.com/wp-content/uploads/2019/08/ARMS-new-logo.png"
              alt="Img"
            />
          </Row>
          <Row>
            <Label text="User Name" style={Styles.label} />
            <Input style={Styles.input} />
          </Row>
          <Row>
            <Label text="Password" style={Styles.label} />
            <Input type="password" style={Styles.input} />
          </Row>
          <Row>
            <Button
              onClick={()=>Login()}
              style={{
                backgroundColor: "#0f243e !important",
                height: "30px",
                width: "280px",
                color: "white",
                borderRadius: "5px",
              }}
              text="LOGIN"
            />
          </Row>
          <Row>
            <Label text="Forgot Password?" />
          </Row>
        </Container>
      </Row>
    </Form>
  );
};
export default Login;
