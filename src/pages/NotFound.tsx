import React from "react";
import ErrorInfoBox from "../components/noContactInfo/ErrorInfoBox";
/**
 *
 * @returns JSX.Element
 *
 * 404 not found page
 */
const NotFound = () => {
  return (
    <ErrorInfoBox>
      <h5 className="text-2xl font-thin">404! Not found!</h5>
    </ErrorInfoBox>
  );
};

export default NotFound;
