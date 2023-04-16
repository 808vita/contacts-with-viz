import React from "react";
import { PropsChildren } from "../contactForm/hooks/ContactFormContext";

/**
 *
 * @returns jsx
 *
 * to be diplayed no contacts found in store
 */
const ErrorInfoBox = ({ children }: PropsChildren) => {
  return (
    <div className="flex flex-col md:flex-row flex-auto border-solid border-2 border-grey-600 p-10 m-5 mt-10 bg-violet-50">
      <div className="flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100px"
          height="100px"
          viewBox="0 0 24 24"
        >
          <rect x="0" fill="none" width="24" height="24" />

          <g>
            <path d="M19.1 4.9C15.2 1 8.8 1 4.9 4.9S1 15.2 4.9 19.1s10.2 3.9 14.1 0 4-10.3.1-14.2zm-4.3 11.3L12 13.4l-2.8 2.8-1.4-1.4 2.8-2.8-2.8-2.8 1.4-1.4 2.8 2.8 2.8-2.8 1.4 1.4-2.8 2.8 2.8 2.8-1.4 1.4z" />
          </g>
        </svg>
      </div>

      <div className="p-5">
        {/* <h5 className="text-2xl">No Contact Found.</h5>
        <h5 className="text-2xl">
          Please add contact from Create Contact Button
        </h5> */}

        {children}
      </div>
    </div>
  );
};

export default ErrorInfoBox;
