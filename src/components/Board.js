import React, { useEffect, useState } from "react";
import Rod from "./Rod";

function Board(props) {
  const { numberOfDiscs } = props;

  const createDiscs = (num) => {
    const result = [];
    const colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "black",
      "blue",
      "purple",
    ];
    for (let i = 0; i < num; i++) {
      result.push({
        size: i + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        rod: 0,
      });
    }
    return result;
  };

  const [sortedDiscs, setSortedDiscs] = useState(createDiscs(numberOfDiscs));

  const [currentDisc, setCurrentDisc] = useState(null);

  const [steps, setSteps] = useState(0);

  useEffect(() => {
    document.title =
      "You have moved " +
      steps +
      " steps! The current disc is " +
      currentDisc +
      ".";
  });

  const smallestDisc = (rod) => {
    const discsAtGivenRod = sortedDiscs.filter((disc) => disc.rod === rod);
    if (discsAtGivenRod.length === 0) {
      return null;
    }

    const smallestDiscSize = discsAtGivenRod[0].size;

    return smallestDiscSize;
  };

  const handleClick = (rod) => {
    const isFirstClick = currentDisc == null;
    if (isFirstClick) {
      const smallestDiscSize = smallestDisc(rod);
      if (smallestDiscSize != null) {
        setCurrentDisc(smallestDiscSize);
      }
    } else {
      setCurrentDisc(null);

      if (smallestDisc(rod) != null && smallestDisc(rod) <= currentDisc) {
        return;
      }

      sortedDiscs.forEach((disc) => {
        if (disc.size === currentDisc) {
          disc.rod = rod;
        }
      });
      setSortedDiscs(sortedDiscs);
      setSteps(steps + 1);
    }
  };

  return (
    <>
      <div className="Board">
        <Rod
          position={0}
          discs={sortedDiscs}
          handleClick={handleClick}
          currentDisc={currentDisc}
        />
        <Rod
          position={1}
          discs={sortedDiscs}
          handleClick={handleClick}
          currentDisc={currentDisc}
        />
        <Rod
          position={2}
          discs={sortedDiscs}
          handleClick={handleClick}
          currentDisc={currentDisc}
        />
      </div>
    </>
  );
}

export default Board;
