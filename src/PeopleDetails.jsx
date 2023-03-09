import * as React from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EditIcon from "@mui/icons-material/Edit";

export function PeopleDetails({Edit}) {
  const navigate = useNavigate();
  
    const {id} = useParams();
    const [peoples, setPeople] = useState([]);

  useEffect(() => {
    fetch(`https://63d75fbcafbba6b7c93beb74.mockapi.io/Peoples/${id}`)
      .then((data) => data.json())
      .then((ppls) => setPeople(ppls));
  }, []);

  const deletePeo = async () => {
   await fetch(`https://63d75fbcafbba6b7c93beb74.mockapi.io/Peoples/${id}`,{
      method: "DELETE",
      body: JSON.stringify(peoples),
      headers: {
      "Content-Type": "application/json",
     },
    });
    navigate("/people-list")
  };

  return (
    <div className="container1">
      <div>
        <img className="image" src={peoples.image} alt={peoples.name} />
      </div>
      <div className="contents">
        <h1>{peoples.name}</h1>
        <p className="Gender">
          Gender: <b>{peoples.gender}</b>
        </p>
        <p className="HairColor">
          HairColor: <b>{peoples.hairColor}</b>
        </p>
        <p className="Occupation">
          Occupation: <b>{peoples.occupation}</b>
        </p>
        <p className="Age">
          Age: <b>{peoples.age}</b>
        </p>
        <p className="FirstEpisode">
          FirstEpisode: <b>{peoples.firstEpisode}</b>
        </p>
        <p className="VoicedBy">
          VoicedBy: <b>{peoples.voicedBy}</b>
        </p>
        <p className="Url">
          Url: <b>{peoples.url}</b>
        </p>
        <p className="WikiUrl">
          WikiUrl: <b>{peoples.wikiUrl}</b>
        </p>
      </div>
      <div className="btn">
        <Button
          startIcon={<KeyboardBackspaceIcon />}
          className="btn"
          variant="outlined"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
        <Button onClick={() => Edit()} startIcon={<EditIcon />} className="btn" variant="outlined">
          Update
        </Button>
        <Button onClick={() => deletePeo()} startIcon={<DeleteIcon />} className="btn" variant="outlined">
          Delete
        </Button>
      </div>
    </div>
  );
}
