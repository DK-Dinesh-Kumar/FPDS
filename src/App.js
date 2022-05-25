import Login from "./Pages/login";
import Header from "./Pages/header";
import Routing from "./Routing/route";
import ChangePassword from "./Pages/changePassword";
import CrewDailyRoster from "./Pages/crewDailyRoster";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            overflowX: "auto",
          }}
        >
          <Routing />
          {/* <Login /> */}
          {/* <Header /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
