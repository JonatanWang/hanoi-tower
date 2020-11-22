import React from "react";
import Disc from "./Disc";

function Rod(props) {
  const { position, discs, handleClick, currentDisc } = props;

  const myDiscs = discs.filter((item) => item.rod === position);
  const myDiscElements = myDiscs.map((item) => (
    <Disc
      key={item.size}
      size={item.size}
      color={item.color}
      currentDisc={currentDisc}
    />
  ));

  return (
    <div className="Rod" onClick={() => handleClick(position)}>
      <div className="Rod-stick" />
      {myDiscElements}
    </div>
  );
}

export default Rod;
