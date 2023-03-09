import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export function AddPeople() {
  const [people, setPeople] = useState();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [occupation, setOccupation] = useState("");
  const [firstEpisode, setFirstEpisode] = useState("");
  const [voicedBy, setVoicedBy] = useState("");
  const [url, setUrl] = useState("");
  const [wikiUrl, setWikiUrl] = useState("");

  const addPeople = async() => {
  const newPeople = {
    name: name,
    image: image,
    gender: gender,
    hairColor: hairColor,
    occupation: occupation,
    firstEpisode: firstEpisode,
    voicedBy: voicedBy,
    url: url,
    wikiUrl: wikiUrl,
  };
  console.log(newPeople);

  await fetch("https://63d75fbcafbba6b7c93beb74.mockapi.io/Peoples",{
  method: "POST",
  body: JSON.stringify(newPeople),
  headers: {
    "Content-Type": "application/json",
  },
  });
  navigate("/")
  };
  return (
    <div>
      <div className="add">
        <TextField
          onChange={(event) => setName(event.target.value)}
          type="text"
          label="Name"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setImage(event.target.value)}
          type="text"
          label="Image"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setGender(event.target.value)}
          type="text"
          label="Gender"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setHairColor(event.target.value)}
          type="text"
          label="HairColor"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setOccupation(event.target.value)}
          type="text"
          label="Occupation"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setFirstEpisode(event.target.value)}
          type="text"
          label="FirstEpisode"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setVoicedBy(event.target.value)}
          type="text"
          label="VoicedBy"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setUrl(event.target.value)}
          type="text"
          label="Url"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setWikiUrl(event.target.value)}
          type="text"
          label="WikiUrl"
          variant="outlined"
        />
        <Button
          onClick={() => addPeople()} 
          color="primary"
          variant="text"
        >
          Add Person
        </Button>
      </div>
    </div>
  )};
    
  
