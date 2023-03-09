import * as React from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";

export function Edit() {
    const navigate = useNavigate();
    const [peoples, setPeople] = useState([]);

        const [name, setName] = useState("");
        const [image, setImage] = useState("");
        const [gender, setGender] = useState("");
        const [hairColor, setHairColor] = useState("");
        const [occupation, setOccupation] = useState("");
        const [firstEpisode, setFirstEpisode] = useState("");
        const [voicedBy, setVoicedBy] = useState("");
        const [url, setUrl] = useState("");
        const [wikiUrl, setWikiUrl] = useState(""); 
        const [id, setId] = useState("");
    
const updateUser = async() => {
    await fetch(`https://63d75fbcafbba6b7c93beb74.mockapi.io/Peoples/${id}`, {
        method: "PUT",
        body: JSON.stringify(),
        headers: {
          "Content-Type": "application/json",
        },
        });
        navigate("/")
}

        useEffect(() => {
            setId(localStorage.getItem('id'))
          setName(localStorage.getItem('name'));
          setImage(localStorage.getItem('image'));
        }, []);
      
    return(
            <div>
                <div className="add">
                <TextField
                    onChange={(event) => setId(event.target.value)}
                    type="text"
                    label="id"
                    variant="outlined"
                    />
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
                    Edit
                    </Button>
                </div>
            </div>
    )
}