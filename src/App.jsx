import "./App.css";
import * as React from "react";
import { PeoList } from "./PeoList";
import { Tictactoe } from "./Tictactoe";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { AddPeople } from "./AddPeople";
import { PeopleDetails } from "./PeopleDetails";
import { Edit } from "./edit";

function App() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch("https://63d75fbcafbba6b7c93beb74.mockapi.io/Peoples")
      .then((data) => data.json())
      .then((ppls) => setPeople(ppls));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit  />} />
        <Route
          path="people-list"
          element={<PeoList people={people} setPeople={setPeople} />}
        />
        <Route
          path="people-list/:id"
          element={<PeopleDetails people={people} setPeople={setPeople} />}
        />
        <Route
          path="add-people"
          element={<AddPeople people={people} setPeople={setPeople} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export function Navbar() {
  const navigate = useNavigate();
  const styles = {
    backgroundColor: "#C06C84",
    color: "black",
  };
  return (
    <AppBar sx={styles} position="static">
      <Toolbar>
        <Button onClick={() => navigate("/")} color="inherit">
          Home
        </Button>
        <Button onClick={() => navigate("/people-list")} color="inherit">
          People List
        </Button>
        <Button onClick={() => navigate("/add-people")} color="inherit">
          Add People
        </Button>
      </Toolbar>
    </AppBar>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome Buddy 🙋‍♂️🙋‍♂️🙏🙏</h1>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <img
        className="notfound"
        src="https://media.tenor.com/swTDQJ85dDEAAAAC/aaaa.gif"
        alt="Page Not Found"
      />
    </div>
  );
}

export default App;
