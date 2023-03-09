import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from "react-router-dom";

export function Peos({ peo, id }) {
  const navigate = useNavigate();
  return (
    <div className="peo">
      <div className="name">
        <h3>{peo.name}</h3>
      </div>
      <img className="img" src={peo.image} alt={peo.name} />
      <div className="content">
        <p className="Gender">Gender: {peo.gender}</p>
        <p className="HairColor">HairColor: {peo.hairColor}</p>
      </div>
      <div className="button" >
        <button onClick={() => navigate(`/people-list/${id}`)}>More Details</button>
      </div>
    </div>
  );
}
