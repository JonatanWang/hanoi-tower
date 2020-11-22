import React from "react";

function Disc(props) {
  const { size, color, currentDisc } = props;
  const style = {
    width: 30 * size + "px",
    backgroundColor: color,
  };

  return (
    <div className="Disc" style={style}>
      {size === currentDisc ? "🤔" : null}
    </div>
  );
}

export default Disc;
