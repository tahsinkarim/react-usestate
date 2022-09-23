import React, { useState } from "react";

const Mobile = () => {
  const [power, setPower] = useState(100);
  const powerDrain = () => {
    const newPower = power > 0 ? power - 10 : power;

    // Reset to 100
    // const newPower = power <= 0 ? 100 : power - 10;
    setPower(newPower);
  };
  return (
    <div>
      <h1>{power}</h1>
      <button onClick={powerDrain}>Battery Down</button>
    </div>
  );
};

export default Mobile;
