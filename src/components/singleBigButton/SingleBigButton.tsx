import React from "react";

const SingleBigButton = () => {
  const clickHandler = () => {
    console.log("clicked");
  };
  const buttonText = "oof";

  return <button onClick={clickHandler}>{buttonText}</button>;
};

export default SingleBigButton;
