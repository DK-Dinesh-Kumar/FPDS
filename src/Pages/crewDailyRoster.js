import { AgGrid, Button, Calender, CheckBox, Label } from "arms_v2.8_webui";
import { Container, Row, Col } from "react-bootstrap";

const CrewDailyRoster = () => {
  const flightData = {
    columns: [
      { field: " Sn No." },
      {
        field: "Date of Duty (Local Time)*",
      },
      { field: "Type of Duty" },
      { field: "Flight Details" },
      { field: "Reporting Date Time" },
      { field: " Start Time" },
      { field: " End Time" },
      { field: " Flight Block " },
      { field: " Total Flight Time" },
      { field: " Try/Remarks" },
    ],
    row: [
      {
        " Sn No.": " ",
        "Date of Duty (Local Time)*": " ",
        "Type of Duty": " ",
        "Flight Details": " ",
        "Reporting Date Time": " ",
        " Start Time": " ",
        " End Time": " ",
        " Flight Block ": " ",
        " Total Flight Time": " ",
        " Try/Remarks": " ",
      },
      {
        " Sn No.": " ",
        "Date of Duty (Local Time)*": " ",
        "Type of Duty": " ",
        "Flight Details": " ",
        "Reporting Date Time": " ",
        " Start Time": " ",
        " End Time": " ",
        " Flight Block ": " ",
        " Total Flight Time": " ",
        " Try/Remarks": " ",
      },
      {
        " Sn No.": " ",
        "Date of Duty (Local Time)*": " ",
        "Type of Duty": " ",
        "Flight Details": " ",
        "Reporting Date Time": " ",
        " Start Time": " ",
        " End Time": " ",
        " Flight Block ": " ",
        " Total Flight Time": " ",
        " Try/Remarks": " ",
      },
    ],
  };
  return (
    <div
      style={{ display: "flex", columnGap: "10px", flexDirection: "column" }}
    >
      <Row style={{ width: "100%", backgroundColor: "#365e9e", padding:"5px 0" }}>
        <Label
          style={{
            fontSize: "15px",
            color: "white",
            margin: "0 !important",
            paddingTop: "5px",
          }}
          text="CREW DAILY ROSTER"
        />
      </Row>
      <Row
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container style={{ width: "80%" }}>
          <Label
            style={{
              float: "left",
              marginLeft: "22px",
              fontSize: "15px",
              textAlign: "left",
              width: "100%",
            }}
            text="**Note:"
          />
          <Row className="rosterRow">
            <ul>
              <li>
                Roster can be viewed upto roster release date i,e 10-May-2022
              </li>
              <li>All timings are shown in UTC and local time of the city.</li>
              <li>
                Previous flight data is from movement control or techlog/PSR
                timing.
              </li>
              <li>
                Please note this roster is as of 10 May 2022 08:56 (Z) & 10 May
                2022 14:26 (LOCAL TIME)
              </li>
              <li>
                <CheckBox /> Uncheck to Show Crew Complement.
              </li>
              <li>
                <CheckBox /> Display NDA Records.
              </li>
            </ul>
          </Row>
          <Row
            style={{
              width: "100%",
              borderBottom: " 1px solid black",
              marginBottom: "10px",
            }}
          ></Row>
          <Row
            style={{
              display: "flex",
              flexDirection: "row",
              columnGap: "50px",
              marginLeft: "2%",
              flexWrap: "wrap",
            }}
          >
            <Col style={{ marginTop: "10px", display: "flex" }}>
              {/* <label style={{ fontSize: "15px" }} className="PadItem">
                From Date:
              </label>
              <input
                className={["HeaderInputDate" + "PadItem"].join(" ")}
                type="date"
              /> */}
              <Label text=" From Date:" />
              <Calender />
            </Col>
            <Col style={{ marginTop: "10px", display: "flex" }}>
              {/* <label style={{ fontSize: "15px" }} className="PadItem">
                To Date:
              </label>
              <input
                className={["HeaderInputDate" + "PadItem"].join(" ")}
                type="date"
              /> */}
              <Label text="To Date:" />
              <Calender />
            </Col>
            <Col
              style={{
                display: "flex",
                columnGap: "20px",
                marginTop: "10px",
                flexWrap: "wrap",
                rowGap: "5px",
              }}
            >
              <Button
                style={{ backgroundColor: "#0f243e !important" }}
                text="VIEW"
              />
              <Button
                style={{ backgroundColor: "#0f243e !important" }}
                text="PRINT"
              />
              <Button
                style={{
                  width: "180px",
                  backgroundColor: "#0f243e !important",
                }}
                text="EXPORT TO EXCEL"
              />
            </Col>
          </Row>
          <Label
            style={{
              color: "red",
              float: "left",
              fontWeight: "bold",
              width: "100%",
              textAlign: "left",
              margin: "10px 0",
            }}
            text="To Date Must Be Less Than Roster Date"
          />
          <Row>
            <AgGrid
              rowData={flightData.row}
              style={{ height: "144px", width: "100%" }}
              columnData={flightData.columns}
            />
          </Row>
          <Row style={{ margin: "50px 0" }}>
            <AgGrid
              rowData={flightData.row}
              style={{ height: "144px", width: "290px" }}
              columnData={[
                { field: "Duty Name" },
                { field: "Duty Short Name" },
              ]}
            />
          </Row>
        </Container>
      </Row>
    </div>
  );
};
export default CrewDailyRoster;
