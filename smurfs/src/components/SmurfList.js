import React from "react";

import Smurfs from "./Smurfs";

const SmurfList = props => {
  return (
    <ul>
      {props.smurfs.map(smurf => {
        return <Smurfs key={smurf.name} smurf={smurf} />;
      })}
    </ul>
  );
};

export default SmurfList;
