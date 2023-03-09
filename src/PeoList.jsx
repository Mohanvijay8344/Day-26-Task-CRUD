import * as React from "react";
import { Peos } from "./Peos";

export function PeoList({ people, setPeople }) {
  return (
      <div className="container">
        {people.map((map) => (
          <Peos peo={map} key={map.id} id={map.id} />
        ))}
      </div>
  );
}
